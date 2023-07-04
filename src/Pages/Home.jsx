/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./home.css";

const Form = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const qrCodeData = JSON.stringify(formData);
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    localStorage.setItem("formData", qrCodeData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData) {
      const qrCodeData = JSON.stringify(formData);
      localStorage.setItem("formData", qrCodeData);
      window.location.href = "/get-certificate";
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">TIN Number:</label>
            <input
              type="text"
              id="TINnumber"
              name="TINnumber"
              value={formData?.TINnumber || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="fatherName">Father's Name:</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData?.fatherName || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="motherName">Mother's Name:</label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              value={formData?.motherName || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="currentAddress">Current Address:</label>
            <textarea
              id="currentAddress"
              name="currentAddress"
              value={formData?.currentAddress || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="permanentAddress">Permanent Address:</label>
            <textarea
              id="permanentAddress"
              name="permanentAddress"
              value={formData?.permanentAddress || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="previousTIN">Previous TIN:</label>
            <input
              type="text"
              id="previousTIN"
              name="previousTIN"
              value={formData?.previousTIN || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData?.status || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Date:</label>
            <input
              type="text"
              id="date"
              name="date"
              value={formData?.date || ""}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Get Certificate</button>
        </form>
      </div>
      <div>
        {formData && (
          <div>
            <QRCode value={JSON.stringify(formData)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
