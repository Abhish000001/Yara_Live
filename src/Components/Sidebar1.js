import React from 'react'
import { Link } from 'react-router'
const Sidebar1 = () => {
 
  return (
   <>
   <div>
   <nav className="sidebar">
  <ul className="menu-slide">
    <li className="active">
      <Link to={"/home"}>
      <a className href="home" title>
        <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" /></svg></i>
        Dashboard
      </a>
      </Link>
    </li>
    <li className>
      <Link to={"/analytics"}>
      <a className href="analytics" title>
        <i className><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i>Analytics
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
            <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i>
        Profile
      </a>
      </Link>
    </li>
    <li className>
      <Link to={"reviews"}>
      <a className href="reviews" title>
        <i className>
          <svg id="ab3" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>Reviews
      </a>
      </Link>
    </li>
    <li className>
      <Link to={"events"}>
      <a className href="events" title><i className>
          <svg id="ab4" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-airplay">
            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
            <polygon points="12 15 17 21 7 21 12 15" /></svg></i>Events
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
            <path d="M16 10a4 4 0 0 1-8 0" /></svg></i>Products
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
          </svg> </i>Blogs
      </a>
      </Link>
    </li>
    <li className>
      <Link to={"/messageinbox"}>
      <a className href="messageinbox" title>
        <i className>
          <svg id="ab2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>Messages
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
            <line x1={15} y1={9} x2="15.01" y2={9} /></svg></i>Team
      </a>
      </Link>
    </li>
    <li className>
      <Link to={"/login"}>
      <a className href="login" title>
        <i className>
          <svg id="ab9" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock">
            <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg></i>Login/Register
      </a>
      </Link>
    </li>
    <li className="menu-item-has-children">
      <Link to={"#"}>
      <a className href="#" title>
        <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" /></svg></i>Pages
      </a>
      </Link>
      <ul className="submenu">
        <li><a href="404.html" title>Error 404</a></li>
        <li>
          <a href="forgot-password.html" title>Forgot Password</a>
        </li>
        <li><a href="loaders.html" title>Loaders/spiners</a></li>
        <li><a href="invoice-edit.html" title>Invoice</a></li>
        <li><a href="maps.html" title>Google Maps</a></li>
        <li>
          <a href="http://wpkixx.com/html/Yara Live/development-elements.html" title>Elements</a>
        </li>
        <li>
          <a href="http://wpkixx.com/html/Yara Live/development-component.html" title>Components</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>
   </div>
   </>
  )
}

export default Sidebar1
