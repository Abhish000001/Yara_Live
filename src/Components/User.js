import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Snackbar, Alert } from '@mui/material';


const User = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  let navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');


  // let banneredit = () => {
  //   navigate(`/Updatedeliveryman`);
  // };

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('authToken');

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/userList`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      if (response.data.result) {
        setUserList(response.data.data);
        setLoading(false);

      }
    } catch (error) {
      console.error("Error fetching user list:", error);
      if (error.response.data.message == "Token has expired") {
        localStorage.removeItem("authToken");
        navigate("/login")
      }
    }
  }

  const handleStatusChange = async (userId) => {
    try {
      const response = await axios.post(
        `${base_url}/userBlockUnblock`,
        {
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (response.status === 200) {
        fetchData();
        setSnackbarSeverity('success');
        setSnackbarMessage('User Status Update successful!');
        setOpenSnackbar(true);
      }
    } catch (error) {
      console.error('Error updating user status:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage('User Status update failed, please try again.');
      setOpenSnackbar(true);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleCloseSnackbar = async () => {
    setOpenSnackbar(false);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="mt-3 mb-3 text-capitalize d-flex align-items-center gap-2">
              <img width={20} src="assets/businessman.png" alt="" />
              REGISTERED USER LIST
            </h4>
            <div className="col-md-12">
              <div className="card">
                <div className="table-responsive">
                  <table
                    id="columnSearchDatatable"
                    style={{ textAlign: "left" }}
                    className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table w-100">
                    <thead className="thead-light thead-50 text-capitalize">
                      <tr>
                        <th className="pl-xl-5">SR NO.</th>
                        <th>USER PROFILE</th>
                        <th>USER NAME</th>
                        <th>MOBILE NUMBER</th>
                        <th className="text-center">EMAIL-ID</th>
                        <th>STATUS</th>
                        <th>ACTIVATE&DEACTIVATE</th>
                        <th className="text-center">ACTION</th>
                        {/* <th className="text-center">CONTROLS</th> */}
                      </tr>
                    </thead>
                    {loading ? (
                      <tr>
                        <td colSpan="8" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      userList.map((data, index) => (

                        <tbody>
                          <tr>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <img
                                style={{ width: "50%" }}
                                src={`http://157.66.191.24:3054/uploads/${data.profileImage}`}
                                alt=""
                              />
                            </td>
                            <td className="text-center">
                              <Link>{data.userName}</Link>
                            </td>
                            <td className="text-center">{data.mobileNumber}</td>
                            <td className="text-center">{data.email}</td>

                            <td className="text-center">
                              {data.userStatus === 0 ? (
                                <label className="badge badge-danger">ACTIVE</label>
                              ) : (
                                <label className="badge badge-success">DEACTIVATE</label>
                              )}
                            </td>

                            <td className="text-center" onClick={() => handleStatusChange(data._id)}>
                              {data.activeStatus === 0 ? (
                                <label style={{ cursor: "pointer" }} className="badge badge-warning"> BLOCKED</label>
                              ) : (
                                <label style={{ cursor: "pointer" }} className="badge badge-success"> UNBLOCKED</label>
                              )}
                            </td>
                            <td>
                              <div className="d-flex gap-10 justify-content-center">
                                {/* <span
                                  className="btn btn-outline--primary btn-sm cursor-pointer edit"
                                  title="Edit">
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                  />
                                </span> */}
                                {/* <a
                              className="btn btn-outline-danger btn-sm cursor-pointer delete"
                              title="Delete">
                              <i className="fa fa-trash-o" aria-hidden="true" />
                            </a> */}
                                <Link
                                  to={`/profiles/${data._id}`}
                                  title="View"
                                  className="btn btn-outline-info btn-sm square-btn">
                                  <i class="fa fa-eye" aria-hidden="true"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      ))
                    )}
                  </table>

                  {/* <div class="text-center p-4">
                    <img
                      class="mb-3 w-160"
                      src="./logo/default.png"
                      alt="Image Description"
                    />
                    <p class="mb-0 order-stats__subtitle">No data found</p>
                  </div> */}

                  <div className="d-flex justify-content-center mt-4">
                    {/* {userlist.length > itemsPerPage && (
                      <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={userlist.length}
                        pageRangeDisplayed={5}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                      />
                    )} */}
                  </div>
                </div>
              </div>
            </div>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>

    </div>
  );
};

export default User;
