import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from "@mui/material";

const Profile1 = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const token = localStorage.getItem("authToken");
  const { userId } = useParams();
  const [userDetail, setUserDetail] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [userVideos, setUserVideos] = useState([]);
  const [userFollwers, setUserFollwers] = useState([]);
  const [userFollwing, setUserFollwing] = useState([]);
  const [userCommunity, setUserCommunity] = useState([]);
  const [userPage, setUserPage] = useState([]);
  const [userTransaction, setUserTransaction] = useState([]);
  const [activeTab, setActiveTab] = useState("photos");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");

  const fetchUserDetails = async () => {
    try {
      const userResponse = await axios.post(
        `${base_url}/userDetails`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (userResponse.status === 200) {
        setUserDetail(userResponse.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async () => {
    try {
      // Fetching user posts
      const postsResponse = await axios.post(
        `${base_url}/userPost_list`,
        { userId, status: "A" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (postsResponse.status === 200) {
        setUserPosts(postsResponse.data.data);
      } else {
        setUserPosts([]);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setUserPosts([]);
    }

    try {
      // Fetching user videos
      const videoResponse = await axios.post(
        `${base_url}/userPost_list`,
        { userId, status: "B" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (videoResponse.status === 200) {
        setUserVideos(videoResponse.data.data);
      } else {
        setUserVideos([]);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
      setUserVideos([]);
    }

    try {
      // Fetching followers
      const followerResponse = await axios.post(
        `${base_url}/userFollower_andFollowing`,
        { userId, status: "A" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (followerResponse.status === 200) {
        setUserFollwers(followerResponse.data.data);
      } else {
        setUserFollwers([]);
      }
    } catch (error) {
      console.error("Error fetching followers:", error);
      setUserFollwers([]);
    }

    try {
      // Fetching following
      const followingResponse = await axios.post(
        `${base_url}/userFollower_andFollowing`,
        { userId, status: "B" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (followingResponse.status === 200) {
        setUserFollwing(followingResponse.data.data);
      } else {
        setUserFollwing([]);
      }
    } catch (error) {
      console.error("Error fetching following:", error);
      setUserFollwing([]);
    }

    try {
      // Fetching community
      const communityResponse = await axios.post(
        `${base_url}/userCommunityList`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (communityResponse.status === 200) {
        setUserCommunity(communityResponse.data.data);
      } else {
        setUserCommunity([]);
      }
    } catch (error) {
      console.error("Error fetching community:", error);
      setUserCommunity([]);
    }

    try {
      // Fetching community
      const pageResponse = await axios.post(
        `${base_url}/userPageList`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (pageResponse.status === 200) {
        setUserPage(pageResponse.data.data);
      } else {
        setUserPage([]);
      }
    } catch (error) {
      console.error("Error fetching community:", error);
      setUserPage([]);
    }

    try {
      // Transaction community
      const transactionResponse = await axios.post(
        `${base_url}/userTransactionList`,
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (transactionResponse.status === 200) {
        setUserTransaction(transactionResponse.data.data);
      } else {
        setUserTransaction([]);
      }
    } catch (error) {
      console.error("Error fetching Transaction:", error);
      setUserTransaction([]);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchData();
  }, [userId]);

  // Demo data for each tab
  const tabContent = {
    photos: userPosts,
    videos: userVideos,
    followers: userFollwers,
    following: userFollwing,
    community: userCommunity,
    page: userPage,
    transaction: userTransaction,
  };

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
            <h4 className="main-title">User Profile</h4>
            <div className="row merged20 mb-4">
              <div className="col-lg-4">
                <div className="d-widget text-center">
                  <div className="user-avatar-edit">
                    <figure>
                      <img
                        src="https://png.pngtree.com/thumb_back/fh260/background/20210619/pngtree-colorful-watercolor-splash-company-profile-image_730901.jpg"
                        alt="User"
                      />
                    </figure>
                  </div>
                  <div className="user-dp-edit">
                    <figure>
                      {userDetail ? (
                        userDetail[0]?.profileImage ? (
                          <img
                            src={`http://157.66.191.24:3054/uploads/${userDetail[0].profileImage}`}
                            alt="User"
                          />
                        ) : (
                          <img
                            src="https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png"
                            alt="Default"
                          />
                        )
                      ) : (
                        <p>Loading...</p>
                      )}
                    </figure>
                    <div className="users-name">
                      <h5>
                        {userDetail ? userDetail[0]?.userName : "Loading..."}
                      </h5>
                      <span>
                        {userDetail ? userDetail[0]?.description : "Loading..."}
                      </span>
                    </div>
                  </div>
                  <ul className="folowerss">
                    <li>
                      <span>Posts</span>{" "}
                      <i>{userDetail ? userDetail[0]?.posts : 0}</i>
                    </li>
                    <li>
                      <span>Followers</span>{" "}
                      <i>{userDetail ? userDetail[0]?.followers : 0}</i>
                    </li>
                    <li>
                      <span>Following</span>{" "}
                      <i>{userDetail ? userDetail[0]?.followings : 0}</i>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-8">
                {/* Tab Navigation */}
                <nav className="responsive-tab style1">
                  <ul
                    className="uk-grid"
                    uk-switcher="connect: #picturez; animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
                    uk-sticky="offset:50;media : @m"
                    style={{ height: "120px" }}
                  >
                    <li>
                      <a
                        className={activeTab === "photos" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("photos")}
                      >
                        Photos
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "videos" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("videos")}
                      >
                        Videos
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "followers" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("followers")}
                      >
                        Followers
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "following" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("following")}
                      >
                        Following
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "community" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("community")}
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "page" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("page")}
                      >
                        Page
                      </a>
                    </li>
                    <li>
                      <a
                        className={activeTab === "transaction" ? "active" : ""}
                        style={{ padding: "10px" }}
                        onClick={() => setActiveTab("transaction")}
                      >
                        Transaction
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* Tab Content */}
                <div className="tab-content" id="picturez">
                  <div className="tab-pane active" id="tab-1">
                    <h5>
                      {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </h5>
                    <div className="photo-gallery">
                      {/* For Photos */}
                      {activeTab === "photos" ? (
                        tabContent.photos && tabContent.photos.length > 0 ? (
                          tabContent.photos.map((post, index) => (
                            <li key={index} className="photo-item">
                              <div className="photo-container">
                                <div className="photo-info">
                                  <p className="photo-description">
                                    {post.description}
                                  </p>
                                  <div className="photo-stats">
                                    <div className="photo-stat">
                                      <i className="fas fa-thumbs-up"></i>{" "}
                                      <span>{post.likeCount}</span>
                                    </div>
                                    <div className="photo-stat">
                                      <i className="fas fa-comment"></i>{" "}
                                      <span>{post.commentCount}</span>
                                    </div>
                                    <div className="photo-stat">
                                      <i className="fas fa-eye"></i>{" "}
                                      <span>{post.viewCount}</span>
                                    </div>
                                  </div>
                                </div>
                                <img
                                  src={`http://157.66.191.24:3054/uploads/${post.uploadPost[0]}`}
                                  alt={`Post ${index + 1}`}
                                  className="photo-image"
                                />
                              </div>
                            </li>
                          ))
                        ) : (
                          <p>No photos available</p>
                        )
                      ) : null}

                      {/* For Videos */}
                      {activeTab === "videos" ? (
                        tabContent.videos && tabContent.videos.length > 0 ? (
                          tabContent.videos.map((post, index) => (
                            <li key={index} className="photo-item">
                              <div className="photo-container">
                                {/* Embed the video */}
                                <video
                                  width="100%"
                                  controls
                                  className="video-item"
                                  poster={`http://157.66.191.24:3054/uploads/${post.uploadPost[0]}`} // Optional: Add a poster image (thumbnail)
                                >
                                  <source
                                    src={`http://157.66.191.24:3054/uploads/${post.uploadPost[0]}`}
                                    type="video/mp4"
                                  />
                                  Your browser does not support the video tag.
                                </video>
                                <div className="video-info">
                                  <div className="photo-stats">
                                    <div className="photo-stat">
                                      <i className="fas fa-thumbs-up"></i>{" "}
                                      <span>{post.likeCount}</span>
                                    </div>
                                    <div className="photo-stat">
                                      <i className="fas fa-comment"></i>{" "}
                                      <span>{post.commentCount}</span>
                                    </div>
                                    <div className="photo-stat">
                                      <i className="fas fa-eye"></i>{" "}
                                      <span>{post.viewCount}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))
                        ) : (
                          <p>No videos available</p>
                        )
                      ) : null}

                      {/* For Followers */}
                      {activeTab === "followers" ? (
                        <div className="followers-table">
                          {tabContent.followers &&
                          tabContent.followers.length > 0 ? (
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th>SR No.</th>
                                  <th>Profile Image</th>
                                  <th>User Name</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabContent.followers.map((follower, index) => (
                                  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                      <img
                                        src={`http://157.66.191.24:3054/uploads/${follower.requestId.profileImage}`}
                                        alt={follower.requestId.userName}
                                        className="follower-avatar-img"
                                        width="40"
                                      />
                                    </td>
                                    <td>{follower.requestId.userName}</td>
                                    <td>{follower.requestId.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No followers available</p>
                          )}
                        </div>
                      ) : null}

                      {/* For Following */}
                      {activeTab === "following" ? (
                        <div className="followers-table">
                          {tabContent.following &&
                          tabContent.following.length > 0 ? (
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                <th>SR No.</th>
                                  <th>Profile Image</th>
                                  <th>User Name</th>
                                  <th>Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {tabContent.following.map((follower, index) => (
                                  <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                    
                                      <img
                                        src={`http://157.66.191.24:3054/uploads/${follower.userId.profileImage}`}
                                        alt={follower.userId.userName}
                                        className="follower-avatar-img"
                                        width="40"
                                      />
                                    </td>
                                    <td>{follower.userId.userName}</td>
                                    <td>{follower.userId.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          ) : (
                            <p>No followers available</p>
                          )}
                        </div>
                      ) : null}

                      {/* For community */}
                      {activeTab === "community" ? (
                        <div className="followers-table">
                          {tabContent.community &&
                          tabContent.community.length > 0 ? (
                            <div className="scrollable-table">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                  <th>SR No.</th>
                                    <th>Community Image</th>
                                    <th>Community Name</th>
                                    <th>Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tabContent.community.map(
                                    (community, index) => (
                                      <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>
                                          <img
                                            src={`http://157.66.191.24:3054/uploads/${community.coverImage}`}
                                            alt={community.communityName}
                                            className="follower-avatar-img"
                                            width="40"
                                          />
                                        </td>
                                        <td>{community.communityName}</td>
                                        <td>
                                          <Typography
                                            variant="body2"
                                            color="textSecondary"
                                          >
                                            {truncateDescription(
                                              community.description
                                            )}
                                          </Typography>
                                          {community.description.length >
                                            20 && (
                                            <Button
                                              size="small"
                                              color="primary"
                                              onClick={() =>
                                                handleClickOpenDialog(
                                                  community.description
                                                )
                                              }
                                            >
                                              Read More
                                            </Button>
                                          )}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p>No communities available</p>
                          )}
                        </div>
                      ) : null}

                      {/* For page */}
                      {activeTab === "page" ? (
                        <div className="followers-table">
                          {tabContent.page && tabContent.page.length > 0 ? (
                            <div className="scrollable-table">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                  <th>SR No.</th>
                                    <th>Page Image</th>
                                    <th>Page Name</th>
                                    <th>Description</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tabContent.page.map((page, index) => (
                                    <tr key={index}>
                                      <td>{index+1}</td>
                                      <td>
                                        <img
                                          src={`http://157.66.191.24:3054/uploads/${page.coverImage}`}
                                          alt={
                                            page.pageName ? page.pageName : null
                                          }
                                          className="follower-avatar-img"
                                          width="40"
                                        />
                                      </td>
                                      <td>
                                        {page.pageName ? page.pageName : null}
                                      </td>
                                      <td>
                                        <Typography
                                          variant="body2"
                                          color="textSecondary"
                                        >
                                          {truncateDescription(
                                            page.description
                                          )}
                                        </Typography>
                                        {page.description.length > 20 && (
                                          <Button
                                            size="small"
                                            color="primary"
                                            onClick={() =>
                                              handleClickOpenDialog(
                                                page.description
                                              )
                                            }
                                          >
                                            Read More
                                          </Button>
                                        )}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p>No page available</p>
                          )}
                        </div>
                      ) : null}

                      {/* For transaction */}
                      {activeTab === "transaction" ? (
                        <div className="followers-table">
                          {tabContent.transaction &&
                          tabContent.transaction.length > 0 ? (
                            <div className="scrollable-table">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                  <th>SR No.</th>
                                    <th>Transaction Amount</th>
                                    <th>Transaction Type</th>
                                    <th>Transaction Id</th>
                                    <th>Payment Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tabContent.transaction.map(
                                    (transaction, index) => (
                                      <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>₹{transaction.amount}</td>
                                        <td>{transaction.type}</td>
                                        <td>{transaction.transactionId}</td>
                                        <td>
                                          {transaction.status ? (
                                            <label
                                              style={{ cursor: "pointer" }}
                                              className="badge badge-success"
                                            >
                                              Success
                                            </label>
                                          ) : (
                                            <label
                                              style={{ cursor: "pointer" }}
                                              className="badge badge-danger"
                                            >
                                              Failed
                                            </label>
                                          )}
                                        </td>
                                      </tr>
                                    )
                                  )}
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <p>No Transaction available</p>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
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

export default Profile1;
