import React from 'react'

const Topbsr1 = () => {
  return (
 <>
   <div className="top-sub-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="menu-btn">
            <i className>
              <svg id="menu-btn" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} /></svg></i>
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
  </div>
 </>
  )
}

export default Topbsr1
