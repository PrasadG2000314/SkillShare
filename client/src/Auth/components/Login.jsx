import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/AuthServices";

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(credentials);
            localStorage.setItem("token", response.data.token);
            alert("Login successful!");
            navigate("/dashboard");
        } catch (error) {
            alert("Invalid credentials!");
        }
    };

    return (
        <section className="vh-105" style={{ backgroundColor: "#9A616D" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                {/* Left Image */}
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>

                                {/* Right Form Section */}
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form onSubmit={handleSubmit}>
                                        <div className="d-flex align-items-center mb-3 pb-1 justify-content-center">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                 <span className="h1 fw-bold mb-0 text-center">Login</span>
                                        </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                                                Sign into your account
                                            </h5>

                                            {/* Email Input */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your email"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="email">Email address</label>
                                            </div>

                                            {/* Password Input */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your password"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="password">Password</label>
                                            </div>

                                            {/* Login Button */}
                                            <div className="pt-1 mb-4">
                                                <button type="submit" className="btn btn-dark btn-lg btn-block">
                                                    Login
                                                </button>
                                            </div>

                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                Don't have an account? <a href="#!" style={{ color: "#393f81" }}>Register here</a>
                                            </p>
                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                            <a href="#!" className="small text-muted">Privacy policy</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
