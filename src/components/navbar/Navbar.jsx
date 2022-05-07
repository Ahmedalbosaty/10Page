import React from "react";
import "./navbar.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [dropDown, toggleDropDown] = useState(false);
  const [signUp, toggleSignUp] = useState(false);
  const [hover, setHover] = useState("white");
  const [hover2, setHover2] = useState("white");
  const [hover3, setHover3] = useState("white");
  const [hover4, setHover4] = useState("white");
  const [tabletMenu, setTabletMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hamStyle, setHamStyle] = useState("10vw");
  const style1 = {
    position: "absolute",
    right: hamStyle,
    marginTop: "-23px",
    backgroundColor: "#f5f5f5",
    padding: "5px 10px",
    borderRadius: "7px",
  };
  const hoverStyle = {
    color: hover,
    cursor: "pointer",
  };
  const hoverStyle2 = {
    color: hover2,
    cursor: "pointer",
  };
  const hoverStyle3 = {
    color: hover3,
    cursor: "pointer",
  };
  const hoverStyle4 = {
    color: hover4,
    cursor: "pointer",
  };

  const isMobile = useMediaQuery({ query: "(max-width:480px)" });
  const isPc = useMediaQuery({ query: "(min-width:992px )" });
  return (
    <>
      {isPc && (
        <div>
          <div className="container">
            <div
              className="nav"
              onMouseEnter={() => {
                toggleDropDown(false);
                toggleSignUp(false);
              }}
              onMouseLeave={() => {
                toggleSignUp(false);
                toggleDropDown(false);
              }}
            >
              <div
                className="logo"
                onMouseEnter={() => {
                  toggleDropDown(false);
                  toggleSignUp(false);
                }}
              >
                <Link to="/">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tetra_Tech_logo.png"
                    alt=""
                    className="logo"
                    onMouseLeave={() => {
                      toggleSignUp(false);
                    }}
                  />
                </Link>
              </div>
              <div
                style={hoverStyle}
                className="about"
                onMouseEnter={() => {
                  setHover("grey");
                  toggleDropDown(false);
                  toggleSignUp(false);
                }}
                onMouseLeave={() => {
                  setHover("white");
                  toggleDropDown(false);
                  toggleSignUp(false);
                }}
              >
                About us
              </div>

              <div className="conte">
                <div
                  style={hoverStyle3}
                  className="services"
                  onMouseLeave={() => {
                    toggleSignUp(false);
                    setHover3("white");
                  }}
                  onMouseEnter={() => {
                    toggleDropDown(true);
                    toggleSignUp(false);
                    setHover3("grey");
                  }}
                >
                  Our Services{" "}
                </div>
                {dropDown && (
                  <div
                    onMouseEnter={() => {
                      toggleSignUp(false);
                    }}
                    onMouseLeave={() => {
                      toggleDropDown(false);
                      toggleSignUp(false);
                    }}
                    className="dropd"
                    style={{ cursor: "pointer" }}
                  >
                    <span className="ai">Ai</span>
                    <span className="ai">Frontend</span>
                    <span className="ai">Backend</span>
                    <span className="ai">crypto</span>
                  </div>
                )}
              </div>
              <div
                style={hoverStyle2}
                onMouseLeave={() => {
                  toggleSignUp(false);
                  toggleDropDown(false);
                  setHover2("white");
                }}
                onMouseEnter={() => {
                  toggleSignUp(false);
                  toggleDropDown(false);
                  setHover2("grey");
                }}
                className="contact"
              >
                Contact Us
              </div>
              <div
                className="signDrop"
                onMouseEnter={() => {
                  toggleDropDown(false);
                }}
              >
                <button
                  style={hoverStyle4}
                  onMouseEnter={() => {
                    toggleSignUp(true);
                    setHover4("grey");
                  }}
                  onMouseLeave={() => {
                    setHover4("white");
                  }}
                  className="btn"
                >
                  Sign in
                </button>
                {signUp && (
                  <span
                    style={{ cursor: "pointer" }}
                    onMouseLeave={() => {
                      toggleSignUp(false);
                    }}
                    className="upBtn"
                  >
                    Sign up
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="container2">
          <div
            className="nav"
            onMouseEnter={() => {
              toggleDropDown(false);
            }}
          >
            <div className="logo2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tetra_Tech_logo.png"
                alt=""
                className="logo2"
              />
            </div>
            <div className="m-view-container">
              <div
                className="hamc"
                style={style1}
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                  hamStyle === "10vw"
                    ? setHamStyle("32vw")
                    : setHamStyle("10vw");
                }}
              >
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
              </div>
              {mobileMenu && (
                <div className="m-dropdown-container">
                  <div className="item">Home</div>
                  <div className="item">About Us</div>
                  <div className="item">Contact Us</div>
                  <div className="m-service-cn">
                    <div className="item">Services</div>
                    <div className="m-s-drop"></div>
                    <div className="m-s-drop"></div>
                    <div className="m-s-drop"></div>
                    <div className="m-s-drop"></div>
                  </div>
                  <div className="m-sign-cn">
                    <div className="item">Sign in</div>
                    <div className="m-sign-up"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <MediaQuery minWidth={482} maxWidth={991}>
        <div className="container2">
          <div className="nav">
            <div className="logo3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tetra_Tech_logo.png"
                alt=""
                className="logo3"
              />
            </div>
            <div className="conte2">
              <div className="services2">Our Services </div>
            </div>
            <div className="hamc2">
              <div className="ham"></div>
              <div className="ham"></div>
              <div className="ham"></div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={992} maxWidth={1400}>
        <div className="container">
          <div
            className="nav"
            onMouseEnter={() => {
              toggleDropDown(false);
              toggleSignUp(false);
            }}
            onMouseLeave={() => {
              toggleSignUp(false);
              toggleDropDown(false);
            }}
          >
            <div
              className="logo"
              onMouseEnter={() => {
                toggleDropDown(false);
                toggleSignUp(false);
              }}
              onMouseLeave={() => {
                toggleSignUp(false);
                toggleDropDown(false);
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/Tetra_Tech_logo.png"
                alt=""
                className="logo"
                onMouseLeave={() => {
                  toggleSignUp(false);
                }}
              />
            </div>
            <div
              className="about"
              style={hoverStyle}
              onMouseEnter={() => {
                toggleDropDown(false);
                toggleSignUp(false);
                setHover("grey");
              }}
              onMouseLeave={() => {
                toggleSignUp(false);
                toggleDropDown(false);
                setHover("white");
              }}
            >
              About us
            </div>

            <div className="conte">
              <div
                style={hoverStyle2}
                className="services"
                onMouseLeave={() => {
                  toggleSignUp(false);
                  setHover2("white");
                }}
                onMouseEnter={() => {
                  toggleDropDown(true);
                  toggleSignUp(false);
                  setHover2("grey");
                }}
              >
                Our Services{" "}
              </div>
              {dropDown && (
                <div
                  onMouseLeave={() => {
                    toggleDropDown(false);
                    toggleSignUp(false);
                  }}
                  className="dropd"
                >
                  <span className="ai">Ai</span>
                  <span className="ai">Frontend</span>
                  <span className="ai">Backend</span>
                  <span className="ai">crypto</span>
                </div>
              )}
            </div>
            <div
              style={hoverStyle3}
              className="contact"
              onMouseEnter={() => {
                toggleDropDown(false);
                toggleSignUp(false);
                setHover3("grey");
              }}
              onMouseLeave={() => {
                toggleSignUp(false);
                toggleDropDown(false);
                setHover3("white");
              }}
            >
              Contact Us
            </div>
            <div
              className="signDrop3"
              onMouseEnter={() => {
                toggleDropDown(false);
              }}
            >
              <button
                style={hoverStyle4}
                onMouseEnter={() => {
                  toggleSignUp(true);
                  toggleDropDown(false);
                  setHover4("grey");
                }}
                onMouseLeave={() => {
                  toggleDropDown(false);
                  setHover4("white");
                }}
                className="btn"
              >
                Sign in
              </button>
              {signUp && (
                <span
                  onMouseLeave={() => {
                    toggleSignUp(false);
                  }}
                  className="upBtn"
                >
                  Sign up
                </span>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Navbar;
