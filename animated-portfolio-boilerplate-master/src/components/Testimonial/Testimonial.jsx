import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { profile3, profile4, profile5, profile6 } from "../../images/index";

const data = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review:
      "Working with Achraf on my ecommerce website was fantastic! He demonstrated great attention to detail, creativity, and dedication throughout the project. The final result exceeded my expectations, and I highly recommend Achraf for any web development work.",
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review:
      "Working with Achraf to revamp our company website was a breeze! his expertise and attention to detail truly shone through as he navigated through the project. Not only did they deliver on time, but they also brought fresh ideas to the table, enhancing our online presence. I highly recommend Achraf for any web development needs.",
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review:
      "Collaborating with Achraf on our wedding website was an absolute pleasure! His skillful execution and attention to detail transformed our vision into a stunning reality. Achraf seamlessly incorporated our preferences while adding creative touches that truly elevated the design. We're thrilled with the final result and highly recommend Achraf for any web design project.",
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review:
      "Working with Achraf has been an absolute pleasure. His dedication, professionalism, and attention to detail are truly commendable. Whenever I needed assistance or guidance, Achraf was there to provide insightful advice and support. His expertise in [relevant field] made a significant difference in the success of our project. I highly recommend Achraf for any endeavor requiring top-notch skills and a collaborative spirit.",
  },
];

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="primary__title">Testimonials</h2>
          <p className="text__muted description">
            Discover what clients are saying about their experiences working
            with me as their trusted web developer. From startups to established
            businesses, my dedication to crafting exceptional online experiences
            shines through in their words.
          </p>
        </div>
        <Swiper
          className="testimonial__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            700: {
              slidesPerView: 2,
            },
          }}
        >
          {data.map(({ name, avatar, review }, idx) => (
            <SwiperSlide className="testimonial" key={idx}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="client__name">{name}</h3>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
