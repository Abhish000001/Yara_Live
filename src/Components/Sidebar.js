import React from 'react'
import { Link, useLocation  } from 'react-router-dom'
const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  return (
    <>
      <nav className="sidebar">
        <ul className="menu-slide">
          <li className={isActive("/analytic")}>
            <Link to={"/analytic"} className title>
              <i><svg id="icon-home" className="feather feather-home" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" /></svg></i>Dashboard
            </Link>
          </li>

          <li className={isActive("/user")}>
            <Link to={"/user"} className title>
              <i><svg id="ab1" className="feather feather-users" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle r={4} cy={7} cx={9} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></i>
              User Management
            </Link>

          </li>
          <li className={isActive("/community")}>

            <Link to={"/community"} className title>
              <i><svg id="ab7" className="feather feather-zap" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg></i>
              Community
            </Link>

          </li>
          <li className={isActive("/page")}>

            <Link to={"/page"} title>
              <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" /></svg></i>
              Page
            </Link>

          </li>
          <li className={isActive("/transactionList")}>

            <Link to={"/transactionList"} title>
              <i><svg id="ab8" className="feather feather-file" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={14} width={14} xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" /></svg></i>
              TransactionList
            </Link>

          </li>
          {/* <li className={isActive("/blog")}>
            <Link to={"/blog"}>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1={6} y1={1} x2={6} y2={4} />
                  <line x1={10} y1={1} x2={10} y2={4} />
                  <line x1={14} y1={1} x2={14} y2={4} />
                </svg></i>Blogs
            </Link>
          </li> */}
          <li className={isActive("/messages")}>
            <Link to={"/messages"}>
              <i className>
                <svg id="ab2" xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>Messages
            </Link>
          </li>
          {/* <li className>
            <Link to={"/team"}>
              
                <i className>
                  <svg id="team" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} y1={9} x2="9.01" y2={9} />
                    <line x1={15} y1={9} x2="15.01" y2={9} /></svg></i>Team
            </Link>
          </li> */}
          <li className={isActive("/privacyPolicy")}>
            <Link to={"/privacyPolicy"}>
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
                  className="feather feather-shield"
                >
                  <path d="M12 2l9 4v7c0 4-3 7-9 7s-9-3-9-7V6l9-4z" />
                </svg>
              </i>
              Privacy Policy
            </Link>
          </li>

          <li className={isActive("/aboutUs")}>
            <Link to={"/aboutUs"}>
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
                  className="feather feather-users"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                  <path d="M16 14s1.5 2 4 2 4-2 4-2" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                </svg>
              </i>
              About Us
            </Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Sidebar
