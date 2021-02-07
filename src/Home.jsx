import React, { useContext, useRef, useState } from "react";
import Button from "./Button";
import "./Home.css";
import Card from "./Card";
import Icon1 from "./assets/images/icon-brand-recognition.svg";
import Icon2 from "./assets/images/icon-detailed-records.svg";
import Icon3 from "./assets/images/icon-fully-customizable.svg";
import { AppContext } from "./AppContext";
import SearchResultCard from "./SearchResultCard";
import Loader from "react-loader-spinner";
import Logo from "./assets/images/logo.svg";
import { BiMenuAltRight } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

const Home = () => {
  const props = useContext(AppContext);
  const [alert, setAlert] = useState(false);
  const input = useRef();

  const handleMenuToggle = () => {
    props.setMenuIsOpen(!props.menuIsOpen);
  };

  const handleCopy = (e) => {
    navigator.clipboard.writeText(
      e.currentTarget.parentElement.parentElement.dataset.copy
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.input.match(/(\S+\.[^/\s]+(\/\S+|\/|))/g)) {
      input.current.style.border = "none";
      setAlert(false);
      props.setIsLoading(true);
      props.setQuery(props.input);
      props.getShortenUrl();
      props.setInput("");
      return;
    }
    setAlert(true);
    input.current.style.border = "3px solid #F46363";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>
      <section className="First__section">
        <img src={Logo} alt="logo" className="header__left__logo__mobile" />
        <div className="menu__hamb__icon" onClick={handleMenuToggle}>
          {props.menuIsOpen ? (
            <CgClose size={30} />
          ) : (
            <BiMenuAltRight size={30} />
          )}
        </div>
        <div className="first__section__container container">
          <div className="First__section__text__container">
            <h1>More than just shorter links</h1>
            <h2>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </h2>
            <Button
              text="Get Started"
              width="197px"
              height="56px"
              radius="25px"
              fontSize="20px"
              lineHeight="30px"
            />
          </div>
          <div className="heroImg"></div>
        </div>
      </section>
      <section className="second__section flex-ai-c">
        <div>
          <div className="second__section__search__input__container flex-ai-c">
            <div>
              <input
                ref={input}
                type="text"
                placeholder="Shorten a link here..."
                value={props.input}
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  props.setInput(e.target.value);
                }}
              />
              {alert && <div id="alert__url">Please add a valid URL</div>}
            </div>
            <div style={{ zIndex: "50" }} onClick={handleSubmit}>
              <Button
                text="Shorten it"
                width="100%"
                height="100%"
                radius="10px"
                fontSize="20px"
                lineHeight="30px"
              />
            </div>
          </div>
          <div className="second__section__results__container">
            {props.isLoading && (
              <div className="container loader__container">
                <Loader
                  type="ThreeDots"
                  color="#00BFFF"
                  height={80}
                  width={80}
                />
              </div>
            )}
            {props.results.map((result) => {
              return (
                <SearchResultCard
                  key={result.result}
                  result={result}
                  handleCopy={handleCopy}
                />
              );
            })}
          </div>
        </div>
        <div className="container second__section__container">
          <div className="second__section__text flex-jc-c-ai-c">
            <h3>Advanced Statistics</h3>
            <p>
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="second__section_cards__container flex-jc-sb">
            <Card
              cl="card1"
              icon={Icon1}
              title="Brand Recognition"
              description="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <Card
              cl="card2"
              icon={Icon2}
              title="Detailed Records"
              description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <Card
              cl="card3"
              icon={Icon3}
              title="Fully Customizable"
              description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </section>
      <section className="third__section flex-jc-c-ai-c">
        <h2>Boost your links today</h2>
        <Button
          radius="28px"
          height="56px"
          width="197px"
          text="Get Started"
          fontSize="20px"
          lineHeight="30px"
        />
      </section>
    </>
  );
};

export default Home;
