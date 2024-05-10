import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsGithub } from "react-icons/bs";
import { RiGlobalFill } from "react-icons/ri";
import "./ProjectsPage.css";
import { Link, useParams } from "react-router-dom";
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
import Spinner from "../../Helper/Spinner/Spinner";

function ProjectsPage() {
  const [project, setProject] = useState([]);
  const [selectedImg, setSelectedImg] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://achraf-portfolio.onrender.com/api/projects/${id}`
        );
        const data = await res.data;
        setProject(data);
        setSelectedImg(data.images.url[0]);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    getProject();
  }, [id]);

  const handleImage = (newImg) => {
    setSelectedImg(newImg);
  };

  return (
    <section className="project__page">
      {loading ? (
        <Spinner />
      ) : (
        <>
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
                          style={{
                            color:
                              list.stackName === "react.js"
                                ? "#61dafb"
                                : list.stackName === "next.js"
                                ? "#a8b9c0"
                                : list.stackName === "express"
                                ? "#c3ccda"
                                : list.stackName === "mongoDB"
                                ? "#049024"
                                : list.stackName === "node.js"
                                ? "#68a063"
                                : list.stackName === "figma"
                                ? "#e04a34"
                                : list.stackName === "fluter"
                                ? "#54c0f4"
                                : list.stackName === "reactNative"
                                ? "#61dafb"
                                : list.stackName === "HTML"
                                ? "#e34c26"
                                : list.stackName === "CSS"
                                ? "#264de4"
                                : list.stackName === "bootstrap"
                                ? "#563d7c"
                                : list.stackName === "tailwindCss"
                                ? "#3c92f2"
                                : list.stackName === "shadcn"
                                ? "#838c91"
                                : list.stackName === "javascript"
                                ? "#f0db4f"
                                : list.stackName === "typescript"
                                ? "#007acc"
                                : "skyblue",
                          }}
                        >
                          {list.stackName === "react.js" && <FaReact />}
                          {list.stackName === "node.js" && <FaNodeJs />}
                          {list.stackName === "express" && <SiExpress />}
                          {list.stackName === "mongoDB" && <SiMongodb />}
                          {list.stackName === "next.js" && <SiNextdotjs />}
                          {list.stackName === "figma" && <FaFigma />}
                          {list.stackName === "fluter" && <SiFlutter />}
                          {list.stackName === "reactNative" && (
                            <TbBrandReactNative />
                          )}
                          {list.stackName === "HTML" && <FaHtml5 />}
                          {list.stackName === "CSS" && <FaCss3Alt />}
                          {list.stackName === "bootstrap" && <FaBootstrap />}
                          {list.stackName === "tailwindCss" && (
                            <SiTailwindcss />
                          )}
                          {list.stackName === "shadcn" && <SiShadcnui />}
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
        </>
      )}
      <Link to={"/"} className="goback__btn btn_primary">
        <BsArrowLeft /> <span>Go Back</span>
      </Link>
    </section>
  );
}

export default ProjectsPage;
