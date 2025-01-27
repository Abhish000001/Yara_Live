import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Updated import to 'react-router-dom'

const Topbars = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
  const [activeMenu, setActiveMenu] = useState(null); // Track active menu item
  const sidebarRef = useRef(null); // Ref to the sidebar
  const menuBtnRef = useRef(null); // Ref to the menu button

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current && !sidebarRef.current.contains(event.target) && 
      !menuBtnRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); 
    setIsSidebarOpen(false); 
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="top-sub-bar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              {/* Only show the menu button on mobile */}
              <div className="menu-btn" onClick={toggleSidebar} ref={menuBtnRef}>
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
                  className="feather feather-menu"
                >
                  <line x1={3} y1={12} x2={21} y2={12} />
                  <line x1={3} y1={6} x2={21} y2={6} />
                  <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
                <span className="page-title"> Dashboard</span>
              </div>
              <div className="page-title dash">
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <ul className="breadcrumb">
                <li><a href="#" className='sidebar_menu' title>Home</a></li>
                <li><a href="#" className='sidebar_menu' title>Dashboard</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} ref={sidebarRef}>
        {/* Add your sidebar content here */}
        <ul>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'dashboard' ? 'active' : ''}`} 
              to="/analytic" 
              onClick={() => handleMenuClick('dashboard')}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'user' ? 'active' : ''}`} 
              to="/user" 
              onClick={() => handleMenuClick('user')}
            >
              User Management
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'community' ? 'active' : ''}`} 
              to="/community" 
              onClick={() => handleMenuClick('community')}
            >
              Community
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'page' ? 'active' : ''}`} 
              to="/page" 
              onClick={() => handleMenuClick('page')}
            >
              Page
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'transactionList' ? 'active' : ''}`} 
              to="/transactionList" 
              onClick={() => handleMenuClick('transactionList')}
            >
              Transaction List
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'blog' ? 'active' : ''}`} 
              to="/blog" 
              onClick={() => handleMenuClick('blog')}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'messages' ? 'active' : ''}`} 
              to="/messages" 
              onClick={() => handleMenuClick('messages')}
            >
              Messages
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'privacyPolicy' ? 'active' : ''}`} 
              to="/privacyPolicy" 
              onClick={() => handleMenuClick('privacyPolicy')}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link 
              className={`sidebar_menu ${activeMenu === 'aboutUs' ? 'active' : ''}`} 
              to="/aboutUs" 
              onClick={() => handleMenuClick('aboutUs')}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Topbars;
