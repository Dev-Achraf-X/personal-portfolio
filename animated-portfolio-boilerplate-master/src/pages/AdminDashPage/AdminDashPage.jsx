import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./AdminDashPage.css";
import axios from "axios";
import Spinner from "../../Helper/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

function AdminDashPage() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [globalLink, setGlobalLink] = useState("");
  const [slectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedStack((prev) => [...prev, { stackName: value }]);
    } else {
      setSelectedStack((prev) =>
        prev.filter((item) => item.stackName !== value)
      );
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };
  const formData = new FormData();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFiles == null) {
      toast.error("images is required!");
    } else if (title === "") {
      toast.error("title is required!");
    } else if (desc === "") {
      toast.error("description is required!");
    } else if (category === "") {
      toast.error("category is required!");
    } else {
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("category", category);
      formData.append("githubLink", githubLink);
      formData.append("globalLink", globalLink);

      slectedStack.forEach((stackItem) => {
        formData.append("stack[]", stackItem.stackName);
      });

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images", selectedFiles[i]);
      }
      createProject();
    }
  };

  const responseData = localStorage.getItem("responseData");
  const { token } = JSON.parse(responseData);

  const createProject = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/add-project",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
          "Content-Type": "multipart/form-data",
        }
      );
      toast.success(res.statusText);
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      setError("Error creating project: " + error.message);
      console.error("Error creating project:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("responseData");
    navigate("/");
  };

  return (
    <form className="project__form" onSubmit={handleSubmit}>
      <div className="project__container">
        <h1 className="primary__title">Create New Project</h1>
        <div className="project__inputs">
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
          />
          <div className="project__info__top">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="your project title"
            />
            <textarea
              type="text"
              name="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="your project description"
            />
          </div>
          <div className="project__info__mid">
            <div>
              <label htmlFor="categories"></label>
              <select
                id="categories"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={""} disabled>
                  Select Category
                </option>
                <option value="web">Web</option>
                <option value="ui/ux">UI/UX</option>
                <option value="apps">App</option>
              </select>
            </div>
            <input
              type="text"
              name="githubLink"
              value={githubLink}
              placeholder="project github link"
              onChange={(e) => setGithubLink(e.target.value)}
            />
            <input
              type="text"
              name="globalLink"
              value={globalLink}
              placeholder="project global link"
              onChange={(e) => setGlobalLink(e.target.value)}
            />
          </div>
          <div className="project__info__bottom">
            <div className="check__input">
              <label htmlFor="reactjs">React.js</label>
              <input
                id="reactjs"
                type="checkbox"
                value={"react.js"}
                name="reactjs"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="nextjs">Next.js</label>
              <input
                id="nextjs"
                type="checkbox"
                value={"next.js"}
                name="nextjs"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="javascript">Javascript</label>
              <input
                id="javascript"
                type="checkbox"
                value={"javascript"}
                name="javascript"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="typescript">Typescript</label>
              <input
                id="typescript"
                type="checkbox"
                value={"typescript"}
                name="typescript"
              />
            </div>
            <div className="check__input">
              <label htmlFor="mongodb">Mongodb</label>
              <input
                id="mongodb"
                type="checkbox"
                value={"mongoDB"}
                name="mongodb"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="nodejs">Node.js</label>
              <input
                id="nodejs"
                type="checkbox"
                value={"node.js"}
                name="nodejs"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="express">Express.js</label>
              <input
                id="express"
                type="checkbox"
                value={"express"}
                name="express"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="html">HTML</label>
              <input
                id="html"
                type="checkbox"
                value={"HTML"}
                name="html"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="css">CSS</label>
              <input
                id="css"
                type="checkbox"
                value={"CSS"}
                name="css"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="bootstrap">Bootstrap</label>
              <input
                id="bootstrap"
                type="checkbox"
                value={"bootstrap"}
                name="bootstrap"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="tailwindcss">TailwindCss</label>
              <input
                id="tailwindcss"
                type="checkbox"
                value={"tailwindCss"}
                name="tailwindcss"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="shadcn">Shadcn/UI</label>
              <input
                id="shadcn"
                type="checkbox"
                value={"shadcn"}
                name="shadcn"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="figma">Figma</label>
              <input
                id="figma"
                type="checkbox"
                value={"figma"}
                name="figma"
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="check__input">
              <label htmlFor="react-native">React Native</label>
              <input
                id="react-native"
                type="checkbox"
                value={"reactNative"}
                name="react-native"
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn project__btn color__primary"
          onClick={() => setError("")}
        >
          {Error ? (
            "Somethig went wrong!"
          ) : loading ? (
            <Spinner />
          ) : (
            "Create Project"
          )}
        </button>
      </div>

      <ToastContainer position="top-center" />
      <div onClick={handleLogout} className="btn color__primary logout__btn">
        Logout
      </div>
    </form>
  );
}

export default AdminDashPage;
