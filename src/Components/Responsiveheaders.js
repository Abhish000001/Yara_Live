import React from 'react'
import { Link } from 'react-router'

const Responsiveheaders = () => {
  return (
    <>
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
                <svg className="feather feather-grid" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={18} width={18} xmlns="http://www.w3.org/2000/svg">
                  <rect height={7} width={7} y={3} x={3} />
                  <rect height={7} width={7} y={3} x={14} />
                  <rect height={7} width={7} y={14} x={14} />
                  <rect height={7} width={7} y={14} x={3} />
                </svg>
              </i>
            </div>
            <ul className="drop-menu">
              <li>
                <Link to={"/profiles"}>
                  <a title="profiles" href="profile.html"><i className="icofont-user-alt-1" />Your Profile</a>
                </Link>
              </li>
              <li>
                <a title href="#"><i className="icofont-question-circle" />Help</a>
              </li>
              <li>
                <a title href="#"><i className="icofont-gear" />Setting</a>
              </li>
              <li>
                <a className="dark-mod" title href="#"><i className="icofont-moon" />Dark Mode</a>
              </li>
              <li>
                <Link to={"/login"}>
                  <a title href="login-register.html" className="logout"><i className="icofont-logout" />Logout</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="res-search">
            <span><i>
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" /></svg></i></span>
          </div>
        </div>
        <div className="restop-search">
          <span className="hide-search"><i className="icofont-close-circled" /></span>
          <form method="post">
            <input type="text" placeholder="Search..." />
          </form>
        </div>
      </div>
    </>
  )
}

export default Responsiveheaders
