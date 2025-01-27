import React from 'react'
import { Link } from 'react-router'

const Admin1 = () => {
  return (
<>
<div>
  <div className="theme-layout">
    <div className="responsive-header">
      <div className="res-logo"><img src="images/logo.png" alt /></div>
      <div className="user-avatar mobile">
        <a href="profile.html" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
        <div className="name">
          <h4>Saim Turan</h4>
          <span>Antalaya, Turky</span>
        </div>
      </div>
      <div className="right-compact">
        <div className="menu-area">
          <div id="nav-icon3">
            <i>
              <svg className="feather feather-grid" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                <rect height={7} width={7} y={3} x={3} />
                <rect height={7} width={7} y={3} x={14} />
                <rect height={7} width={7} y={14} x={14} />
                <rect height={7} width={7} y={14} x={3} />
              </svg>
            </i>
          </div>
          <ul className="drop-menu">
            <li><a title="profile.html" href="profile.html"><i className="icofont-user-alt-1" />Your
                Profile</a></li>
            <li><a title href="#"><i className="icofont-question-circle" />Help</a></li>
            <li><a title href="#"><i className="icofont-gear" />Setting</a></li>
            <li><a className="dark-mod" title href="#"><i className="icofont-moon" />Dark Mode</a></li>
            <li><a title href="login-register.html" className="logout"><i className="icofont-logout" />Logout</a></li>
          </ul>
        </div>
        <div className="res-search">
          <span><i>
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg></i></span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg></i>
            </a>
            </Link>
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg></i>
            </a>
            <span />
          </li>
          <li>
            <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg></i>
            </a>
            <span />
          </li>
          <li>
            <a className="create" href="#" title="Add New" data-toggle="tooltip">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg></i>
            </a>
          </li>
          <li>
            <a title href="#">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                  <rect x={3} y={3} width={7} height={7} />
                  <rect x={14} y={3} width={7} height={7} />
                  <rect x={14} y={14} width={7} height={7} />
                  <rect x={3} y={14} width={7} height={7} />
                </svg>
              </i>
            </a>
            <ul className="dropdown">
              <li><a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a></li>
              <li><a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a></li>
              <li><a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite
                  Collegue</a></li>
              <li><a href="pay-out.html" title><i className="icofont-price" /> Payout</a></li>
              <li><a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a></li>
              <li><a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a></li>
              <li><a href="settings.html" title><i className="icofont-gear" /> Setting</a></li>
              <li><a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a>
              </li>
              <li><a className="dark-mod" title href="#"><i className="icofont-moon" /> Dark Mode</a></li>
              <li className="logout"><a href="sign-in.html" title><i className="icofont-power" /> Logout</a>
              </li>
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
                <svg id="menu-btn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg></i>
            </div>
            <div className="page-title">
              <h4>Dashboard</h4>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <ul className="breadcrumb">
              <li><a href="#" title>Home</a></li>
              <li><a href="#" title>Dashboard</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>{/* top sub bar */}
    <nav className="sidebar">
      <ul className="menu-slide">
        <li className="active">
          <Link to={"/home"}>
          <a className href="home" title>
            <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg></i> Dashboard
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/analytics"}>
          <a className href="analytics" title>
            <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg></i>Analytics
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/profiles"}>
          <a className href="profiles" title>
            <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle r={4} cy={7} cx={9} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg></i>
            Profile
          </a>
          </Link>
        </li>
        <li className>
       <Link to={"/reviews"}>
          <a className href="reviews" title>
            <i className>
              <svg id="ab3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                </polygon>
              </svg></i>Reviews
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/events"}>
          <a className href="events" title><i className>
              <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay">
                <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                </path>
                <polygon points="12 15 17 21 7 21 12 15" />
              </svg></i>Events
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/products"}>
          <a className href="products" title>
            <i className>
              <svg id="ab5" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1={3} y1={6} x2={21} y2={6} />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg></i>Products
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/blog"}>
          <a className href="blog" title>
            <i className>
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1={6} y1={1} x2={6} y2={4} />
                <line x1={10} y1={1} x2={10} y2={4} />
                <line x1={14} y1={1} x2={14} y2={4} />
              </svg>
            </i>Blogs
          </a>
          </Link>
        </li>
        <li className>
            <Link to={"/messageinbox"}>
          <a className href="messageinbox" title>
            <i className>
              <svg id="ab2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg></i>Messages
          </a>
          </Link>
        </li>
        <li className>
          <Link to={"/team"}>
          <a className href="team" title>
            <i className>
              <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                <circle cx={12} cy={12} r={10} />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1={9} y1={9} x2="9.01" y2={9} />
                <line x1={15} y1={9} x2="15.01" y2={9} />
              </svg></i>Team
          </a>
          </Link>
        </li>
        <li className>
 <Link to={"/login"}>
          <a className href="login" title>
            <i className>
              <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg></i>Login/Register
          </a>
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={"#"}>
          <a className href="#" title>
            <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg></i>Pages
          </a>
          </Link>
          <ul className="submenu">
            <li><a href="404.html" title>Error 404</a></li>
            <li><a href="forgot-password.html" title>Forgot Password</a></li>
            <li><a href="loaders.html" title>Loaders/spiners</a></li>
            <li><a href="invoice-edit.html" title>Invoice</a></li>
            <li><a href="maps.html" title>Google Maps</a></li>
            <li><a href="http://wpkixx.com/html/Yara Live/development-elements.html" title>Elements</a></li>
            <li><a href="http://wpkixx.com/html/Yara Live/development-component.html" title>Components</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>{/* sidebar */}
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="main-title">Users Management</h4>
            <div className="row merged20 mb-4">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="d-widget soft-red">
                  <div className="d-widget-title">
                    <h5>Realtime Users</h5>
                  </div>
                  <div className="d-widget-content">
                    <span className="realtime-ico pulse" />
                    <h6>Updating live</h6>
                    <h5>223</h5>
                    <i className="icofont-users-alt-3" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="d-widget soft-blue">
                  <div className="d-widget-title">
                    <h5>Realtime Watch</h5>
                  </div>
                  <div className="d-widget-content">
                    <span className="realtime-ico pulse" />
                    <h6>Updating live</h6>
                    <h5>5016</h5>
                    <i className="icofont-optic" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="d-widget soft-green">
                  <div className="d-widget-title">
                    <h5>Realtime Posts</h5>
                  </div>
                  <div className="d-widget-content">
                    <span className="realtime-ico pulse" />
                    <h6>Updating live</h6>
                    <h5>5.3K</h5>
                    <i className="icofont-computer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-8">
                <div className="d-widget">
                  <div className="d-widget-title">
                    <h5>Top Users</h5>
                  </div>
                  <table className="table-default table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th className="wd-35p">Name</th>
                        <th className="wd-15p">Sales</th>
                        <th className="wd-25p">Ratings</th>
                        <th className="wd-25p">Earnings ($)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><span className="avatar-initial rounded-circle bg-secondary">s</span>
                            </div>
                            <span className="tx-medium mg-l-10">Socrates Itumay</span>
                          </div>
                        </td>
                        <td>58</td>
                        <td>
                          <div className="rating-stars">
                            <span>96%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>
                        </td>
                        <td>302, 422.50</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><img src="images/resources/user2.jpg" className="rounded-circle" alt /></div>
                            <span className="tx-medium mg-l-10">Dianne Aceron</span>
                          </div>
                        </td>
                        <td>49</td>
                        <td>
                          <div className="rating-stars">
                            <span>85%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>{/* rating-stars */}
                        </td>
                        <td>264, 090.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><img src="images/resources/user6.jpg" className="rounded-circle" alt /></div>
                            <span className="tx-medium mg-l-10">Katherine Movera</span>
                          </div>
                        </td>
                        <td>40</td>
                        <td>
                          <div className="rating-stars">
                            <span>79%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>{/* rating-stars */}
                        </td>
                        <td>238, 720.80</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><span className="avatar-initial rounded-circle bg-primary">r</span>
                            </div>
                            <span className="tx-medium mg-l-10">Reynante Labares</span>
                          </div>
                        </td>
                        <td>38</td>
                        <td>
                          <div className="rating-stars">
                            <span>45%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>
                        </td>
                        <td>227, 063.20</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><span className="avatar-initial rounded-circle bg-dark">d</span>
                            </div>
                            <span className="tx-medium mg-l-10">Dexter Dela Cruz</span>
                          </div>
                        </td>
                        <td>26</td>
                        <td>
                          <div className="rating-stars">
                            <span>76%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>
                        </td>
                        <td>202, 918.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><span className="avatar-initial rounded-circle bg-purple">j</span>
                            </div>
                            <span className="tx-medium mg-l-10">Johnwyne Mendez</span>
                          </div>
                        </td>
                        <td>26</td>
                        <td>
                          <div className="rating-stars">
                            <span>88%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>
                        </td>
                        <td>202, 918.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><img src="images/resources/user8.jpg" className="rounded-circle" alt /></div>
                            <span className="tx-medium mg-l-10">Evelyn Movera</span>
                          </div>
                        </td>
                        <td>40</td>
                        <td>
                          <div className="rating-stars">
                            <span>79%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>{/* rating-stars */}
                        </td>
                        <td>238, 720.80</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><img src="images/resources/user7.jpg" className="rounded-circle" alt /></div>
                            <span className="tx-medium mg-l-10">Jackson will</span>
                          </div>
                        </td>
                        <td>40</td>
                        <td>
                          <div className="rating-stars">
                            <span>79%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>{/* rating-stars */}
                        </td>
                        <td>238, 720.80</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xs"><img src="images/resources/user2.jpg" className="rounded-circle" alt /></div>
                            <span className="tx-medium mg-l-10">Katherine Sima</span>
                          </div>
                        </td>
                        <td>40</td>
                        <td>
                          <div className="rating-stars">
                            <span>79%</span>
                            <ul>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                              <li><i className="icofont-star" /></li>
                            </ul>
                          </div>{/* rating-stars */}
                        </td>
                        <td>238, 720.80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-widget mb-4">
                  <div className="d-widget-title">
                    <h5>Todsy's Earnings</h5>
                  </div>
                  <div className="d-widget-content">
                    <ul className="earningz">
                      <li><span>Books: </span> 55 sales <em>$200</em></li>
                      <li><span>Courses: </span> 20 sales <em>$500</em></li>
                      <li><span>Other: </span> 2 sales <em>$100</em></li>
                    </ul>
                    <div className="totl-blnce">
                      <span>Balance: <i>$205.03</i></span>
                    </div>
                    <svg id="dolor-sign" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign earning">
                      <line x1={12} y1={1} x2={12} y2={23} />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-widget">
                      <div className="d-widget-title">
                        <h5>Top Five active</h5>
                      </div>
                      <ul className="top-5">
                        <li>
                          <figure><img src="images/resources/user1.jpg" alt /><span className="status online" /></figure>
                          <a href="#" title>Big Boss</a>
                          <span className="user-active-time">23hrs/day</span>
                        </li>
                        <li>
                          <figure><img src="images/resources/user2.jpg" alt /><span className="status online" /></figure>
                          <a href="#" title>Sarah Jane</a>
                          <span className="user-active-time">22hrs/day</span>
                        </li>
                        <li>
                          <figure><img src="images/resources/user3.jpg" alt /><span className="status online" /></figure>
                          <a href="#" title>Andrew</a>
                          <span className="user-active-time">20hrs/day</span>
                        </li>
                        <li>
                          <figure><img src="images/resources/user4.jpg" alt /><span className="status online" /></figure>
                          <a href="#" title>Frank</a>
                          <span className="user-active-time">19hrs/day</span>
                        </li>
                        <li>
                          <figure><img src="images/resources/user5.jpg" alt /><span className="status online" /></figure>
                          <a href="#" title>Bob Emily</a>
                          <span className="user-active-time">18hrs/day</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-6">
                <div className="d-widget pd-0 soft-red mb-4">
                  <div className="d-widget-meta">
                    <div className="w-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-link">
                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71">
                        </path>
                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71">
                        </path>
                      </svg>
                    </div>
                    <h5 className>Referral</h5>
                    <p className="w-value">1,900</p>
                  </div>
                  <div className="d-widget-content">
                    <div className="w-chart">
                      <div id="hybrid_followers1" />
                    </div>
                  </div>
                </div>
                <div className="d-widget bg-danger uk-light">
                  <div className="d-widget-title">
                    <h5>Violation Reports</h5>
                  </div>
                  <div className="d-widget-content">
                    <div className="violetion-message">
                      <p>
                        <i className="icofont-info-circle" />
                        Report about the sex content violation of Yara Live
                        <a className="button soft-danger circle" href="#" title>Take Action</a>
                      </p>
                      <p>
                        <i className="icofont-info-circle" />
                        Report about abuse violation of Yara Live
                        <a className="button soft-danger circle" href="#" title>Take Action</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-widget">
                  <div className="d-widget-title">
                    <h5>Daily Active Users</h5>
                  </div>
                  <div id="uniqueVisits" />
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-12">
                <div className="d-widget">
                  <div className="d-widget-title">
                    <h5>Manage Users</h5>
                  </div>
                  <div className="d-widget-content">
                    <table className="table manage-user table-default table-responsive-md">
                      <thead>
                        <tr>
                          <th>User Name</th>
                          <th>View profile</th>
                          <th>Chat History</th>
                          <th>Blocked</th>
                          <th>Hide</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <figure><img src="images/resources/user.png" alt /></figure>
                            <h5>Maria K.</h5>
                          </td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch1" />
                              <label className="switch" htmlFor="switch1" />
                            </div>
                          </td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch2" />
                              <label className="switch" htmlFor="switch2" />
                            </div>
                          </td>
                          <td>
                            <div className="actions-btn">
                              <span className="iconbox button soft-primary"><i className="icofont-pen-alt-1" /></span>
                              <span className="iconbox button soft-danger"><i className="icofont-trash" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure><img src="images/resources/user2.jpg" alt /></figure>
                            <h5>Sarika sing.</h5>
                          </td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch3" />
                              <label className="switch" htmlFor="switch3" />
                            </div>
                          </td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch4" />
                              <label className="switch" htmlFor="switch4" />
                            </div>
                          </td>
                          <td>
                            <div className="actions-btn">
                              <span className="iconbox button soft-primary"><i className="icofont-pen-alt-1" /></span>
                              <span className="iconbox button soft-danger"><i className="icofont-trash" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure><img src="images/resources/user3.jpg" alt /></figure>
                            <h5>King Khan</h5>
                          </td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch5" />
                              <label className="switch" htmlFor="switch5" />
                            </div>
                          </td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch6" />
                              <label className="switch" htmlFor="switch6" />
                            </div>
                          </td>
                          <td>
                            <div className="actions-btn">
                              <span className="iconbox button soft-primary"><i className="icofont-pen-alt-1" /></span>
                              <span className="iconbox button soft-danger"><i className="icofont-trash" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure><img src="images/resources/user4.jpg" alt /></figure>
                            <h5>jacob</h5>
                          </td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch7" />
                              <label className="switch" htmlFor="switch7" />
                            </div>
                          </td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch8" />
                              <label className="switch" htmlFor="switch8" />
                            </div>
                          </td>
                          <td>
                            <div className="actions-btn">
                              <span className="iconbox button soft-primary"><i className="icofont-pen-alt-1" /></span>
                              <span className="iconbox button soft-danger"><i className="icofont-trash" /></span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <figure><img src="images/resources/user5.jpg" alt /></figure>
                            <h5>Andrew</h5>
                          </td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td><a className="mini-btn" href="#" title>view</a></td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch9" />
                              <label className="switch" htmlFor="switch9" />
                            </div>
                          </td>
                          <td>
                            <div className="switch-btn">
                              <input type="checkbox" hidden="hidden" id="switch10" />
                              <label className="switch" htmlFor="switch10" />
                            </div>
                          </td>
                          <td>
                            <div className="actions-btn">
                              <span className="iconbox button soft-primary"><i className="icofont-pen-alt-1" /></span>
                              <span className="iconbox button soft-danger"><i className="icofont-trash" /></span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-12">
                <div className="d-widget">
                  <div className="d-widget-title">
                    <h5>Latest Transcations</h5>
                  </div>
                  <table className="table-default table table-striped table-responsive-md">
                    <thead>
                      <tr>
                        <th>Order#</th>
                        <th>Product Name</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Pay Method</th>
                        <th>Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>001</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-1.jpg" alt /> Html Basics
                            Book</a></td>
                        <td>17-Oct-20</td>
                        <td>$50</td>
                        <td>Delivered</td>
                        <td>Paypal</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>002</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-2.jpg" alt /> VU.Js script
                            Book</a></td>
                        <td>15-Oct-20</td>
                        <td>$30</td>
                        <td>On Way</td>
                        <td>Payoneer</td>
                        <td><a href="#" title>view inoice</a></td>
                      </tr>
                      <tr>
                        <td>003</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-3.jpg" alt /> Online Css3
                            Course</a></td>
                        <td>07-Oct-20</td>
                        <td>$20</td>
                        <td>Pending</td>
                        <td>Visa</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>004</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-4.jpg" alt /> Online Course
                            Basic HTML</a></td>
                        <td>02-Oct-20</td>
                        <td>$10</td>
                        <td>Delivered</td>
                        <td>Paypal</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>005</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-5.jpg" alt /> PHP Advance
                            Course</a></td>
                        <td>27-Sep-20</td>
                        <td>$30</td>
                        <td>Delivered</td>
                        <td>COD</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>006</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-6.jpg" alt /> Advance Wp
                            Book</a></td>
                        <td>25-Sep-20</td>
                        <td>$25</td>
                        <td>Return</td>
                        <td>Bitcoin</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>007</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-2.png" alt /> Online
                            Marketing</a></td>
                        <td>24-Sep-20</td>
                        <td>$22</td>
                        <td>Delivered</td>
                        <td>Master Card</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                      <tr>
                        <td>008</td>
                        <td className="productss"><a href="#" title><img src="images/resources/course-1.jpg" alt /> Advance PHP
                            Book</a></td>
                        <td>20-Sep-20</td>
                        <td>$29</td>
                        <td>Pending</td>
                        <td>Visa</td>
                        <td><a href="#" title>view invoice</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
  {/* Mirrored from wpkixx.com/html/Yara Live-panel/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 02 Dec 2024 11:15:29 GMT */}
</div>
</>
  )
}

export default Admin1
