"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SpeakersMember {
  image: string;
  name: string;
}



const SpeakersMemberData: SpeakersMember[] = [
  {
    image: "https://unitorq.in/img/certification/certificate-1.jpg",
    name: "CE Certificate - EM Fail Safe Brakes",
  },
  {
    image: "https://unitorq.in/img/certification/certificate-2.jpg",
    name: "CE Certificate - EM Normally Off Brakes",
  },
  {
    image: "https://unitorq.in/img/certification/certificate-3.jpg",
    name: "CE Certifications- EM. Clutch & Brake Combination",    
  },
  {
    image: "https://unitorq.in/img/certification/certificate-4.jpg",
    name: "Chamber Of commerce-Udaipur",   
  },
  {
    image: "https://unitorq.in/img/certification/certificate-5.jpg",
    name: "ISO Certificate",
  },
];

const SpeakersTwo: React.FC = () => {
  return (
    <>
      <div className="speakers-area-two ptb-120">
        <div className="container">
          <div className="row">
            {SpeakersMemberData &&
              SpeakersMemberData.slice(0, 6).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-speakers-box">
                    <div className="speakers-image">
                      <Image
                        src={value.image}
                        alt="speaker"
                        width={800}
                        height={800}
                      />
                    </div>

                    <div className="speakers-content">
                      <h3>{value.name}</h3>
                
                     
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default SpeakersTwo;
