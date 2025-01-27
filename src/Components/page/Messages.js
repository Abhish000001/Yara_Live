import React from 'react'

const Messages = () => {
  return (
 <>
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
</div>
 </>
  )
}

export default Messages
