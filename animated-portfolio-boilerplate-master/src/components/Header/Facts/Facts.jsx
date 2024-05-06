import React, { useEffect, useRef, useState } from "react";
import Odometer from "react-odometerjs";
import "./Facts.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Facts() {
  const [experience, setExperience] = useState(0);
  const [projects, setProject] = useState(0);
  const [clients, setClients] = useState(0);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setExperience(5);
      setProject(30);
      setClients(2.5);
    }, 3000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, []);

  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const timeLine = gsap.timeline();
      timeLine.from(".fact__item", {
        delay: 1.5,
        x: -100,
        stagger: 0.5,
        opacity: 0,
      });
    },
    { scope: container }
  );

  return (
    <div className="fact__container" ref={container}>
      <div className="fact__item">
        <div className="count__container">
          <Odometer value={experience} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Years Of Experience</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer value={projects} />
          <span className="indicator">+</span>
        </div>
        <p className="name">Completed Projects</p>
      </div>

      <div className="fact__item">
        <div className="count__container">
          <Odometer value={clients} />
          <span className="indicator">K</span>
        </div>
        <p className="name">Satisfied Clients</p>
      </div>
    </div>
  );
}

export default Facts;
