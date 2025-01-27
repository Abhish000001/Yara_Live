import React, { useEffect, useState } from "react";
import Sideslide from "../Components/page/Sideslide";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

const Header1 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideSlideActive, setIsSideSlideActive] = useState(false);
  const [activeTab, setActiveTab] = useState("messages");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleSideSlide = () => {
    setIsSideSlideActive((prev) => !prev);
  };

  const closeSideSlide = () => {
    setIsSideSlideActive(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("nightview");
    } else {
      document.body.classList.remove("nightview");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  // const [darkMode, setDarkMode] = useState(false);
  // const [isSideSlideActive, setIsSideSlideActive] = useState(false);
  // const [tooltipText, setTooltipText] = useState("");

  // const handleMouseEnter = () => {
  //   setTooltipText("Messages"); // Change this text for dynamic tooltips
  // };

  // const handleMouseLeave = () => {
  //   setTooltipText("");
  // };

  // const toggleSideSlide = () => {
  //   setIsSideSlideActive((prev) => !prev);
  // };

  // const closeSideSlide = () => {
  //   setIsSideSlideActive(false);
  // };

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("nightview");
  //   } else {
  //     document.body.classList.remove("nightview");
  //   }
  // }, [darkMode]);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <>
      <header className>
        <div className="topbar stick">
          <div className="logo">
            <img alt src="images/logo.png" />
            <span>Yara Live</span>
          </div>
          <div className="searches">
            <form>
              <input type="text" placeholder="Search..." />
              <button type="button">
                <i className="icofont-search" />
              </button>
            </form>
          </div>
          <ul className="web-elements">
            <li>
              <div className="user-dp">
                <Link to={"/analytic"}>
                  <img src="images/resources/user.jpg" alt />
                  <div className="name">
                    <h4>Danial Cardos</h4>
                  </div>
                </Link>
              </div>
            </li>
            {/* <li>
              <Link to={"/"}>
                <a href="/" title="Home" data-toggle="tooltip">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-home">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </i>
                </a>
              </Link>
            </li> */}
            {/* <li>
              <a
                className="mesg-notif"
                href="#"
                title="Messages"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("messages");
                  toggleSideSlide();
                }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </i>
              </a>
              <a
                className="mesg-notif"
                href="#"
                title={tooltipText}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSideSlide();
                }}>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-message-square">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </i>
              </a>
              <span />
            </li> */}
            {/* <li>
              <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip" data-original-title="message">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
              </a>
              <span />
            </li> */}
            <li>
              <a
                className="mesg-notif"
                href="#"
                title="Notifications"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveTab("notifications");
                  toggleSideSlide();
                }}
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </i>
              </a>
              {/* <a
                className="mesg-notif"
                href="#"
                title="Notifications"
                data-toggle="tooltip"
                data-original-title="Notifications">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </i>
              </a> */}
              <span />
            </li>
            {/* <li>
              <a
                className="create"
                href="#"
                title="Add New"
                data-toggle="tooltip">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus">
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>
                </i>
              </a>
            </li> */}
            {/* <li>
              <a title href="#">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-grid">
                    <rect x={3} y={3} width={7} height={7} />
                    <rect x={14} y={3} width={7} height={7} />
                    <rect x={14} y={14} width={7} height={7} />
                    <rect x={3} y={14} width={7} height={7} />
                  </svg>
                </i>
              </a>
              <ul className="dropdown">
                <li>
                  <Link to={"/profiles"}>
                    <a href="profiles" title>
                      <i className="icofont-user-alt-3" /> Your Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/addnewcource"}>
                    <a href="addnewcource" title>
                      <i className="icofont-plus" /> New Course
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <a className="invite-new" href="#" title>
                      <i className="icofont-brand-slideshare" /> Invite Collegue
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/payoutcall"}>
                    <a href="payoutcall" title>
                      <i className="icofont-price" /> Payout
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/priceplane"}>
                    <a href="priceplane" title>
                      <i className="icofont-flash" /> Upgrade
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/helpfaq"}>
                    <a href="helpfaq" title>
                      <i className="icofont-question-circle" /> Help
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/settings"}>
                    <a href="settings" title>
                      <i className="icofont-gear" /> Setting
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to={"/privecypolicy"}>
                    <a href="privecypolicy" title>
                      <i className="icofont-notepad" /> Privacy
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    className="dark-mod"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDarkMode();
                    }}
                  >
                    <i className="icofont-moon" /> Dark Mode
                  </a>
                  <a
                    className="dark-mod"
                    title="Toggle Dark Mode"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDarkMode();
                    }}>
                    <i className="icofont-moon" /> Dark Mode
                  </a>
                </li>
                <li>
            <a className="dark-mod" title href="#"><i className="icofont-moon" /> Dark Mode</a>
          </li>
                <li className="logout">
                  <Link to={"/signin"}>
                    <a href="signin" title>
                      <i className="icofont-power" /> Logout
                    </a>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="logout">
              <a href="#" onClick={handleClickOpen} title="Logout">
                <i className="icofont-power" />
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Sideslide
        isActive={isSideSlideActive}
        closeSlide={closeSideSlide}
        activeTab={activeTab}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>Are you sure you want to log out?</DialogContent>
        <DialogActions>
          {/* Cancel Button */}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {/* Logout Button */}
          <Button
            onClick={() => {
              handleLogout();
              handleClose();
            }}
            color="primary"
            autoFocus
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header1;
