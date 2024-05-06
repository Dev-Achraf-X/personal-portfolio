import { useRef } from "react";
import "./Projects.css";
import { useState } from "react";
import { useEffect } from "react";
import { sumArray } from "../../Helper";
import ProjectCard from "./ProjectCard/ProjectCard";
import axios from "axios";

const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "UI/UX" },
  { name: "Apps" },
];

function Projects() {
  const itemsEls = useRef(new Array());
  const [activeIdx, setActiveIdx] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [displayableProjects, setDisplayableProjects] = useState([]);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/projects");
        setDisplayableProjects(res.data);
        setProjectData(res.data);
      } catch (error) {
        throw error;
      }
    };

    getProjects();
  }, []);

  useEffect(() => {
    const prevEl = itemsEls?.current?.filter((_, index) => index < activeIdx);
    setOffset(sumArray(prevEl.map((item) => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIdx].offsetWidth);
  }, [activeIdx]);

  const setProjects = (category) => {
    if (category === "All") {
      return setDisplayableProjects(projectData);
    }
    const pro = projectData.filter(
      (item) =>
        item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
    );
    setDisplayableProjects(pro);
  };

  return (
    <section id="projects">
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, idx) => (
            <button
              ref={(el) => (itemsEls.current[idx] = el)}
              onClick={() => {
                setActiveIdx(idx);
                setProjects(tab.name);
              }}
              key={idx}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{ left: `${offset}px`, width: `${indicatorWidth}px` }}
          ></span>
        </nav>

        <div className="card__container">
          {displayableProjects.map((project, idx) => (
            <ProjectCard project={project} key={project._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
