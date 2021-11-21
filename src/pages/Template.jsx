import React from "react";
import Hero from "../pages/Hero";
import Welcome from "../pages/Welcome";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";
import Footer from "../pages/Footer";
import ButtonCreatePdf from "../components/ButtonCreatePdf";

const Template = ({ companyName }) => {
  return (
    <div>
        <ButtonCreatePdf companyName={companyName} />
        <div className="wrapper">
        <Hero
            getCompanyNameHero={companyName}
        />
        <Welcome />
        <Menu />
        <ContactUs />
        <Footer 
            getCompanyNameFooter={companyName}
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJNGOwO2hJpJ9kz8e0UUPjZhEbgDJTTXE"></script>
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/smoothscroll.js"></script>
        <script src="../assets/js/plugins.js"></script>
        <script src="../assets/js/master.js"></script>
        </div>
    </div>
  );
};

export default Template;
