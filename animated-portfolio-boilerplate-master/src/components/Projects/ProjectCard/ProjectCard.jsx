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
                            {list.stackName === "tailwindcss" && (
                              <SiTailwindcss />
                            )}
                            {list.stackName === "shadcn-ui" && <SiShadcnui />}
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
                Demo
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
