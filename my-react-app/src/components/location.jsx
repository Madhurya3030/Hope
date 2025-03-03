import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Reportcase.css";

const Reportcase = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    children: "",
    studying: "",
    healthIssues: "",
    healthDetails: "",
    address: "",
    location: "",
    earnings: "",
    sufficientFood: false,
    needHelp: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=en`
            );
            const data = await response.json();
            if (data.address) {
              const locationName = data.address.city || data.address.town || data.address.village || "Unknown Location";
              setFormData((prevData) => ({
                ...prevData,
                location: locationName,
              }));
            }
          } catch (error) {
            console.error("Error fetching location:", error);
            setFormData((prevData) => ({
              ...prevData,
              location: "Location not found",
            }));
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setFormData((prevData) => ({
            ...prevData,
            location: "Location access denied",
          }));
        },
        { enableHighAccuracy: true }
      );
    } else {
      setFormData((prevData) => ({
        ...prevData,
        location: "Geolocation not supported",
      }));
    }
  }, []);
  
      
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age) newErrors.age = "Age is required";
    if (!formData.children) newErrors.children = "Number of children is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.earnings) newErrors.earnings = "Earnings are required";
    if (formData.healthIssues === "yes" && !formData.healthDetails) {
      newErrors.healthDetails = "Please provide health details";
    }
    if (!formData.needHelp) newErrors.needHelp = "Please select if help is needed";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      axios.post("http://localhost:4000/report", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
      });
    }
  };

  return (
    <div className="register-container">
      <h2>Help Form</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
          {errors.age && <p className="error-text">{errors.age}</p>}
        </div>

        <div className="form-group">
          <label>Number of Children:</label>
          <select name="children" value={formData.children} onChange={handleChange}>
            <option value="">Select</option>
            {[...Array(10).keys()].map((num) => (
              <option key={num} value={num.toString()}>{num}</option>
            ))}
          </select>
          {errors.children && <p className="error-text">{errors.children}</p>}
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} readOnly />
          {errors.location && <p className="error-text">{errors.location}</p>}
        </div> 

        <div className="form-group">
          <label>Sufficient Food?</label>
          <div className="radio-group">
            <input
              type="radio"
              name="sufficientFood"
              value={true}
              checked={formData.sufficientFood === true}
              onChange={() => setFormData((prev) => ({ ...prev, sufficientFood: true }))}
            /> Yes
            <input
              type="radio"
              name="sufficientFood"
              value={false}
              checked={formData.sufficientFood === false}
              onChange={() => setFormData((prev) => ({ ...prev, sufficientFood: false }))}
            /> No
          </div>
        </div>

        <div className="form-group">
          <label>Upload Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
          {preview && <img src={preview} alt="Preview" className="preview-img" />}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Reportcase;
