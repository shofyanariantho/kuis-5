import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import { StyledMain } from "../components/styles/Main.styled";

const Home = () => {
  return (
    <div>
      <Header />
      <StyledMain>
        <Hero />
      </StyledMain>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
