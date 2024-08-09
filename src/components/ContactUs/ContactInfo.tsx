"use client";

import React from "react"; 

const ContactInfo: React.FC = () => {
  return (
    <>
      <div className="row justify-content-center pb-5">
        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-phone"></i>
            </div>

            <div className="content">
              <h4>Phone</h4>
             
              <p> +91-9001992823</p>
              <p> +91-9001995895</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-email"></i>
            </div>

            <div className="content">
              <h4>E-mail</h4>
              <p>sales@clutchesbrakes.com
           </p>
              <p>     sales@unitorq.in  </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="contact-box">
            <div className="icon">
              <i className="icofont-world"></i>
            </div>

            <div className="content">
              <h4>WEBSITE</h4>
              <p> www.clutchesbrakes.com</p>
              <p>www.sytcobrakes.com    </p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default ContactInfo;
