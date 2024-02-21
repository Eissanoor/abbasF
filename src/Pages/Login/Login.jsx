import React, { useRef, useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { DotLoader } from "react-spinners";
import Swal from "sweetalert2";
function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState();
    const [isLoading, setLoading] = useState(false);
    // Password toggle handler
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const apicall = () => {
        axios.post("/Login", {
            email: email,
            password: password,
        })
            .then((res) => {
                setLoading(false);

                if (res.status === 200) {
                    navigate("/Table");
                    console.log(res);
                } else {
                    setError("Invalid Username or Password!");
                }
            })
            .catch((err) => {
                setLoading(false);
                // setError("Invalid Username or Password!");
                Swal.fire("Error!", `${err.response.data.message}`, "error");
            });
    };
    function loginbutton(e) {
        e.preventDefault();
        setLoading(true);
        apicall();
    }
    return (
        <>
            <div className="main_div">
                <div className="from_data rounded">
                    {isLoading &&

                        <div className='loading-spinner-background'
                            style={{
                                zIndex: 9999, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed'


                            }}
                        >
                            <DotLoader
                                size={45}
                                color={"#FF693A"}
                                // height={4}
                                loading={isLoading}
                            />
                        </div>
                    }
                    <div>
                        <center>
                            <h6 className="fw-bolder fs-3">Welcome</h6>
                            <p className=" fs-6">Let's get Started</p>
                        </center>
                        <form className="modal-content w-100 " onSubmit={loginbutton}>
                            {/* Email section */}
                            <div className="emailsection position-relative d-grid my-3">
                                <label htmlFor="email" className="lablesection text-start mb-1">
                                    Email
                                </label>
                                {/* <p className="position-absolute text-end emailicon">
                                    <MailOutlined />
                                </p> */}
                                <input
                                    types="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => {
                                        setemail(e.target.value);
                                    }}
                                    className="rounded emailinput py-2"
                                    placeholder="Type your Username"
                                    required
                                ></input>
                            </div>

                            {/* password section */}
                            <div className="emailsection position-relative my-3 d-grid">
                                <label
                                    htmlFor="password"
                                    className="lablesection text-start my-1"
                                >
                                    Password
                                </label>
                                {/* <p className="position-absolute text-end   LockOutlinedicon">
                                    <LockOutlined />
                                </p> */}
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    id="password"
                                    className=" rounded mt-2 ps-4 emailinput py-2"
                                    placeholder="Type your Password"
                                    value={password}
                                    onChange={(e) => setpassword(e.target.value)}
                                    required
                                ></input>
                                <p
                                    className="position-absolute text-end showpassicon mt-5 "
                                    onClick={togglePassword}
                                >
                                    {passwordShown ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </p>
                            </div>

                            {error ? (
                                <lable className="text-danger text-start mb-2">{error}</lable>
                            ) : null}
                            {/* Forgetpassword */}
                            <p
                                className="Forgetpassword text-end cursor pointername"
                                onClick={() => {
                                    navigate("/Forgetpassword");
                                }}
                            >
                                Forget password?
                            </p>
                            {/* Button section */}
                            <div className="emailsection mt-3 d-flex justify-content-center">
                                <button
                                    className="loginbtn border-0 py-2 rounded text-white"
                                    type="submit"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
