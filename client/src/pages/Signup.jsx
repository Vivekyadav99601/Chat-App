import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

   
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    console.log("Register Data:", registerData);

  
    setTimeout(() => {
      setLoading(false);
      setRegisterData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-md border border-base-300">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>

        {/* Register Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="label font-medium text-base-content">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
              value={registerData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="label font-medium text-base-content">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
              value={registerData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label
              htmlFor="password"
              className="label font-medium text-base-content"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              required
              value={registerData.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-control relative">
            <label
              htmlFor="confirmPassword"
              className="label font-medium text-base-content"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Re-enter your password"
              className="input input-bordered w-full pr-10"
              required
              value={registerData.confirmPassword}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-12 text-sm cursor-pointer text-primary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full mt-2 text-primary-content"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">OR</div>

        {/* Google Sign Up */}
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
          <FcGoogle size={20} />
          Sign Up with Google
        </button>

        {/* Login Link */}
        <p className="text-center mt-4 text-base-content">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
