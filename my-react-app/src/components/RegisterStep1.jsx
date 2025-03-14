import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./RegisterStep1.css"; 

function RegisterStep1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    aadhar: "",
    phone: "", 
    otp: "",
    location: "",
    username: "", 
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.aadhar.match(/^\d{12}$/))
      newErrors.aadhar = "Aadhar must be exactly 12 digits";
    if (!formData.phone.match(/^\+91\d{10}$/))
      newErrors.phone = "Enter phone number in +91XXXXXXXXXX format";
    
    if (!otpSent) newErrors.otp = "Please request OTP first";
    if (!formData.otp.match(/^\d{6}$/))
      newErrors.otp = "OTP must be exactly 6 digits";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOTP = async () => {
    if (!formData.phone.match(/^\+91\d{10}$/)) {
      setErrors((prev) => ({ ...prev, phone: "Enter a valid phone number in +91XXXXXXXXXX format" }));
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/send-otp", { phone: formData.phone });
      console.log("OTP Response:", response.data);
      setOtpSent(true);
      alert("OTP sent to " + formData.phone);
    } catch (error) {
      if (error.response) {
        console.log("📌 Response Data:", error.response.data);
        console.log("📌 Status Code:", error.response.status);
    } else {
        console.log("📌 No response received from server.");
    }
      console.error("Error sending OTP:", error);
      console.error("Response Data:", error.response?.data);
      alert("Failed to send OTP.");
    }
  };

  const verifyOtp = async () => {
    try {
        const response = await axios.post("http://localhost:4000/verify-otp", {
            phone: formData.phone,
            otp: formData.otp,
        });

        alert(" OTP verified successfully!");
        console.log("OTP Verification Response:", response.data);
    } catch (error) {
        console.error(" OTP verification failed:", error);

        if (error.response) {
            console.log("📌 Response Data:", error.response.data);
            console.log("📌 Status Code:", error.response.status);
        }

        alert("Invalid OTP. Please try again.");
    }
};


const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) {
    console.log("Sending data:", formData); 
    axios.post("http://localhost:4000/registration1", formData)
      .then(() => {
        navigate("/report");
      })
      .catch((err) => {
        console.error("Registration failed:", err.response?.data || err.message);
        alert("Registration failed. Please try again later.");
      });
  }
};
  return (
    <>
      <Navbar />
      <div className="register-container">
  <h2>REGISTER</h2>
  <form className="form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label>First Name</label>
      <input 
        type="text" 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange} 
        placeholder="Enter your first name" 
      />
      {errors.firstName && <p className="error-text">{errors.firstName}</p>}
    </div>

    <div className="form-group">
      <label>Last Name</label>
      <input 
        type="text" 
        name="lastName" 
        value={formData.lastName} 
        onChange={handleChange} 
        placeholder="Enter your last name" 
      />
      {errors.lastName && <p className="error-text">{errors.lastName}</p>}
    </div>

    <div className="form-group">
      <label>Date of Birth</label>
      <input 
        type="date" 
        name="dob" 
        value={formData.dob} 
        onChange={handleChange} 
        placeholder="Select your date of birth" 
      />
      {errors.dob && <p className="error-text">{errors.dob}</p>}
    </div>

    <div className="form-group">
      <label>Aadhar Number</label>
      <input 
        type="text" 
        name="aadhar" 
        value={formData.aadhar} 
        onChange={handleChange} 
        maxLength="12" 
        placeholder="Enter your 12-digit Aadhar number" 
      />
      {errors.aadhar && <p className="error-text">{errors.aadhar}</p>}
    </div>

    <div className="form-group">
      <label>Phone Number</label>
      <input 
        type="text" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
        maxLength="13" 
        placeholder="Enter your phone number" 
      />
      {errors.phone && <p className="error-text">{errors.phone}</p>}

      <button type="button" className="otp-btn" onClick={sendOTP}>Send OTP</button>
    </div>

    <div className="form-group">
      <label>OTP</label>
      <input 
        type="text" 
        name="otp" 
        value={formData.otp} 
        onChange={handleChange} 
        maxLength="6" 
        disabled={!otpSent} 
        placeholder="Enter OTP" 
      />
      {errors.otp && <p className="error-text">{errors.otp}</p>}

      <button type="button" className="otp-btn" onClick={verifyOtp}>Verify OTP</button>
    </div>

    <div className="form-group">
      <label>Location</label>
      <input 
        type="text" 
        name="location" 
        value={formData.location} 
        onChange={handleChange} 
        placeholder="Enter your location" 
      />
      {errors.location && <p className="error-text">{errors.location}</p>}
    </div>

    <div className="form-group">
      <label>Username</label>
      <input 
        type="text" 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
        placeholder="Choose a username" 
      />
      {errors.username && <p className="error-text">{errors.username}</p>}
    </div>

    <div className="form-group">
      <label>Password</label>
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="Create a password" 
      />
      {errors.password && <p className="error-text">{errors.password}</p>}
    </div>

    <div className="form-group">
      <label>Confirm Password</label>
      <input 
        type="password" 
        name="confirmPassword" 
        value={formData.confirmPassword} 
        onChange={handleChange} 
        placeholder="Confirm your password" 
      />
      {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
    </div>

    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>

    </>
  );
}

export default RegisterStep1;
