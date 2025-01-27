import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from '@mui/material';




const AboutUs = () => {
    const [editorContent, setEditorContent] = useState('');
    const [title, setTitle] = useState('');
    let navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const base_url = process.env.REACT_APP_BASE_URL;
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');


    const fetchData = async () => {
        try {
            const response = await axios.get(`${base_url}/aboutUsList`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            if (response.data.result && response.data.data.length > 0) {
                const policy = response.data.data[0];
                setTitle(policy.title);
                setEditorContent(policy.text);
                
            }
        } catch (error) {
            console.error("Error fetching privacy policy:", error);
            
            if (error.response.data.message == "Token has expired") {
                localStorage.removeItem("authToken");
                navigate("/login")
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleEditorChange = (value) => {
        setEditorContent(value);
    };

    

    const handleUpdate = async () => {
        try {
            const response = await axios.post(`${base_url}/aboutUs_addAndUpdate`, {
                title: editorContent,
                text: editorContent,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            console.log(response);
            
            if (response.status === 200) {
                fetchData();
                setSnackbarSeverity('success');
                setSnackbarMessage('AboutUs Update successful!');
                setOpenSnackbar(true);
            }
        } catch (error) {
            console.error("Error update about us:", error);
            setSnackbarSeverity('error');
            setSnackbarMessage('About update failed, please try again.');
            setOpenSnackbar(true);
        }
    };
    const handleCloseSnackbar = async () => {
        setOpenSnackbar(false);
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel-content">
                            <h3 className='mb-3'>AboutUs</h3>

                            <ReactQuill
                                value={editorContent}
                                onChange={handleEditorChange}
                                theme="snow"
                            />


                            <button
                                onClick={handleUpdate}
                                className="btn btn-primary mt-3"
                            >
                                Update
                            </button>
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
        </>
    )
}

export default AboutUs