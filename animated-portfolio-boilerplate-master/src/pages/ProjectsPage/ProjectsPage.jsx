import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { RiGlobalFill } from "react-icons/ri";
import "./ProjectsPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

function ProjectsPage() {
  const [project, setProject] = useState([]);
  const [selectedImg, setSelectedImg] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/projects/${id}`);
        const data = await res.data;
        setProject(data);
        setSelectedImg(data.images.url[0]);
      } catch (error) {
        throw error;
      }
    };
    getProject();
  }, [id]);

  const handleImage = (newImg) => {
    setSelectedImg(newImg);
  };

  return (
    <section className="project__page">
      <div className="__left">
        <div className="main__project__image">
          <img src={selectedImg} alt="main project" />
        </div>
        <div className="select__project__image">
          {project?.images?.url.map((item, idx) => (
            <img
              key={idx}
              src={item}
              alt={idx}
              onClick={() => {
                handleImage(item);
              }}
            />
          ))}
        </div>
      </div>
      <div className="__right">
        <h1 className="primary__title">{project?.title}</h1>
        <p className="color__muted description">{project?.desc}</p>
        <div className="stack__container">
          <div className="stack__title">Technologie Used</div>
          <div className="stack__right">
            <div className="stack__box__container">
              {project?.stack?.map((list, idx) => (
                <div className="stack__box" key={idx}>
                  <div className="stack__icon__container">
                    <span
                      className="stack__icon"
                      style={{ color: list.stackColor }}
                    >
                      {list.stackName === "react.js" && <FaReact />}
                      {list.stackName === "node.js" && <FaNodeJs />}
                      {list.stackName === "express" && <SiExpress />}
                      {list.stackName === "mongodb" && <SiMongodb />}
                      {list.stackName === "next.js" && <SiNextdotjs />}
                      {list.stackName === "figma" && <FaFigma />}
                      {list.stackName === "fluter" && <SiFlutter />}
                      {list.stackName === "react-native" && (
                        <TbBrandReactNative />
                      )}
                      {list.stackName === "html" && <FaHtml5 />}
                      {list.stackName === "css" && <FaCss3Alt />}
                      {list.stackName === "bootstrap" && <FaBootstrap />}
                      {list.stackName === "tailwindcss" && <SiTailwindcss />}
                      {list.stackName === "shadcn-ui" && <SiShadcnui />}
                      {list.stackName === "javascript" && <SiJavascript />}
                      {list.stackName === "typescript" && <SiTypescript />}
                    </span>
                    <span className="stack__name">{list?.stackName}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="buttons__right">
          {project.globalLink && (
            <a
              href={project?.globalLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn_primary"
            >
              Demo <RiGlobalFill className="icon" />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project?.githubLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn_primary"
            >
              Github <BsGithub className="icon" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
