import React, { useState } from 'react'

const Sideslide = () => {
  const [isSideSlideActive, setIsSideSlideActive] = useState(false);
   const [tooltipText, setTooltipText] = useState("");

  // const handleMouseEnter = () => {
  //   setTooltipText("Messages"); // Change this text for dynamic tooltips
  // };

  // const handleMouseLeave = () => {
  //   setTooltipText("");
  // };

  const toggleSideSlide = () => {
    setIsSideSlideActive((prev) => !prev);
  };

  const closeSideSlide = () => {
    setIsSideSlideActive(false);
  };
  return (
   <>
       <div  className={`side-slide ${isSideSlideActive ? "active" : ""}`}>
      <span className="popup-closed" onClick={closeSideSlide}><i className="icofont-close" /></span>
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
   </>
  )
}

export default Sideslide
