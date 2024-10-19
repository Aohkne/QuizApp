import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faAngleRight,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import Button from "../../Button";

//Page
import Authentic from "../../../page/Authentic";
import Play from "../../../page/Play";
import Profile from "../../../page/Profile";

import HomePage from "../../../page/Home";
import QuizPage from "../../../page/Game";
import PricingPage from "../Pricing/Pricing";
import GuidePage from "../../../page/Guide";

//Img
import logo from "../../../asset/img/logo.png";

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isUser, setIsUsser] = useState(false);
  const wrapper = useRef(null);
  const refIcon = useRef(null);

  const handleLogout = (e) => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsUsser(false);
    setIsOpen(false);
  };

  const handleOpenUser = (e) => {
    setIsOpen(true);
  };

  useEffect(() => {
    //Check User
    const cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].trim();
      if (cookie.indexOf("username=") === 0) {
        setIsUsser(true); //
      } else {
        setIsUsser(false);
      }
    }

    const handleClickOutside = (e) => {
      if (
        wrapper.current &&
        !wrapper.current.contains(e.target) &&
        e.target !== refIcon.current
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, isUser]);

  // Login
  const login = {
    title: "Login",
    input: [
      {
        label: "Name",
        type: "text",
      },
      {
        label: "Password",
        type: "password",
      },
    ],
    message: "Not a member?",
    request: "Register Now",
    link: "/register",
  };

  // Register
  const register = {
    title: "Register",
    input: [
      {
        label: "Name",
        type: "text",
      },
      {
        label: "Password",
        type: "password",
      },
      {
        label: "Confirm Password",
        type: "password",
      },
    ],
    message: "Have account?",
    request: "Login now",
    link: "/login",
  };

  if (location.pathname === "/login") {
    return (
      <Routes>
        <Route path="/login" element={<Authentic data={login} />} />
      </Routes>
    );
  } else if (location.pathname === "/register") {
    return (
      <Routes>
        <Route path="/register" element={<Authentic data={register} />} />
      </Routes>
    );
  } else if (location.pathname === "/play") {
    return (
      <Routes>
        <Route path="/play" element={<Play />} />
      </Routes>
    );
  } else if (location.pathname === "/profile") {
    return (
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    );
  }

  return (
    <>
      <div className="header__wrappper">
        {/* Logo */}
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* Navigation*/}
        <div className="header__navigation">
          <div className="navigation__list">
            <div className="navigation__item">
              <Link to="/" alt="">
                Home
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="/quiz" alt="">
                Quiz
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="/pricing" alt="">
                Pricing
              </Link>
            </div>
            <div className="navigation__item">
              <Link to="/guide" alt="">
                Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="header__social">
          <div className="social__list">
            <div className="social__item">
              <a href="/mail" alt="">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <div className="social__item">
              <a href="https://github.com/Aohkne/QuizApp" alt="">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <div className="social__item">
              <a href="/face" alt="">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
            <div className="social__item">
              <a href="/linkedin" alt="">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="header__action">
          {isUser ? (
            <FontAwesomeIcon
              icon={faCircleUser}
              className="header__icon"
              ref={refIcon}
              onClick={handleOpenUser}
            />
          ) : (
            <Link to="/login">
              <Button medium primary rightIcon={faAngleRight}>
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* User */}
      {isOpen && (
        <div className="user__wrapper" ref={wrapper}>
          <div className="user__img">
            <FontAwesomeIcon icon={faCircleUser} className="user_icon" />
            <span>Admin</span>
          </div>
          <div className="user__list">
            <div className="user__item">
              <Link to="/profile">My Profile</Link>
            </div>
            <div className="user__item">
              <Link to="/pricing">Upgrade</Link>
            </div>
            <div className="user__item">
              <Link to="/guide">Help</Link>
            </div>
          </div>
          <div className="user__logout" onClick={handleLogout}>
            Log out
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/guide" element={<GuidePage />} />
      </Routes>
    </>
  );
}

export default Header;
