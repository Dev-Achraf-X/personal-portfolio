import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Testimonial from "../../components/Testimonial/Testimonial";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
