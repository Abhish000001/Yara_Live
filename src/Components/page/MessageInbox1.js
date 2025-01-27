import React from 'react'

const MessageInbox1 = () => {
  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="main-title">Messages</h4>
            <div className="row">
              <div className="col-lg-8">
                <div className="message-box">
                  <div className="message-header">
                    <div className="useravatar active">
                      <img src="images/resources/friend-avatar.jpg" alt />
                      <span>Oliver</span>
                      <div className="status away" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar2.jpg" alt />
                      <span>Sarah</span>
                      <div className="status online" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar3.jpg" alt />
                      <span>Andrew</span>
                      <div className="status offline" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar4.jpg" alt />
                      <span>Mikaly</span>
                      <div className="status online" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar5.jpg" alt />
                      <span>Bumsy</span>
                      <div className="status away" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar.jpg" alt />
                      <span>Harry</span>
                      <div className="status offline" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar2.jpg" alt />
                      <span>Laila</span>
                      <div className="status offline" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar3.jpg" alt />
                      <span>Noah</span>
                      <div className="status offline" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar4.jpg" alt />
                      <span>Maria</span>
                      <div className="status offline" />
                    </div>
                    <div className="useravatar">
                      <img src="images/resources/friend-avatar5.jpg" alt />
                      <span>Ellie</span>
                      <div className="status offline" />
                    </div>
                  </div>
                  <div className="message-content">
                    <div className="chat-header">
                      <div className="status online" />
                      <h6>last seen on today at 12:39</h6>
                      <div className="corss">
                        <span className="report"><i className="icofont-flag" /></span>
                        <span className="options"><i className="icofont-brand-flikr" /></span>
                      </div>
                    </div>
                    <div className="chat-content">
                      <div className="date">Wednesday 25, March</div>
                      <ul className="chatting-area">
                        <li className="you">
                          <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                          <p>what's liz short for? :)</p>
                        </li>
                        <li className="me">
                          <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                          <p>Elizabeth lol</p>
                        </li>
                        <li className="me">
                          <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                          <p>wanna know whats my second guess was?</p>
                        </li>
                        <li className="you">
                          <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                          <p>yes</p>
                        </li>
                        <li className="me">
                          <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                          <p>Disney's the lizard king</p>
                        </li>
                        <li className="me">
                          <figure><img src="images/resources/userlist-1.jpg" alt /></figure>
                          <p>i know him 5 years ago</p>
                        </li>
                        <li className="you">
                          <figure><img src="images/resources/userlist-2.jpg" alt /></figure>
                          <p>coooooooooool dude ;)</p>
                        </li>
                      </ul>
                      <div className="message-text-container">
                        <div className="more-attachments">
                          <i className="icofont-plus" />
                        </div>
                        <div className="attach-options">
                          <a href="#" title><i className="icofont-camera" /> Open Camera</a>
                          <a href="#" title><i className="icofont-video-cam" /> Photo &amp; video Library</a>
                          <a href="#" title><i className="icofont-paper-clip" /> Attach Document</a>
                          <a href="#" title><i className="icofont-location-pin" /> Share Location</a>
                          <a href="#" title><i className="icofont-contact-add" /> Share Contact</a>
                        </div>
                        <form method="post">
                          <span className="emojie"><img src="images/smiles/happy.png" alt /></span>
                          <textarea rows={1} placeholder="say someting..." defaultValue={""} />
                          <button title="send"><i className="icofont-paper-plane" /></button>
                          <div className="smiles-bunch">
                            <i><img src="images/smiles/angry-1.png" alt /></i>
                            <i><img src="images/smiles/angry.png" alt /></i>
                            <i><img src="images/smiles/bored-1.png" alt /></i>
                            <i><img src="images/smiles/bored-2.png" alt /></i>
                            <i><img src="images/smiles/bored.png" alt /></i>
                            <i><img src="images/smiles/confused-1.png" alt /></i>
                            <i><img src="images/smiles/confused.png" alt /></i>
                            <i><img src="images/smiles/crying-1.png" alt /></i>
                            <i><img src="images/smiles/crying.png" alt /></i>
                            <i><img src="images/smiles/tongue-out.png" alt /></i>
                            <i><img src="images/smiles/wink.png" alt /></i>
                            <i><img src="images/smiles/suspicious.png" alt /></i>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="profile-short">
                  <div className="chating-head">
                    <div className="s-left">
                      <h5>Sarah Martin</h5>
                      <p>United States</p>
                    </div>
                    <div className="s-right">
                      <span title="Call Video">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-video"><polygon points="23 7 16 12 23 17 23 7" /><rect x={1} y={5} width={15} height={14} rx={2} ry={2} /></svg></span>
                      <span title="Call Audio">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      </span>
                    </div>
                  </div>
                  <div className="short-intro">
                    <figure><img src="images/resources/album1.jpg" alt /></figure>
                    <ul>
                      <li>
                        <span>Display Name</span>
                        <p>Harry</p>
                      </li>
                      <li>
                        <span>Local time</span>
                        <p>3:40AM</p>
                      </li>
                      <li>
                        <span>Email Address</span>
                        <p>Sample@gmail.com</p>
                      </li>
                      <li>
                        <span>Phone Number</span>
                        <p>+1 223 509309</p>
                      </li>
                      <li>
                        <span>Skype Id</span>
                        <p>Sarah22</p>
                      </li>
                    </ul>
                    <a className="button primary circle" href="#" title>view Profile</a>
                    <a className="button primary circle danger" href="#" title>Block Chat</a>
                  </div>
                </div>
              </div>
            </div>	
          </div>
        </div>
      </div>
    </div>{/* main content */}
  </>
  )
}

export default MessageInbox1
