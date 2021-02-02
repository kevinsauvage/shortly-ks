import React, { useContext, useEffect } from "react";
import Logo from "./assets/images/logo.svg";
import Button from "./Button";
import "./Header.css";
import { AppContext } from "./AppContext";

const Header = () => {
  const props = useContext(AppContext);

  useEffect(() => {
    window.onscroll = () => {
      props.setMenuIsOpen(false);
    };
  }, []);

  return (
    <div
      className={
        props.menuIsOpen
          ? "header__container menu-is-open"
          : "header__container"
      }>
      <div className="header__left">
        <img src={Logo} alt="logo" className="header__left__logo" />
        <nav className="header__left__nav">
          <li>Features</li>
          <li>Pricing</li>
          <li>Ressources</li>
        </nav>
      </div>
      <div className="header__right">
        <ul className="header__right__btn__container">
          <li>Login</li>
          <li className="header__right__btn__signUp">
            <Button
              text="Sign Up"
              width="105px"
              height="40px"
              radius="25px"
              fontSize="15px"
              lineHeight="22px"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
