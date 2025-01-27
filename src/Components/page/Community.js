import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';


const Community = () => {
  const [communityList, setCommunityList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState('');

  const base_url = process.env.REACT_APP_BASE_URL;
  let navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.log("User is not logged in.");
      return;
    }

    axios
      .get(`${base_url}/communityList`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response) => {
        if (response.data.result) {
          setCommunityList(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching community list:", error);
        if (error.response.data.message === "Token has expired") {
          localStorage.removeItem("authToken");
          navigate("/login")
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const truncateDescription = (description, maxLength = 20) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const handleClickOpenDialog = (description) => {
    setSelectedDescription(description);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="panel-content">
            <h4 className="mt-3 mb-3 text-capitalize d-flex align-items-center gap-2">
              <img width={20} src="assets/businessman.png" alt="" />
              COMMUNITY LIST
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
                        <th>Cover Image</th>
                        <th>Community Name</th>
                        <th>Description</th>
                        <th className="text-center">UserName</th>
                        <th>UserEmail</th>
                      </tr>
                    </thead>
                    {loading ? (
                      <tr>
                        <td colSpan="8" className="text-center">
                          Loading...
                        </td>
                      </tr>
                    ) : (
                      communityList.map((data, index) => (
                        <tbody key={index}>
                          <tr>
                            <td className="text-center">{index + 1}</td>
                            <td>
                              <img
                                style={{ width: "30%" }}
                                src={`http://157.66.191.24:3054/uploads/${data.coverImage}`}
                                alt=""
                              />
                            </td>
                            <td className="text-center">
                              <Link>{data.communityName}</Link>
                            </td>
                            <td className="text-center">
                              <Typography variant="body2" color="textSecondary">
                                {truncateDescription(data.description)}
                              </Typography>
                              {data.description.length > 20 && (
                                <Button
                                  size="small"
                                  color="primary"
                                  onClick={() => handleClickOpenDialog(data.description)}
                                >
                                  Read More
                                </Button>
                              )}
                            </td>
                            <td className="text-center">{data.userId.userName}</td>
                            <td className="text-center">{data.userId.email}</td>
                            {/* <td>
                              <div className="d-flex gap-10 justify-content-center">
                                <span
                                  className="btn btn-outline--primary btn-sm cursor-pointer edit"
                                  title="Edit">
                                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                                </span>
                                <Link
                                  to="/profiles"
                                  title="View"
                                  className="btn btn-outline-info btn-sm square-btn">
                                  <i className="fa fa-eye" aria-hidden="true"></i>
                                </Link>
                              </div>
                            </td> */}
                          </tr>
                        </tbody>
                      ))
                    )}
                  </table>

                  <div className="d-flex justify-content-center mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Community Description</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{selectedDescription}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Community;
