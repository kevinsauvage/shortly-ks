import React, { useContext, useEffect, useRef } from "react";
import Logo from "./assets/images/logo.svg";
import Button from "./Button";
import "./Header.css";
import { AppContext } from "./AppContext";

const Header = () => {
  const props = useContext(AppContext);
  const headerRight = useRef(null);
  const headerLeft = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      props.setMenuIsOpen(false);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");
    if (props.menuIsOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "scroll";
    }
  }, [props.menuIsOpen]);

  const handleClickOutsideNav = (e) => {
    if (
      !headerLeft.current.contains(e.target) &&
      !headerRight.current.contains(e.target)
    ) {
      props.setMenuIsOpen(false);
    }
  };
  return (
    <div
      onClick={handleClickOutsideNav}
      className={
        props.menuIsOpen
          ? "header__container menu-is-open flex-jc-sb-ai-center"
          : "header__container flex-jc-sb-ai-center"
      }>
      <div ref={headerLeft} className="header__left">
        <img src={Logo} alt="logo" className="header__left__logo" />
        <nav className="header__left__nav flex-ai-c">
          <li>Features</li>
          <li>Pricing</li>
          <li>Ressources</li>
        </nav>
      </div>
      <div ref={headerRight} className="header__right">
        <ul className="header__right__btn__container flex-ai-c">
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
