import { useState } from "react";
import { registerUser } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(user);
            alert("Registration successful!");
            navigate("/login");
        } catch (error) {
            alert("Registration failed!");
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
                                        alt="register form"
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
                                                <span className="h1 fw-bold mb-0 text-center">Sign Up</span>
                                        </div>

                                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                                                Create an account
                                            </h5>

                                            {/* Username Input */}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className="form-control form-control-lg"
                                                    placeholder="Enter your username"
                                                    onChange={handleChange}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="username">Username</label>
                                            </div>

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

                                            {/* Register Button */}
                                            <div className="pt-1 mb-4">
                                                <button type="submit" className="btn btn-dark btn-lg btn-block">
                                                    Register
                                                </button>
                                            </div>

                                            <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                Already have an account? <a href="/login" style={{ color: "#393f81" }}>Login here</a>
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

export default Register;
