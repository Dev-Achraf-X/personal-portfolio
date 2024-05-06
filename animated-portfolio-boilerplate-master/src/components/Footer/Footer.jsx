import "./Footer.css";
import { menu, socialHandles } from "../../data.js";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className="nav__link__container">
          {menu.map((item, idx) => (
            <Link
              activeClass="active"
              className="nav__link name"
              to={item.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={idx}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <div className="social__handles__container">
          {socialHandles.map((item, idx) => (
            <a
              href={item.link}
              target="__blank"
              key={idx}
              className="icon__container social__handles"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="copyright__container">
          <h3>Copyright &copy; All right reserved - | 2023</h3>
          <p className="text__muted">Build white love by Achraf Elk</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
