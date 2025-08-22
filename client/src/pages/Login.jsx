import React from "react";

const Login = ()=>{
    return ( 
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)" }}>
            <div className="card shadow-lg p-4 border-0" style={{ maxWidth: "400px", width: "100%", borderRadius: "24px", background: "rgba(255,255,255,0.95)" }}>
                <h2 className="text-center mb-4 text-primary fw-bold" style={{ letterSpacing: "1px" }}>Welcome Back</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-primary fw-semibold">Email address</label>
                        <input type="email" className="form-control border-2 border-primary rounded-pill px-3 py-2" id="email" placeholder="Enter email" autoComplete="username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label text-primary fw-semibold">Password</label>
                        <input type="password" className="form-control border-2 border-primary rounded-pill px-3 py-2" id="password" placeholder="Password" autoComplete="current-password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 fw-bold mt-3 rounded-pill py-2" style={{ fontSize: "1.1rem", boxShadow: "0 4px 12px rgba(0,123,255,0.15)" }}>
                        Login
                    </button>
                    <div className="mt-3 text-center">
                        <a href="#" className="text-primary text-decoration-none fw-semibold">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;