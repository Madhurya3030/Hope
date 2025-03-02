import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, photo: file });
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
      alert("Form submitted successfully!");
      navigate("/home");
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
              <label>No. of Children:</label>
              <select name="children" value={formData.children} onChange={handleChange}>
                <option value="">Select</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              {errors.children && <p className="error-text">{errors.children}</p>}
        </div>


        <div className="form-group">
            <label>Are they studying?</label>
              <div className="radio-group">
              
                  
                  <input type="radio" className="rad" name="studying" value="yes" checked={formData.studying === "yes"} onChange={handleChange} /> Yes

                  <input type="radio"  className= "rad" name="studying" value="no" checked={formData.studying === "no"} onChange={handleChange} /> No
            
              </div>
        </div>
          
          
      

        <div className="form-group">
          <label>Any health issues?</label>
          <div className="radio-group">
            <input type="radio" name="healthIssues" value="yes" checked={formData.healthIssues === "yes"} onChange={handleChange} /> Yes
            <input type="radio" name="healthIssues" value="no" checked={formData.healthIssues === "no"} onChange={handleChange} /> No
          </div>
        </div>

        {formData.healthIssues === "yes" && (
          <div className="form-group">
            <label>Health Details:</label>
            <input type="text" name="healthDetails" value={formData.healthDetails} onChange={handleChange} />
            {errors.healthDetails && <p className="error-text">{errors.healthDetails}</p>}
          </div>
        )}

        <div className="form-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} />
          {errors.address && <p className="error-text">{errors.address}</p>}
        </div>

        <div className="form-group">
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
          {errors.location && <p className="error-text">{errors.location}</p>}
        </div>

        <div className="form-group">
          <label>Earnings:</label>
          <input type="number" name="earnings" value={formData.earnings} onChange={handleChange} />
          {errors.earnings && <p className="error-text">{errors.earnings}</p>}
        </div>

        <div className="form-group">
          <label>Sufficient Food?</label>
          <div className="radio-group">
          <input type="radio" name="healthIssues" value="yes" checked={formData.healthIssues === "yes"} onChange={handleChange} /> Yes
          <input type="radio" name="healthIssues" value="no" checked={formData.healthIssues === "no"} onChange={handleChange} /> No
          </div>
        </div>

        <div className="form-group">
          <label>Do you need help?</label>
          <div className="radio-group">
            <input type="radio" name="needHelp" value="yes" checked={formData.needHelp === "yes"} onChange={handleChange} /> Yes
            <input type="radio" name="needHelp" value="no" checked={formData.needHelp === "no"} onChange={handleChange} /> No
          </div>
          {errors.needHelp && <p className="error-text">{errors.needHelp}</p>}
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