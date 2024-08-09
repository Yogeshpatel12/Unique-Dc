"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactInfo from "../ContactUs/ContactInfo";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer-area">
      
        <div className="container">
          <div className="row">
          <ContactInfo  />
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>REGISTERED & HEAD OFFICE</h3>
               

                <p className="location">
                  <i className="icofont-google-map"></i> Electromatic Engineers 
                  8-B Saheli Marg, Udaipur Rajasthan (India)
                </p>

                <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-phone"></i> 0294-2526933 (Landline)
                  
                </Link>
                <div className="pb-4">
                <Link href="/contact-us" className="contact-authority">
                  <i className="icofont-fax"></i> 0294-2526525 (Fax) 
                </Link>
                </div>

                <h3>Group Companies</h3>
                <Link href="/contact-us" className="contact-authority">
                Unitorq Engineers Pvt. Ltd.
                Sytco Engineers         
               
                </Link>
                 
                
              </div>
            </div>
            

            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget">
                <h3>REGIONAL OFFICES</h3>
                <p>
                Udaipur  :  Mr. Avinesh Gupta +91- 9829044330<br />
                Delhi  :    Mr. Amardeep Singh  +91- 98102 55901<br />
                Kolkatta  :  Mr. S.K. Chakraborty   +91- 94330 46308<br />
                Maharasthtra  :  Mr. Yusuf  +91- 9764410000<br />
                </p>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="copyright-area">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="https://unitorq.in/img/logo.png"
                      alt="logo"
                      width={120}
                      height={38}
                    />
                  </Link>
                </div>

                <ul>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                  <li>
                    <Link href="">Home</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy"> Certifications</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Applications</Link>
                  </li>
                </ul>

                <div className="col">
                        <p className="copyright">&copy; {new Date().getFullYear()} <strong>Unitorq</strong> Made with Love by <a href="#"><strong>Chavhan</strong></a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
