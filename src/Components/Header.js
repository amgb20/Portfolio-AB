import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";
import ScrollToTop from "./ScrollToTop";
import "../index.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);
  const projectMenuRef = useRef(null);
  const { linkdein, github, googlescholar } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  const showProjectMenu = () => {
    setIsProjectMenuOpen(true);
    if (projectMenuRef.current) {
      clearTimeout(projectMenuRef.current);
    }
  };

  const hideProjectMenu = () => {
    projectMenuRef.current = setTimeout(() => {
      setIsProjectMenuOpen(false);
    }, 3000); // 3 seconds delay
  };

  return (
    <>
      <ScrollToTop />
      <header className="container mx-auto md:flex justify-between py-2 max-width">
        <div className="flex justify-between items-center py-2 md:py-10">
          <NavLink to="/">
            <span className="name-logo">Alexandre Benoit</span>
          </NavLink>
          <div onClick={toggleClass} className="cursor-pointer">
            <svg
              className="stroke-dark-heading dark:stroke-white md:hidden"
              width="25"
              height="20"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li className="pb-1 md:pb-0">
              <NavLink to="/" onClick={toggleClass}>
                Home
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/about" onClick={toggleClass} activeClassName="active-nav-link">
                About
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/technologies" onClick={toggleClass}>
                Technologies
              </NavLink>
            </li>
            <li className="pb-1 md:pb-0">
              <NavLink to="/accreditations" onClick={toggleClass}>
                Accreditations
              </NavLink>
            </li>
            <li
              className="pb-1 md:pb-0 relative"
              onMouseEnter={showProjectMenu}
              onMouseLeave={hideProjectMenu}
            >
              <NavLink
                to="/projects"
                onClick={toggleClass}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleClass}>
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5">
            <li>
              <a href={linkdein} target="_blank" rel="noreferrer noopener">
                <svg
                  className="dark:fill-light-heading fill-dark-heading"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href={github} target="_blank" rel="noreferrer noopener">
                <svg
                  className="dark:fill-light-heading fill-dark-heading"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href={googlescholar} target="_blank" rel="noreferrer noopener">
              <svg
                className="dark:fill-light-heading fill-dark-heading"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="nonzero"
                  clipRule="nonzero"
                  d="M25,3c-12.15,0 -22,9.85 -22,22c0,12.15 9.85,22 22,22c12.15,0 22,-9.85 22,-22c0,-12.15 -9.85,-22 -22,-22zM21,11h17l-1.01953,0.88086c0,0.04 0.01953,0.07914 0.01953,0.11914v5.2793c0.6,0.34 1,0.9807 1,1.7207v6c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2v-6c0,-0.74 0.4,-1.3807 1,-1.7207v-3.70898l-3.58984,3.08008c0.35,0.7 0.58984,1.54984 0.58984,2.58984c0,2.72 -1.5193,4.06953 -3.0293,5.26953c-0.47,0.48 -1.02148,1.00055 -1.02148,1.81055c0,0.8 0.55117,1.25031 0.95117,1.57031l1.28906,1.0293c1.59,1.36 3.03125,2.61062 3.03125,5.14063c0,3.45 -3.29023,6.93945 -9.49023,6.93945c-5.23,0 -7.75,-2.53 -7.75,-5.25c0,-1.32 0.6493,-3.19047 2.7793,-4.48047c2.23,-1.39 5.26063,-1.57945 6.89063,-1.68945c-0.51,-0.66 -1.08984,-1.35 -1.08984,-2.5c0,-0.61 0.18914,-0.97969 0.36914,-1.42969c-0.4,0.04 -0.80016,0.08008 -1.16016,0.08008c-3.8,0 -5.97023,-2.88047 -5.99023,-5.73047h-6.7793zM24.26953,14.24023c-0.93,0 -1.93953,0.4707 -2.51953,1.2207c-0.61,0.76 -0.80078,1.74922 -0.80078,2.69922c0,2.46 1.42172,6.53906 4.51172,6.53906c0.91,0 1.87898,-0.4393 2.45898,-1.0293c0.82,-0.85 0.90039,-2.01992 0.90039,-2.66992c0,-2.65 -1.55078,-6.75977 -4.55078,-6.75977zM26.03906,30.60938c-0.32,0 -2.2693,0.06984 -3.7793,0.58984c-0.8,0.3 -3.09961,1.17125 -3.09961,3.78125c0,2.61 2.47984,4.48047 6.33984,4.48047c3.47,0 5.30078,-1.7007 5.30078,-3.9707c0,-1.87 -1.17992,-2.85984 -3.91992,-4.83984c-0.29,-0.04 -0.4718,-0.04102 -0.8418,-0.04102z"
                />
              </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>

  );
}

export default Header;
