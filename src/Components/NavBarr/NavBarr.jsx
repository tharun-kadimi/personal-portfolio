import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import logo from '../Assets/img/logo.svg'
import nav_icon1 from "../Assets/img/nav-icon1.svg";
import nav_icon2 from "../Assets/img/nav-icon2.svg";
import nav_icon3 from "../Assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBarr = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" style={{ color: "#fff", fontSize: "30px" }}>
            Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                projects
              </Nav.Link>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="ww">
                    <img src={nav_icon1} alt="" />
                  </a>
                  <a href="www">
                    <img src={nav_icon2} alt="" />
                  </a>
                  <a href="wwww">
                    <img src={nav_icon3} alt="" />
                  </a>
                </div>
                <HashLink>
                  <button
                    className="vvd"
                    onClick={() => console.log("connect")}
                  >
                    <span>Let's Connect</span>
                  </button>
                </HashLink>
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBarr;
