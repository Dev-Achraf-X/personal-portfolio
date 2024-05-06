import { BsPatchCheckFill } from "react-icons/bs";
import "./SkillCard.css";


function SkillCard({ data, title }) {
  return (
    <div className="skill__card">
      <h3>{title}</h3>
      <div className="skill__content">
        {data.map((item, idx) => (
          <article className="skill__details" key={idx}>
            <BsPatchCheckFill className="skill__icon" />
            <div>
              <h4 className="skill__name">{item.skill}</h4>
              <small className="text__muted skill__level">{item.level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;
