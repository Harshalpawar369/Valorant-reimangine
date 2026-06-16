"use client";
import React from "react";
import "../css/form.css";
import { useState,useContext } from "react";
import axiosApi from "../api/axiosApi";
import { useRouter } from "next/navigation";
import userContext from "../context/userContext";

function page() {
  const router = useRouter();
  const { handleAuthSuccess } = useContext(userContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      email: formData.email.trim().toLowerCase(),
    };

    try {
      const response = await axiosApi.post("/login", payload);

      handleAuthSuccess(response.data.user);
      console.log("Login successful:", response.data);

      alert("Login successful!");
      router.push("/");
    } catch (error) {
  
      console.error("Full Error:", error);
      const errorMessage =
        error.response?.data?.message || "Could not connect to the server.";
      alert(errorMessage);
    }
  };

  return (
    <div className="form-page">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/video/valo7.mp4" type="video/mp4" />
      </video>
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
            <button type="submit" className="btn-submit">
              Login
            </button>
            <div className="form-footer">
              <p>Don't have an account? <a href="/signupForm">Sign up</a></p>
           
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
