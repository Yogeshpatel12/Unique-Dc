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
    image: "https://unitorq.in/img/applications/auto-labelling-machines.jpg",
    name: "Auto Labelling Machines",

  },
  {
    image: "https://unitorq.in/img/applications/bag-making-machines.jpg",
    name: "Bag Making Machines",

  },
  {
    image: "https://unitorq.in/img/applications/bottle-washing-machines.jpg",
    name: "Bottle Washing Machines",
   
  },
  {
    image: "https://unitorq.in/img/applications/brake-motors.jpg",
    name: "Brake Motors",
    
  },
  {
    image: "https://unitorq.in/img/applications/coil-winding-machines.jpg",
    name: "Coil Winding Machines",
  },
  {
    image: "https://unitorq.in/img/applications/conveyors.jpg",
    name: "Conveyors",
  },
  {
    image: "https://unitorq.in/img/applications/copy-lathes.jpg",
    name: "Copy Lathes",
  },
  {
    image: "https://unitorq.in/img/applications/cut-to-length-machineries.jpg",
    name: "Cut to Length Machineries",
  },
  {
    image: "https://unitorq.in/img/applications/filling-machineries.jpg",
    name: "Filling Machineries",
  },
  {
    image: "https://unitorq.in/img/applications/glass-making-machines.jpg",
    name: "Glass Making Machines",
  },
  {
    image: "https://unitorq.in/img/applications/indexing-machineries.jpg",
    name: "Indexing Machineries",
  },
  {
    image: "https://unitorq.in/img/applications/industrial-washing-machines.jpg",
    name: "Industrial Washing Machines",
  },
];

const SpeakersThree: React.FC = () => {
  return (
    <>
      <div className="speakers-area-two ptb-120">
        <div className="container">
          <div className="row">
            {SpeakersMemberData &&
              SpeakersMemberData.slice(0, 12).map((value, i) => (
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

export default SpeakersThree;
