import React from 'react'
import { Link } from 'react-router'
const Profiles = () => {
  return (
<>
<div>
        <div className="theme-layout">
          <div className="responsive-header">
            <div className="res-logo">
              <img src="images/logo.png" alt />
            </div>
            <div className="user-avatar mobile">
              <a href="profile.html" title="View Profile">
                <img alt src="images/resources/user.jpg" />
              </a>
              <div className="name">
                <h4>Saim Turan</h4>
                <span>Antalaya, Turky</span>
              </div>
            </div>
            <div className="right-compact">
              <div className="menu-area">
                <div id="nav-icon3">
                  <i>
                    <svg
                      className="feather feather-grid"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={18}
                      width={18}
                      xmlns="http://www.w3.org/2000/svg">
                      <rect height={7} width={7} y={3} x={3} />
                      <rect height={7} width={7} y={3} x={14} />
                      <rect height={7} width={7} y={14} x={14} />
                      <rect height={7} width={7} y={14} x={3} />
                    </svg>
                  </i>
                </div>
                <ul className="drop-menu">
                  <li>
                    <a title="profile.html" href="profile.html">
                      <i className="icofont-user-alt-1" />
                      Your Profile
                    </a>
                  </li>
                  <li>
                    <a title href="#">
                      <i className="icofont-question-circle" />
                      Help
                    </a>
                  </li>
                  <li>
                    <a title href="#">
                      <i className="icofont-gear" />
                      Setting
                    </a>
                  </li>
                  <li>
                    <a className="dark-mod" title href="#">
                      <i className="icofont-moon" />
                      Dark Mode
                    </a>
                  </li>
                  <li>
                    <a title href="login-register.html" className="logout">
                      <i className="icofont-logout" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="res-search">
                <span>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-search">
                      <circle cx={11} cy={11} r={8} />
                      <line x1={21} y1={21} x2="16.65" y2="16.65" />
                    </svg>
                  </i>
                </span>
              </div>
            </div>
            <div className="restop-search">
              <span className="hide-search">
                <i className="icofont-close-circled" />
              </span>
              <form method="post">
                <input type="text" placeholder="Search..." />
              </form>
            </div>
          </div>
          {/* responsive header */}
          <header className>
            <div className="topbar stick">
              <div className="logo">
                <img alt src="images/logo.png" />
                <span>Yara Live</span>
              </div>
              <div className="searches">
                <form method="post">
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="icofont-search" />
                  </button>
                </form>
              </div>
              <ul className="web-elements">
                <li>
                  <div className="user-dp">
                    <a href="profile-page2.html" title>
                      <img src="images/resources/user.jpg" alt />
                      <div className="name">
                        <h4>Danial Cardos</h4>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
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
                </li>
                <li>
                  <a
                    className="mesg-notif"
                    href="#"
                    title="Messages"
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
                        className="feather feather-message-square">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </i>
                  </a>
                  <span />
                </li>
                <li>
                  <a
                    className="mesg-notif"
                    href="#"
                    title="Notifications"
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
                        className="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </i>
                  </a>
                  <span />
                </li>
                <li>
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
                </li>
                <li>
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
                      <a href="profile.html" title>
                        <i className="icofont-user-alt-3" /> Your Profile
                      </a>
                    </li>
                    <li>
                      <a href="add-new-course.html" title>
                        <i className="icofont-plus" /> New Course
                      </a>
                    </li>
                    <li>
                      <a className="invite-new" href="#" title>
                        <i className="icofont-brand-slideshare" /> Invite
                        Collegue
                      </a>
                    </li>
                    <li>
                      <a href="pay-out.html" title>
                        <i className="icofont-price" /> Payout
                      </a>
                    </li>
                    <li>
                      <a href="price-plan.html" title>
                        <i className="icofont-flash" /> Upgrade
                      </a>
                    </li>
                    <li>
                      <a href="help-faq.html" title>
                        <i className="icofont-question-circle" /> Help
                      </a>
                    </li>
                    <li>
                      <a href="settings.html" title>
                        <i className="icofont-gear" /> Setting
                      </a>
                    </li>
                    <li>
                      <a href="privacy-n-policy.html" title>
                        <i className="icofont-notepad" /> Privacy
                      </a>
                    </li>
                    <li>
                      <a className="dark-mod" title href="#">
                        <i className="icofont-moon" /> Dark Mode
                      </a>
                    </li>
                    <li className="logout">
                      <a href="sign-in.html" title>
                        <i className="icofont-power" /> Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
          {/* header */}
          <div className="top-sub-bar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="menu-btn">
                    <i className>
                      <svg
                        id="menu-btn"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-menu">
                        <line x1={3} y1={12} x2={21} y2={12} />
                        <line x1={3} y1={6} x2={21} y2={6} />
                        <line x1={3} y1={18} x2={21} y2={18} />
                      </svg>
                    </i>
                  </div>
                  <div className="page-title">
                    <h4>User Profile</h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <ul className="breadcrumb">
                    <li>
                      <a href="#" title>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#" title>
                        Profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* top sub bar */}
          <nav className="sidebar">
            <ul className="menu-slide">
              <li className>
                <Link to={"/"}>
                <a className href="/" title>
                  <i>
                    <svg
                      id="icon-home"
                      className="feather feather-home"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </i>{" "}
                  Dashboard
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"#"}>
                <a className href="#" title>
                  <i className>
                    <svg
                      id="ab7"
                      className="feather feather-zap"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  </i>
                  Analytics
                </a>
                </Link>
              </li>
              <li className="active">
                <Link to={"/profiles"}>
                <a className href="profiles" title>
                  <i>
                    <svg
                      id="ab1"
                      className="feather feather-users"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle r={4} cy={7} cx={9} />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </i>
                  Profile
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/reviews"}>
                <a className href="reviews" title>
                  <i className>
                    <svg
                      id="ab3"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-star">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </i>
                  Reviews
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/events"}>
                <a className href="events" title>
                  <i className>
                    <svg
                      id="ab4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-airplay">
                      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                      <polygon points="12 15 17 21 7 21 12 15" />
                    </svg>
                  </i>
                  Events
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/products"}>
                <a className href="products" title>
                  <i className>
                    <svg
                      id="ab5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-bag">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1={3} y1={6} x2={21} y2={6} />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </i>
                  Products
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/blog"}>
                <a className href="blog" title>
                  <i className>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-coffee">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1={6} y1={1} x2={6} y2={4} />
                      <line x1={10} y1={1} x2={10} y2={4} />
                      <line x1={14} y1={1} x2={14} y2={4} />
                    </svg>
                  </i>
                  Blogs
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/messageinbox"}>
                <a className href="messageinbox" title>
                  <i className>
                    <svg
                      id="ab2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
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
                  Messages
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/team"}>
                <a className href="team" title>
                  <i className>
                    <svg
                      id="team"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-smile">
                      <circle cx={12} cy={12} r={10} />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} y1={9} x2="9.01" y2={9} />
                      <line x1={15} y1={9} x2="15.01" y2={9} />
                    </svg>
                  </i>
                  Team
                </a>
                </Link>
              </li>
              <li className>
                <Link to={"/login"}>
                <a className href="login" title>
                  <i className>
                    <svg
                      id="ab9"
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-lock">
                      <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </i>
                  Login/Register
                </a>
                </Link>
              </li>
              <li className="menu-item-has-children">
                <a className href="#" title>
                  <i>
                    <svg
                      id="ab8"
                      className="feather feather-file"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth={2}
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <polyline points="13 2 13 9 20 9" />
                    </svg>
                  </i>
                  Pages
                </a>
                <ul className="submenu">
                  <li>
                    <a href="404.html" title>
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a href="forgot-password.html" title>
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a href="loaders.html" title>
                      Loaders/spiners
                    </a>
                  </li>
                  <li>
                    <a href="invoice-edit.html" title>
                      Invoice
                    </a>
                  </li>
                  <li>
                    <a href="maps.html" title>
                      Google Maps
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://wpkixx.com/html/Yara Live/development-elements.html"
                      title>
                      Elements
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://wpkixx.com/html/Yara Live/development-component.html"
                      title>
                      Components
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* sidebar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="panel-content">
                  <h4 className="main-title">
                    User Profile <i className="icofont-pen-alt-1" />
                  </h4>
                  <div className="row merged20 mb-4">
                    <div className="col-lg-4">
                      <div className="d-widget text-center">
                        <div className="user-avatar-edit">
                          <figure>
                            <img src="images/resources/user-mockupbg.jpg" alt />
                          </figure>
                          <div className="fileupload">
                            <span className="btn-text">edit</span>
                            <input type="file" className="upload" />
                          </div>
                        </div>
                        <div className="user-dp-edit">
                          <figure>
                            <img src="images/resources/admin.jpg" alt />
                            <div className="fileupload">
                              <span className="btn-text">
                                <i className="icofont-camera" />
                              </span>
                              <input type="file" className="upload" />
                            </div>
                          </figure>
                          <div className="users-name">
                            <h5>Madalyn Rascon</h5>
                            <span>Developer Geek</span>
                          </div>
                        </div>
                        <ul className="folowerss">
                          <li>
                            <span>Posts</span> <i>345</i>
                          </li>
                          <li>
                            <span>Followers</span> <i>256</i>
                          </li>
                          <li>
                            <span>Follow</span> <i>123</i>
                          </li>
                        </ul>
                        <a className="button primary circle" href="#" title>
                          <i className="icofont-pen-alt-1" /> Edit
                        </a>
                        <a
                          className="button primary circle	danger"
                          href="#"
                          title>
                          <i className="icofont-ban" /> Block
                        </a>
                      </div>
                      <div className="d-widget mt-4">
                        <div className="d-widget-title">
                          <h5>Social Links</h5>
                        </div>
                        <div className="social-links">
                          <i className="icofont-facebook" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-instagram" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-twitter" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                        <div className="social-links">
                          <i className="icofont-pinterest" />
                          <input type="text" placeholder="Facebook Profile" />
                          <em>Add your Facebook username (e.g. johndoe).</em>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <nav className="responsive-tab style1">
                        <ul
                          data-submenu-title="compounents"
                          uk-switcher="connect: #picturez ;animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
                          className="uk-grid"
                          uk-sticky="offset:50;media : @m">
                          <li>
                            <a href="#">Timeline</a>
                          </li>
                          <li>
                            <a href="#">Photos</a>
                          </li>
                          <li>
                            <a href="#">Videos</a>
                          </li>
                          <li>
                            <a href="#">followers</a>
                          </li>
                          <li>
                            <a href="#">Products</a>
                          </li>
                          <li>
                            <a href="#">Earnings</a>
                          </li>
                          <li>
                            <a href="#">Settings</a>
                          </li>
                        </ul>
                      </nav>
                      <ul className="uk-switcher" id="picturez">
                        <li>
                          <div className="streamline">
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic5.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Clay Masse
                                    </span>
                                    <span>
                                      invited to join the meeting in the
                                      conference room at 9.45 am
                                    </span>
                                  </p>
                                  <span className>3 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic4.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Evie Ono
                                    </span>
                                    <span>
                                      added three new photos in the library
                                    </span>
                                  </p>
                                  <div className="activity-thumbnail">
                                    <img
                                      alt="posted-image"
                                      src="images/resources/speak-11.jpg"
                                    />
                                    <img
                                      alt="posted-image"
                                      src="images/resources/speak-12.jpg"
                                    />
                                  </div>
                                  <span className>8 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic2.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      madalyn rascon
                                    </span>
                                    <span>assigned a new task</span>
                                  </p>
                                  <span className>28 Min</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic3.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      Ezequiel Merideth
                                    </span>
                                    <span>completed project wireframes</span>
                                  </p>
                                  <span className>yesterday</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="dash-item">
                              <a href="#">
                                <div className="sl-avatar ">
                                  <img
                                    alt="avatar"
                                    src="images/resources/small-pic1.png"
                                    className="img-responsive img-circle"
                                  />
                                </div>
                                <div className="sl-content">
                                  <p className="inline-block">
                                    <span className="txt-success">
                                      jonnie metoyer
                                    </span>
                                    <span>
                                      created a group 'Hencework' in the
                                      discussion forum
                                    </span>
                                  </p>
                                  <span className>18 feb</span>
                                </div>
                              </a>
                              <div className="edition-btn">
                                <span className="iconbox button soft-primary">
                                  <i className="icofont-pen-alt-1" />
                                </span>
                                <span className="iconbox button soft-danger">
                                  <i className="icofont-trash" />
                                </span>
                              </div>
                            </div>
                            <div className="sp sp-bars" />
                          </div>
                        </li>
                        <li>
                          <div className="posted-photos">
                            <div
                              className="row merged-10"
                              uk-lightbox="animation: scale">
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album1.jpg"
                                    data-caption="Caption 1">
                                    <img
                                      src="images/resources/album1.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album2.jpg"
                                    data-caption="Caption 2">
                                    <img
                                      src="images/resources/album2.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album3.jpg"
                                    data-caption="Caption 3">
                                    <img
                                      src="images/resources/album3.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album4.jpg"
                                    data-caption="Caption 4">
                                    <img
                                      src="images/resources/album4.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album5.jpg"
                                    data-caption="Caption 5">
                                    <img
                                      src="images/resources/album5.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album6.jpg"
                                    data-caption="Caption 6">
                                    <img
                                      src="images/resources/album6.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album7.jpg"
                                    data-caption="Caption 7">
                                    <img
                                      src="images/resources/album7.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album8.jpg"
                                    data-caption="Caption 8">
                                    <img
                                      src="images/resources/album8.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album9.jpg"
                                    data-caption="Caption 8">
                                    <img
                                      src="images/resources/album9.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album5.jpg"
                                    data-caption="Caption 5">
                                    <img
                                      src="images/resources/album5.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album2.jpg"
                                    data-caption="Caption 2">
                                    <img
                                      src="images/resources/album2.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                <figure>
                                  <a
                                    className="uk-inline"
                                    href="images/resources/album4.jpg"
                                    data-caption="Caption 4">
                                    <img
                                      src="images/resources/album4.jpg"
                                      alt
                                    />
                                  </a>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="posted-photos">
                            <div
                              className="row merged-10"
                              uk-lightbox="animation: scale">
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-6.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Vu.Js Free Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-1.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Css3 2020 Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-3.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Advance Angular Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-4.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Css3 2020 Tutorial</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-5.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>Advance Wordress 2021</span>
                                  </figure>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="recent-media">
                                  <figure uk-lightbox>
                                    <img
                                      alt
                                      src="images/resources/course-6.jpg"
                                    />
                                    <a
                                      data-caption="YouTube"
                                      href="https://www.youtube.com/watch?v=YE7VzlLtp-4"
                                      className="play-btn">
                                      <i className="icofont-play" />
                                    </a>
                                    <span>VU Js Best Video Course</span>
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="row col-xs-6 merged-10">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-1.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-2.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-3.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>Wb University, USA</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-4.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Rjapal
                                  </a>
                                </span>
                                <ins>Km University, India</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-5.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy watson
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-6.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Bob Frank
                                  </a>
                                </span>
                                <ins>WB University, Canada</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-7.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Amy Watson
                                  </a>
                                </span>
                                <ins>Bz University, Pakistan</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-8.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Muhammad Khan
                                  </a>
                                </span>
                                <ins>Oxford University, UK</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                              <div className="friendz">
                                <figure>
                                  <img src="images/resources/speak-9.jpg" alt />
                                </figure>
                                <span>
                                  <a href="#" title>
                                    Sadia Gill
                                  </a>
                                </span>
                                <ins>WB University, USA</ins>
                                <a href="#" title data-ripple>
                                  <i className="icofont-star" /> Follow
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="sp sp-bars" />
                            </div>
                          </div>
                        </li>
                        <li>
                          <table className="table table-default uk-table-striped">
                            <thead>
                              <tr>
                                <th>Invoce#</th>
                                <th>Date</th>
                                <th>Item Name</th>
                                <th>Item Sales</th>
                                <th>Earning</th>
                                <th>Options</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>001</td>
                                <td>01 jan, 2020</td>
                                <td>
                                  <b>PHP Online Course</b>
                                </td>
                                <td>03</td>
                                <td>$199</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>002</td>
                                <td>02 Feb,2020</td>
                                <td>
                                  <b>Holly Bilble</b>
                                </td>
                                <td>02</td>
                                <td>$299</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>003</td>
                                <td>04 Feb,2020</td>
                                <td>
                                  <b>Advance Laravel Videos</b>
                                </td>
                                <td>06</td>
                                <td>$449</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>004</td>
                                <td>12 March,2020</td>
                                <td>
                                  <b>New Vu.js Bascis</b>
                                </td>
                                <td>20</td>
                                <td>$849</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>005</td>
                                <td>04 April,2020</td>
                                <td>
                                  <b>Advance HTML5 Scripts</b>
                                </td>
                                <td>06</td>
                                <td>$449</td>
                                <td>
                                  <span className="iconbox button soft-primary">
                                    <i className="icofont-pen-alt-1" />
                                  </span>
                                  <span className="iconbox button soft-danger">
                                    <i className="icofont-trash" />
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li>
                          <div className="total-sales">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="earning-box">
                                  <span>
                                    Sales earnings this month (October), after
                                    associated author fees, &amp; before taxes:
                                  </span>
                                  <h5>$330.29</h5>
                                  <h6>Net Sales</h6>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="earning-box">
                                  <span>
                                    Total value of your sales, with associated
                                    author fees, before taxes:
                                  </span>
                                  <h5>$660.60</h5>
                                  <h6>Gross Sales</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-widget mt-4">
                            <div className="d-widget-title">
                              <h5>Your Sales By Countries</h5>
                            </div>
                            <table className="table top-countries table-default table-striped">
                              <thead>
                                <tr>
                                  <th>Countries</th>
                                  <th>Item Sales</th>
                                  <th>This Month</th>
                                  <th>Last Month</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/001-united-kingdom.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>England</span>
                                  </td>
                                  <td>$20</td>
                                  <td>$40</td>
                                  <td>$120</td>
                                  <td>$1220</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/002-united-states.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>United States</span>
                                  </td>
                                  <td>$40</td>
                                  <td>$40</td>
                                  <td>$120</td>
                                  <td>$1220</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/003-france.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>France</span>
                                  </td>
                                  <td>$40</td>
                                  <td>$60</td>
                                  <td>$30</td>
                                  <td>$120</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/004-germany.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Germany</span>
                                  </td>
                                  <td>$150</td>
                                  <td>$200</td>
                                  <td>$2770</td>
                                  <td>$8720</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/005-spain.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Spain</span>
                                  </td>
                                  <td>$130</td>
                                  <td>$640</td>
                                  <td>$820</td>
                                  <td>$2210</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/006-china.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>China</span>
                                  </td>
                                  <td>$12</td>
                                  <td>$654</td>
                                  <td>$7798</td>
                                  <td>$9920</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/007-italy.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Italy</span>
                                  </td>
                                  <td>$987</td>
                                  <td>$232</td>
                                  <td>$567</td>
                                  <td>$9862</td>
                                </tr>
                                <tr>
                                  <td>
                                    <figure>
                                      <img
                                        src="images/flags/008-japan.png"
                                        alt
                                      />
                                    </figure>{" "}
                                    <span>Japan</span>
                                  </td>
                                  <td>$486</td>
                                  <td>$239</td>
                                  <td>$233</td>
                                  <td>$1520</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </li>
                        <li>
                          <div className="uk-width">
                            <div className="setting-card">
                              <h2>Notification</h2>
                              <p className="mb-4">
                                Notifications - Choose when and how to be
                                notified.
                              </p>
                              <h6>Choose when and how to be notified</h6>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch1"
                                />
                                <label className="switch" htmlFor="switch1" />
                                <i className="icofont-substitute" />{" "}
                                <span>Subscriptions</span>
                                <p>
                                  Notify me about activity from the profiles I'm
                                  subscribed to
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch2"
                                />
                                <label className="switch" htmlFor="switch2" />
                                <i className="icofont-at" />{" "}
                                <span>Recommended Researches </span>
                                <p>
                                  Notify me of courses I might like based on
                                  what I watch
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch3"
                                />
                                <label className="switch" htmlFor="switch3" />
                                <i className="icofont-comment" />{" "}
                                <span> Active Comments</span>
                                <p>
                                  Notify me about activity on my comments on
                                  others’ courses
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch4"
                                />
                                <label className="switch" htmlFor="switch4" />
                                <i className="icofont-reply" />{" "}
                                <span>Reply to My comments </span>
                                <p>Notify me about replies to my comments</p>
                              </div>
                              <h6>Email Notifications</h6>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch5"
                                />
                                <label className="switch" htmlFor="switch5" />
                                <i className="icofont-email" />{" "}
                                <span>
                                  Send me Emails about akedimc activity and
                                  updates
                                </span>
                                <p>
                                  If this setting is turned off, Yara Live may
                                  still send you messages regarding your
                                  account, required service announcements, legal
                                  notifications, and privacy matters
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch6"
                                />
                                <label className="switch" htmlFor="switch6" />
                                <i className="icofont-foot-print" />{" "}
                                <span>
                                  Promotional and helpful Recommendations
                                </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch7"
                                />
                                <label className="switch" htmlFor="switch7" />
                                <i className="icofont-search-stock" />{" "}
                                <span>Show your profile on search engine.</span>
                                <p>
                                  If this setting is turned off, Yara Live may
                                  still send you messages regarding your
                                  account, required service announcements, legal
                                  notifications, and privacy matters
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch8"
                                />
                                <label className="switch" htmlFor="switch8" />
                                <i className="icofont-users-social" />{" "}
                                <span>
                                  Show Your followers on your timeline.
                                </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                              <div className="seting-mode">
                                <input
                                  type="checkbox"
                                  hidden="hidden"
                                  id="switch9"
                                />
                                <label className="switch" htmlFor="switch9" />
                                <i className="icofont-read-book-alt" />{" "}
                                <span>Show your courses and researches. </span>
                                <p>
                                  Send me any promotional and recommendation
                                  email from akedemic
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <a href="#" title className="button primary circle mt-5">
                        Save Changes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content */}
          <div className="popup-wraper">
            <div className="popup">
              <span className="popup-closed">
                <i className="icofont-close" />
              </span>
              <div className="popup-meta">
                <div className="popup-head">
                  <h5>
                    <i className="icofont-envelope" /> Send Message
                  </h5>
                </div>
                <div className="send-message">
                  <form method="post" className="c-form">
                    <input type="text" placeholder="Enter Name.." />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Write Message" defaultValue={""} />
                    <div className="uploadimage">
                      <i className="icofont-file-jpg" />
                      <label className="fileContainer">
                        <input type="file" />
                        Attach file
                      </label>
                    </div>
                    <button type="submit" className="main-btn">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* send message popup */}
          <div className="side-slide">
            <span className="popup-closed">
              <i className="icofont-close" />
            </span>
            <div className="slide-meta">
              <ul className="nav nav-tabs slide-btns">
                <li className="nav-item">
                  <a className="active" href="#messages" data-toggle="tab">
                    Messages
                  </a>
                </li>
                <li className="nav-item">
                  <a className href="#notifications" data-toggle="tab">
                    Notifications
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div className="tab-pane active fade show" id="messages">
                  <h4>
                    <i className="icofont-envelope" /> messages
                  </h4>
                  <a
                    href="#"
                    className="send-mesg"
                    title="New Message"
                    data-toggle="tooltip">
                    <i className="icofont-edit" />
                  </a>
                  <ul className="new-messages">
                    <li>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Ibrahim Ahmed</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user2.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Fatima J.</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user3.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Fawad Ahmed</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user4.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Saim Turan</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user5.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          Helo dear i wanna talk to you
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>
                    view all
                  </a>
                </div>
                <div className="tab-pane fade" id="notifications">
                  <h4>
                    <i className="icofont-bell-alt" /> notifications
                  </h4>
                  <ul className="notificationz">
                    <li>
                      <figure>
                        <img src="images/resources/user5.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user4.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          share your post <strong>a good time today!</strong>
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user2.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user1.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          share your post <strong>a good time today!</strong>
                        </a>
                      </div>
                    </li>
                    <li>
                      <figure>
                        <img src="images/resources/user3.jpg" alt />
                      </figure>
                      <div className="mesg-info">
                        <span>Alis wells</span>
                        <a href="#" title>
                          recommend your post
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a href="#" title className="main-btn" data-ripple>
                    view all
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* side slide message & popup */}
        </div>
        {/*
         */}
        {/* Mirrored from wpkixx.com/html/Yara Live-panel/profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 11:15:29 GMT */}
      </div>
</>
  )
}

export default Profiles
