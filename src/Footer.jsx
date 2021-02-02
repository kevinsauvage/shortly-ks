import React from "react";
import "./Footer.css";
import FooterColumn from "./FooterColumn";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";

const Footer = () => {
  const links = {
    first: ["Link Shortening", "Branded Links", "Analytics"],
    second: ["Blog", "Developers", "Support"],
    third: ["About", "Our Team", "Careers", "Contact"],
  };

  return (
    <footer>
      <div className="footer__wrapper">
        <div className="footer__logo">
          <h2>Shortly</h2>
        </div>
        <FooterColumn title="Features" links={links.first} />
        <FooterColumn title="Resources" links={links.second} />
        <FooterColumn title="Company" links={links.third} />
        <div className="footer__icons_container">
          <img src={FacebookIcon} alt="facebook icon" />
          <img src={TwitterIcon} alt="twitter icon" />
          <img src={PinterestIcon} alt="pinterest icon" />
          <img src={InstagramIcon} alt="instagram icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
