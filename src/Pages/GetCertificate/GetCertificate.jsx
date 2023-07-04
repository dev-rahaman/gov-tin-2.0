/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import "./getCertificate.css";
import logo from "../../../public/logo.png";
import QRCode from "qrcode.react";

const GetCertificate = () => {
  const [formData, setFormData] = useState();

  useEffect(() => {
    const formDataString = localStorage.getItem("formData");
    if (formDataString) {
      try {
        const formData = JSON.parse(formDataString);
        setFormData(formData);
      } catch (error) {
        console.error("Error parsing formData:", error);
      }
    }
  }, [setFormData]);

  return (
    <>
      <div className="container-border">
        <div className="inner-border">
          <div className="header">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="header-content">
              <h2>Government of the People's Republic of Bangladesh</h2>
              <h2>National Board of Revenue</h2>
              <h3>Taxpayer's Identification Number (TIN) Certificate</h3>
              <h2 style={{ textDecoration: "underline" }}>
                TIN: {formData?.TINnumber}
              </h2>
            </div>
          </div>

          <div className="main-content">
            <p className="main-content-para">
              This is to Certify that <strong>{formData?.name}</strong> is a
              Registered Taxpayer of National Board of Review under The
              jurisdiction of <strong>Taxes Circle-002</strong>(Company) ,
              <strong>Taxes Zone Comilla</strong>.
            </p>
            <div className="main-content-form-data">
              <h3 className="particulars">Taxpayer's Particulars :</h3>
              <div className="formDataCertificate">
                <p>1&#41; Name : {formData?.name}</p>
                <p>2&#41; Father's Name : {formData?.fatherName}</p>
                <p>3&#41; Mather's Name : {formData?.motherName}</p>
                <p>4.a&#41; Current Address :{formData?.currentAddress}</p>
                <p>4.b&#41; Permanent Address : {formData?.permanentAddress}</p>
                <p>5&#41; Previous TIN : {formData?.previousTIN}</p>
                <p>6&#41; Status : {formData?.status}</p>
              </div>
            </div>
          </div>

          <div className="date">
            <p>Date : {formData?.date}</p>
          </div>

          <div className="footer-container">
            <div className="footer-left">
              <h2 style={{ textDecoration: "underline" }}>Please Note:</h2>
              <p>
                1. A Taxpayer is liable to file the Return of Income under
                section 75 of the Income Tax Ordinance, 1984.
              </p>
              <p>
                2. Failure to file Return of Income under section 75 liable{" "}
                <br />
                to-
              </p>
              <div style={{ marginLeft: "20px" }}>
                <p>(a) Penalty under section 14; and</p>
                <p>
                  (b) Prosecution under 164 of the Income Tax Ordinance, 1984.
                </p>
              </div>
            </div>

            <div>
              {formData && (
                <div>
                  <QRCode
                    value={JSON.stringify(formData)}
                    className="QR-code-img"
                    style={{ width: "220px", height: "220px" }}
                  />
                </div>
              )}
            </div>

            <div className="footer-right">
              <h5>Deputy Commissioner of Taxes</h5>
              <p>Taxes Circle-217</p>
              <p>Taxes Zone 10, Dhaka</p>
              <p>Address: 52/1, Bilashdi, Narshindi Sadar, Narsingdi. Phone</p>
              <p>: 0463121</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetCertificate;
