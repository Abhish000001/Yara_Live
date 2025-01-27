import React from 'react'
import { Link } from 'react-router'

const Analytics = () => {
  return (
<>
<div>

  <div className="theme-layout">
   
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="main-title">Welcome To Yara Live</h4>
            <div className="row merged20 mb-4">
              <div className="col-lg-4 col-md-6">
                <div className="w-chart-section">
                  <div className="w-detail">
                    <p className="w-title">Total Visits</p>
                    <p className="w-stats">423,964</p>
                    <span>
                      <svg id="user-icon" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
                  </div>
                  <div className="w-chart-render-one">
                    <div id="total-users" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="w-chart-section">
                  <div className="w-detail">
                    <p className="w-title">Total Orders</p>
                    <p className="w-stats">7,929</p>
                    <span>
                      <svg id="bag" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></span>
                  </div>
                  <div className="w-chart-render-one">
                    <div id="paid-visits" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="w-chart-section">
                  <div className="w-detail">
                    <p className="w-title">Total Downloads</p>
                    <p className="w-stats">7,929</p>
                    <span>
                      <svg id="download" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-download-cloud"><polyline points="8 17 12 21 16 17" /><line x1={12} y1={12} x2={12} y2={21} /><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" /></svg></span>
                  </div>
                  <div className="w-chart-render-one">
                    <div id="total-downloads" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="d-widget">
                  <div className="d-widget-title">
                    <h5 className>Revenue</h5>
                    <select className="browser-default custom-select">
                      <option value={3}>last day</option>
                      <option value={2}>week</option>
                      <option selected>Monthly</option>
                      <option value={1}>Yearly</option>
                    </select>
                  </div>
                  <div className="d-widget-content">
                    <div className="tabs tab-content">
                      <div id="content_1" className="tabcontent"> 
                        <div id="revenueMonthly" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="d-widget blue-bg pd-0">
                  <div className="d-widget-content">
                    <div className="w-numeric-value">
                      <div className="w-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx={9} cy={21} r={1} /><circle cx={20} cy={21} r={1} /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                      </div>
                      <div className="d-content">
                        <span className="w-numeric-title">This Month Orders</span>
                        <span className="w-value">3,192</span>
                      </div>
                    </div>
                    <div className="w-chart">
                      <div id="total-orders" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20 mb-4">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="d-widget">
                  <div className="d-widget-title"><h5 className>Revenue</h5></div>
                  <div className="d-widget-content">
                    <div className="w-content">
                      <p>Daily sales Go to columns for details.</p>
                    </div>
                    <div className="d-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign"><line x1={12} y1={1} x2={12} y2={23} /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                      <span>201</span>
                    </div>
                    <div className="w-chart">
                      <div id="daily-sales" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="d-widget pd-0 soft-blue">
                  <div className="d-widget-meta">
                    <div className="w-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <h5 className>Followers</h5>
                    <p className="w-value">31.6K</p>
                  </div>
                  <div className="d-widget-content">    
                    <div className="w-chart">
                      <div id="hybrid_followers" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="d-widget pd-0 soft-red">
                  <div className="d-widget-meta">
                    <div className="w-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
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
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="d-widget pd-0 soft-green">
                  <div className="d-widget-meta">
                    <div className="w-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
                    </div>
                    <h5 className>Engagement</h5>
                    <p className="w-value">18.2%</p>
                  </div>
                  <div className="d-widget-content">    
                    <div className="w-chart">
                      <div id="hybrid_followers3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row merged20">
              <div className="col-lg-3 col-md-6">
                <div className="d-widget">
                  <div className="d-widget-title"><h5>Monthly Product Sales</h5></div>
                  <div id="chart-2" className />
                </div>
              </div>
              <div className="col-lg-9 col-md-6">
                <div className="d-widget">
                  <div className="d-widget-title"><h5>Monthly Visitors</h5></div>
                  <div id="uniqueVisits" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
</div>
</>
  )
}

export default Analytics
