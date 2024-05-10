import "./ProjectCard.css";
import { Link } from "react-router-dom";
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

function ProjectCard({ project }) {
  return (
    <div className="card">
      <Link to={`/projects/${project?._id}`} className="picture">
        <img src={project.images.url[0]} alt={project?.title} />
      </Link>
      <div className="card__details">
        <Link to={`/projects/${project?._id}`} className="card__details__top">
          <h2 className="title">{project?.title}</h2>
        </Link>
        <div className="card__details__middle">
          <p className="description">{project?.desc}</p>
        </div>
        <div className="card__details__bottom">
          <div className="stack__container">
            <div className="stack__left">Stack</div>
            <div className="stack__right">
              <div className="stack__box__container">
                {project?.stack?.slice(0, 4).map((list, idx) => {
                  if (idx < 4) {
                    return (
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
                            {list.stackName === "javascript" && (
                              <SiJavascript />
                            )}
                            {list.stackName === "typescript" && (
                              <SiTypescript />
                            )}
                          </span>
                          <span className="stack__name">{list.stackName}</span>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              {/* {project?.stack.length > 4 && (
                <div className="stack__view__more">
                  <div
                    className="more__btn"
                    onClick={() => {
                      setOpenStackExpandBar(!openStackExpandBar);
                    }}
                  ></div>
                  <div
                    className={`stack__expand__box ${
                      openStackExpandBar && "open__stack__expand__box"
                    }`}
                  >
                    <h3 className="title">More Stack Used</h3>
                    <div className="stack__box__container">
                      {project?.stack.map((list, idx) => {
                        if (idx >= 4) {
                          return (
                            <div className="stack__box" key={idx}>
                              <div className="stack__icon__container">
                                <span
                                  className="stack__icon"
                                  style={{ color: list.iconColor }}
                                >
                                  {list.icon}
                                </span>
                                <span className="stack__name">{list.name}</span>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )} */}
            </div>
          </div>

          <div className="button__container">
            {project.githubLink && (
              <Link
                to={project?.githubLink}
                target="-blank"
                className="btn btn_primary"
              >
                Github
              </Link>
            )}
            <Link to={`/projects/${project._id}`} className="btn btn_primary">
              View more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
