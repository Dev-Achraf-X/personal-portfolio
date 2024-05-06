import "./Skills.css";
import { experience } from "../../data.js";
import SkillCard from "./SkillCard/SkillCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Skills() {
  const container = useRef(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const el = container.current;
      gsap.fromTo(
        ".skill__container",
        { opacity: 1 },
        { opacity: 3, scrollTrigger: { trigger: el, scrub: true } }
      );
    },
    { scope: container }
  );

  return (
    <section id="skill" ref={container}>
      <div className="section__wrapper">
        <div className="section__header center">
          <h2 className="primary__title">My Skills</h2>
        </div>
        <div className="skill__container">
          {experience.map((item, idx) => (
            <SkillCard {...item} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
