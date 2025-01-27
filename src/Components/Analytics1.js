import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Link, useNavigate } from "react-router-dom";
const Analytics1 = () => {
  const token = localStorage.getItem("authToken");
  let navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL;
  const [chartData, setChartData] = useState({
    series: [
      { name: "Post", data: [] },
      { name: "Reels", data: [] },
    ],
  });
  const [countData, setCountData] = useState("");

  const totalVisitsData = {
    options: {
      chart: {
        id: "total-visits",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#e7515a"],
      stroke: { width: 2, curve: "smooth" }, // Curved graph
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Visits",
        data: [100, 800, 300, 900, 200, 600, 900],
      },
    ],
  };

  // Data for Total Orders Chart

  const totalOrdersData = {
    options: {
      chart: {
        id: "total-visits",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#e2a03f"],
      stroke: { width: 2, curve: "smooth" }, // Curved graph
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Visits",
        data: [1000, 200, 800, 100, 900, 300, 800],
      },
    ],
  };

  const totalDownloadsData = {
    options: {
      chart: {
        id: "total-downloads",
        type: "line",
        height: 95,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: "transparent",
      },
      colors: ["#009688"],
      stroke: { width: 2 },
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"] },
      yaxis: { show: false },
      grid: { show: false },
      tooltip: { enabled: true },
    },
    series: [
      {
        name: "Total Downloads",
        data: [5, 55, 2, 60, 45, 55, 100],
      },
    ],
  };

  // Data for Revenue Chart
  const revenueData = {
    options: {
      chart: {
        id: "this-month-ordered",
        type: "line",
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      colors: ["#e2a03f", "#42a5f5"], // Gold and Blue line colors
      stroke: {
        curve: "smooth", // Smooth curved line
        width: 2,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ], // Months for X-axis
      },
      yaxis: {
        labels: {
          formatter: (value) => `${value}k`, // Add 'k' to Y-axis labels
        },
        min: 13,
        max: 20,
      },
      grid: {
        show: true,
        borderColor: "#e0e0e0",
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (value) => `${value}k`,
        },
      },
      fill: {
        type: "solid", // Remove gradient background
      },
    },
    series: [
      {
        name: "Online Course",
        data: [13, 14, 15, 16, 17, 18, 19, 19.5, 19, 20, 20, 19.8],
      },
      {
        name: "Books",
        data: [14, 14.5, 15, 15.5, 16, 17, 17.5, 18, 18.5, 19, 19.5, 20],
      },
    ],
  };

  // ordermonth
  const chartOptions = {
    chart: {
      type: "area",
      height: 280,
      toolbar: {
        show: false,
      },
    },
    colors: ["#e2a03f", "#42a5f5"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#42a5f5"],
        shadeIntensity: 1,
        type: "vertical",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  };

  const chartSeries = [
    {
      name: "Orders",
      data: [10, 20, 15, 25, 30, 20, 40],
    },
  ];
  // end order month

  // four chart
  const chartOptions1 = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
        columnWidth: "50%",
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    colors: ["#088dcd"],
    grid: { borderColor: "#e0e0e0" },
  };

  const chartSeries1 = [{ name: "Sales", data: [77, 70, 67, 89, 63, 61, 39] }];
  // second 2
  const chartOptions2 = {
    chart: {
      height: 160,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [0, 100],
      },
    },
    colors: ["#1b55e2"],
  };

  const chartSeries2 = [
    {
      name: "Followers",
      data: [10, 40, 15, 35, 50, 30, 60],
    },
  ];
  // thired
  const chartOptions3 = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
    colors: ["#e7515a"],
    tooltip: {
      theme: "light",
      x: {
        show: false,
      },
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  const chartSeries3 = [
    {
      name: "Sales",
      data: [4, 87, 24, 61, 56, 66, 61],
    },
  ];
  // fourth
  const chartOptions4 = {
    chart: {
      type: "area",
      height: 160,
      toolbar: {
        show: false,
      },
    },
    colors: ["#8dbf42"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.05,
        stops: [45, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
  };

  const chartSeries4 = [
    {
      name: "Engagement",
      data: [30, 66, 4, 61, 25, 61], // Example data, replace with your values
    },
  ];

  // new

  const options = {
    chart: {
      type: "donut",
      height: 360,
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
          const label = config.w.config.labels[config.seriesIndex];
          const value = config.w.config.series[config.seriesIndex];
        },
      },
    },
    labels: ["Books", "Courses", "Services", "Others"],
    colors: ["#088DCD", "#8DBF42", "#EB6A72", "#E2A03F"],
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      itemMargin: {
        horizontal: 8,
        vertical: 4,
      },
    },
    tooltip: {
      y: {
        formatter: (val) => val,
      },
    },
  };

  const series = [985, 737, 270, 220];

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/dashboard_data`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setCountData(response.data.data);
      const postsData = response.data.data.formattedPosts.map(
        (item) => item.postCount
      );
      const reelsData = response.data.data.formattedPosts.map(
        (item) => item.realsCount
      );
      setChartData({
        series: [
          { name: "Post", data: postsData },
          { name: "Reels", data: reelsData },
        ],
      });
    } catch (error) {
      console.error("Error fetching user list:", error);
      if (error.response.data.message == "Token has expired") {
        localStorage.removeItem("authToken");
        navigate("/login")
      }
    }
  };

  const chartOptions6 = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "80%",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      position: "bottom",
    },
    colors: ["#A8D860", "#FF5733"],
  };

  const chartSeries6 = [
    {
      name: "Post",
      data: [98, 120, 150, 200, 98, 110, 130, 140, 160, 200, 220, 120],
    },
    {
      name: "Reels",
      data: [60, 80, 90, 140, 115, 130, 120, 130, 100, 220, 120, 180],
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel-content">
              <h4 className="main-title mt-3">Welcome To Yara Live</h4>
              {/* first three graph */}
              <div className="row merged20 mb-4">
                {/* Total Visits Card */}

                <div className="col-lg-4 col-md-6">
                  <Link to={"/user"}>
                    <div className="w-chart-section">
                      <div className="w-detail">
                        <p className="w-title">Total Users</p>
                        <p className="w-stats">{countData.totalusers}</p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-users"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx={9} cy={7} r={4} />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Total Orders Card */}
                <div className="col-lg-4 col-md-6">
                  <Link to={"/page"}>
                    <div className="w-chart-section">
                      <div className="w-detail">
                        <p className="w-title">Total Page</p>
                        <p className="w-stats">{countData.totalpages}</p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-briefcase"
                          >
                            <rect
                              x={2}
                              y={7}
                              width={20}
                              height={14}
                              rx={2}
                              ry={2}
                            />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* Total Downloads Card */}
                <div className="col-lg-4 col-md-12">
                  <Link to={"/community"}>
                    <div className="w-chart-section">
                      <div className="w-detail">
                        <p className="w-title">Total Community</p>
                        <p className="w-stats">{countData.totalcommunities}</p>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-users" // Updated icon
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle r={4} cy={7} cx={9} />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-12 mt-3">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Reels</p>
                      <p className="w-stats">{countData.totalreals}</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-camera" // Camera icon for Reels
                        >
                          <path d="M23 7a2 2 0 0 0-2-2h-4.5l-1-2H8.5l-1 2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7z" />
                          <circle cx={12} cy={13} r={4} />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mt-3">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Post</p>
                      <p className="w-stats">{countData.totalposts}</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-file" // File icon for Posts
                        >
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                          <polyline points="13 2 13 9 20 9" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 mt-3">
                  <div className="w-chart-section">
                    <div className="w-detail">
                      <p className="w-title">Total Revenue</p>
                      <p className="w-stats">₹{countData.totalrevanu}</p>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-dollar-sign"
                        >
                          <path d="M12 1v22M5 8h14M5 16h14" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* revenue */}
              <div className="row merged20 mb-4">
                {/* Revenue Card */}
                {/* <div className="col-lg-8 col-md-6 col-sm-12">
                  <div className="d-widget">
                    <div className="d-widget-title">
                      <h5>Revenue</h5>
                      <select className="browser-default custom-select">
                        <option value={3}>Last Day</option>
                        <option value={2}>Week</option>
                        <option selected>Monthly</option>
                        <option value={1}>Yearly</option>
                      </select>
                    </div>
                    <div className="d-widget-content">
                      <div className="tabs tab-content">
                        <div className="w-text d-flex justify-content-between">
                          <div>
                            <p className="w-stats">$39,945</p>
                            <p className="w-title">Total Profit</p>
                          </div>
                        </div>
                        <div id="content_1" className="tabcontent">
                          <ReactApexChart
                            options={revenueData.options}
                            series={revenueData.series}
                            type="line"
                            height={250}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Revenue Statistics Card */}
                {/* <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="d-widget blue-bg pd-0">
                    <div className="d-widget-content">
                      <div className="w-numeric-value">
                        <div className="w-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-shopping-cart"
                          >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                        </div>
                        <div className="d-content">
                          <span className="w-numeric-title">This Month Orders</span>
                          <span className="w-value">3,192</span>
                        </div>
                      </div>
                      <div className="w-chart" style={{ position: "relative" }}>
                        <ReactApexChart
                          options={chartOptions}
                          series={chartSeries}
                          type="area"
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* Four Row Charts */}
              {/* <div className="row merged20 mb-4">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="d-widget">
                    <div className="d-widget-title">
                      <h5>Revenue</h5>
                    </div>
                    <div className="d-widget-content">
                      <div className="w-content">
                        <p>Daily sales Go to columns for details.</p>
                      </div>
                      <div className="d-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-dollar-sign"
                        >
                          <line x1="12" y1="1" x2="12" y2="23"></line>
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                        <span>201</span>
                      </div>
                      <div className="w-chart" style={{ position: "relative" }}>
                        <ReactApexChart
                          options={chartOptions1}
                          series={chartSeries1}
                          type="bar"
                          height="175"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="d-widget pd-0 soft-blue">
                    <div className="d-widget-meta">
                      <div className="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-users"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                      </div>
                      <h5 className="">Followers</h5>
                      <p className="w-value">31.6K</p>
                    </div>
                    <div className="d-widget-content">
                      <div className="w-chart" style={{ position: "relative" }}>
                        <ReactApexChart
                          options={chartOptions2}
                          series={chartSeries2}
                          type="area"
                          height={160}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="d-widget pd-0 soft-red">
                    <div className="d-widget-meta">
                      <div className="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-link"
                        >
                          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                        </svg>
                      </div>
                      <h5 className="">Referral</h5>
                      <p className="w-value">1,900</p>
                    </div>
                    <div className="d-widget-content">
                      <div className="w-chart" style={{ position: "relative" }}>
                        <ReactApexChart
                          options={chartOptions3}
                          series={chartSeries3}
                          type="area"
                          height={160}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="d-widget pd-0 soft-green">
                    <div className="d-widget-meta">
                      <div className="w-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-message-circle"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                      </div>
                      <h5 className="">Engagement</h5>
                      <p className="w-value">18.2%</p>
                    </div>
                    <div className="d-widget-content">
                      <div className="w-chart" style={{ position: 'relative' }}>
                        <ReactApexChart
                          options={chartOptions4}
                          series={chartSeries4}
                          type="area"
                          height={160}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="row merged20">
                {/* <div className="col-lg-3 col-md-6">
                  <div className="d-widget" style={{ position: 'relative' }}>
                    <div className="d-widget-title">
                      <h5>Monthly Product Sales</h5>
                    </div>
                    <div id="chart-2" style={{ minHeight: '360px' }}>
                      <ReactApexChart options={options} series={series} type="donut" height={360} />
                    </div>
                  </div>
                </div> */}

                <div className="col-lg-12 col-md-6">
                  <div
                    className="d-widget"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="d-widget-title">
                      <h5>Monthly Post</h5>
                    </div>
                    <div id="uniqueVisits" style={{ minHeight: 365 }}>
                      <ReactApexChart
                        options={chartOptions6}
                        series={chartData.series}
                        type="bar"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics1;
