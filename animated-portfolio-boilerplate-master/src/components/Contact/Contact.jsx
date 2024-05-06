import { MdOutlineEmail } from "react-icons/md";
import "./Contact.css";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>achraf57@gmail.com</h5>
              <a
                href="mailto:elkahanachraf57@gmail.com"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <RiMessengerLine className="contact__icon" />
              <h3>Menssenger</h3>
              <h5>Achraf Elk</h5>
              <a
                href="mailto://m.me/profile?id=profile-id"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>

            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>WhatsApp</h3>
              <h5>+212617584913</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+212617584913"
                target="_blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
              id=""
            ></textarea>
            <button type="submit" className="btn btn_primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
