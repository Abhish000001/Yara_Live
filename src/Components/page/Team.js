import React from 'react'
import { Link } from 'react-router'

const Team = () => {
  return (
   <>
   <div>
  {/* <div className="page-loader" id="page-loader">
    <div className="lds-ellipsis"><div /><div /><div /><div /></div>
    <span>Loading...</span>
  </div>page loader */}
  <div className="theme-layout">
    <div className="responsive-header">
      <div className="res-logo"><img src="images/logo.png" alt /></div>
      <div className="user-avatar mobile">
        <Link to={"/profiles"}>
        <a href="profiles" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
        </Link>
        <div className="name">
          <h4>Saim Turan</h4>
          <span>Antalaya, Turky</span>
        </div>
      </div>
      <div className="right-compact">
        <div className="menu-area">
          <div id="nav-icon3">
            <i>
              <svg className="feather feather-grid" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg"><rect height={7} width={7} y={3} x={3} /><rect height={7} width={7} y={3} x={14} /><rect height={7} width={7} y={14} x={14} /><rect height={7} width={7} y={14} x={3} /></svg>
            </i>
          </div>
          <ul className="drop-menu">
            <li>
              
              <a title="profile.html" href="profile.html"><i className="icofont-user-alt-1" />Your Profile</a></li>
            <li><a title href="#"><i className="icofont-question-circle" />Help</a></li>
            <li><a title href="#"><i className="icofont-gear" />Setting</a></li>
            <li><a className="dark-mod" title href="#"><i className="icofont-moon" />Dark Mode</a></li>
            <li><a title href="login-register.html" className="logout"><i className="icofont-logout" />Logout</a></li>
          </ul>
        </div>
        <div className="res-search">
          <span><i>
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx={11} cy={11} r={8} /><line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></i></span>
        </div>
      </div>
      <div className="restop-search">
        <span className="hide-search"><i className="icofont-close-circled" /></span>
        <form method="post">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
    </div>{/* responsive header */}
    <header className>
      <div className="topbar stick">
        <div className="logo"><img alt src="images/logo.png" /><span>Yara Live</span></div>
        <div className="searches">
          <form method="post">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="icofont-search" /></button>
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
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i>
            </a>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
            <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
            </a>
            </Link>
            <span />
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></i>
            </a>
            <span />
          </li>
          <li>
            <a className="create" href="#" title="Add New" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></i>
            </a>
          </li>
          <li>
            <a title href="#">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid"><rect x={3} y={3} width={7} height={7} /><rect x={14} y={3} width={7} height={7} /><rect x={14} y={14} width={7} height={7} /><rect x={3} y={14} width={7} height={7} /></svg>
              </i>
            </a>
            <ul className="dropdown">
              <li><a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a></li>
              <li><a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a></li>
              <li><a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite Collegue</a></li>
              <li><a href="pay-out.html" title><i className="icofont-price" /> Payout</a></li>
              <li><a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a></li>
              <li><a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a></li>
              <li><a href="settings.html" title><i className="icofont-gear" /> Setting</a></li>
              <li><a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a></li>
              <li><a className="dark-mod" title href="#"><i className="icofont-moon" /> Dark Mode</a></li>
              <li className="logout"><a href="sign-in.html" title><i className="icofont-power" /> Logout</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>{/* header */}
    <div className="top-sub-bar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="menu-btn">
              <i className>
                <svg id="menu-btn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg></i>
            </div>
            <div className="page-title">
              <h4>Our Team</h4>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="breadcrumb">
              <li><a href="#" title>Home</a></li>
              <li><a href="#" title>Our Team</a></li>
            </ul>
          </div>
        </div>
      </div>	
    </div>{/* top sub bar */}
    <nav className="sidebar">
      <ul className="menu-slide">
        <li className>
          <Link to={"/"}>
          <a className href="" title>
            <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg></i> Dashboard
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"#"}>
          <a className href="#" title>
            <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i>Analytics
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/profiles"}>
          <a className href="profiles" title>
            <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle r={4} cy={7} cx={9} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i>
            Profile
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/reviews"}>
          <a className href="reviews.html" title>
            <i className>
              <svg id="ab3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>Reviews
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/events"}>
          <a className href="events" title><i className>
              <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" /><polygon points="12 15 17 21 7 21 12 15" /></svg></i>Events
          </a>
          </Link> 
        </li>
        <li className>
          <Link to={"/products"}>
          <a className href="products" title>
            <i className>
              <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1={3} y1={6} x2={21} y2={6} /><path d="M16 10a4 4 0 0 1-8 0" /></svg></i>Products
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/blog"}>
          <a className href="blog" title>
            <i className>						
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1={6} y1={1} x2={6} y2={4} /><line x1={10} y1={1} x2={10} y2={4} /><line x1={14} y1={1} x2={14} y2={4} /></svg>
            </i>Blogs
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/messageinbox"}>
          <a className href="messageinbox" title>
            <i className>
              <svg id="ab2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>Messages
          </a>
          </Link>
        </li>
        <li className="active">
          <Link to={"/team"}>
          <a className href="team" title>
            <i className>
              <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx={12} cy={12} r={10} /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1={9} y1={9} x2="9.01" y2={9} /><line x1={15} y1={9} x2="15.01" y2={9} /></svg></i>Team
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/login"}>
          <a className href="login" title>
            <i className>
              <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x={3} y={11} width={18} height={11} rx={2} ry={2} /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></i>Login/Register
          </a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <a className href="#" title>
            <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg></i>Pages
          </a>
          <ul className="submenu">
            <li><a href="404.html" title>Error 404</a></li>
            <li><a href="forgot-password.html" title>Forgot Password</a></li>
            <li><a href="loaders.html" title>Loaders/spiners</a></li>
            <li><a href="invoice-edit.html" title>Invoice</a></li>
            <li><a href="maps.html" title>Google Maps</a></li>
            <li><a href="http://wpkixx.com/html/Yara Live/development-elements.html" title>Elements</a></li>
            <li><a href="http://wpkixx.com/html/Yara Live/development-component.html" title>Components</a></li>
          </ul>
        </li>
      </ul>
    </nav>{/* sidebar */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="main-title">Our Team</h4>
            <div className="row merged-10">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="add-member"> 
                  <i className="icofont-plus" />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team1.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">David son</a></h3>
                      <span>Designer</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team2.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">Sarah K.</a></h3>
                      <span>Support Admin</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team3.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">David son</a></h3>
                      <span>Project Manager</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team4.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">EMily Kate</a></h3>
                      <span>PRO</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team5.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">Olavia Mac</a></h3>
                      <span>Frontend Developer</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team6.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">Bob Frank</a></h3>
                      <span>Backend Developer</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team3.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">David son</a></h3>
                      <span>Project Manager</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team2.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">Sapna Malothra</a></h3>
                      <span>Project Manager</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team4.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">EMily Kate</a></h3>
                      <span>PRO</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team"> <img alt src="images/resources/team1.jpg" />
                  <div className="team-info-sec">
                    <div className="team-info">
                      <h3><a title href="#">David son</a></h3>
                      <span>Designer</span> </div>
                  </div>
                  <div className="more-opt">
                    <span><i className="icofont-dotted-down" /></span>
                    <ul>
                      <li><a href="#" title><i className="icofont-pen-alt-1" /> Edit</a></li>
                      <li><a href="#" title><i className="icofont-ban" /> Block</a></li>
                      <li><a href="#" title><i className="icofont-trash" /> Delete</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-5">
                <div className="sp sp-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>{/* main content */}
    <div className="popup-wraper">
      <div className="popup">
        <span className="popup-closed"><i className="icofont-close" /></span>
        <div className="popup-meta">
          <div className="popup-head">
            <h5><i className="icofont-envelope" /> Send Message</h5>
          </div>
          <div className="send-message">
            <form method="post" className="c-form">
              <input type="text" placeholder="Enter Name.." />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Write Message" defaultValue={""} />
              <div className="uploadimage">
                <i className="icofont-file-jpg" />
                <label className="fileContainer">
                  <input type="file" />Attach file
                </label>
              </div>
              <button type="submit" className="main-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>{/* send message popup */}
    <div className="side-slide">
      <span className="popup-closed"><i className="icofont-close" /></span>
      <div className="slide-meta">
        <ul className="nav nav-tabs slide-btns">
          <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
          <li className="nav-item"><a className href="#notifications" data-toggle="tab">Notifications</a></li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content">
          <div className="tab-pane active fade show" id="messages">
            <h4><i className="icofont-envelope" /> messages</h4>
            <a href="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></a>
            <ul className="new-messages">
              <li>
                <figure><img src="images/resources/user1.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Ibrahim Ahmed</span>
                  <a href="#" title>Helo dear i wanna talk to you</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user2.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Fatima J.</span>
                  <a href="#" title>Helo dear i wanna talk to you</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user3.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Fawad Ahmed</span>
                  <a href="#" title>Helo dear i wanna talk to you</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user4.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Saim Turan</span>
                  <a href="#" title>Helo dear i wanna talk to you</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user5.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>Helo dear i wanna talk to you</a>
                </div>
              </li>
            </ul>
            <a href="#" title className="main-btn" data-ripple>view all</a>
          </div>
          <div className="tab-pane fade" id="notifications">
            <h4><i className="icofont-bell-alt" /> notifications</h4>
            <ul className="notificationz">
              <li>
                <figure><img src="images/resources/user5.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>recommend your post</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user4.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>share your post <strong>a good time today!</strong></a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user2.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>recommend your post</a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user1.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>share your post <strong>a good time today!</strong></a>
                </div>
              </li>
              <li>
                <figure><img src="images/resources/user3.jpg" alt /></figure>
                <div className="mesg-info">
                  <span>Alis wells</span>
                  <a href="#" title>recommend your post</a>
                </div>
              </li>
            </ul>
            <a href="#" title className="main-btn" data-ripple>view all</a>
          </div>
        </div>
      </div>
    </div>{/* side slide message & popup */}
  </div>
  {/* Mirrored from wpkixx.com/html/Yara Live-panel/team.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 11:15:48 GMT */}
</div>
   </>
  )
}

export default Team
