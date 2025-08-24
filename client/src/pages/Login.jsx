import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Login = () => {

  const [loginData, setLoginData] = useState({
  email: "",
  password: "",
});
const handleChange = (e) => {
  const { name, value } = e.target;
  setLoginData((previousData) => ({
    ...previousData,
    [name]: value,
  }));
};
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Form Submitted:", loginData);
  setLoginData({
    email: "",
    password: "",
  });
};

 
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="w-full max-w-md bg-base-100 p-8 rounded-2xl shadow-md border border-base-300">
       
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Login to JobFinder
        </h2>

       
        <form className="flex flex-col gap-4"onSubmit={handleSubmit}>
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
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label font-medium text-base-content">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
              value={loginData.password}
              onChange={handleChange}
            />
          </div>

          <button
          type="submit"
          className="btn btn-primary w-full mt-2 text-primary-content">
            Login
          </button>
        </form>

       
        <div className="divider my-4">OR</div>

        {/* Google Login */}
        <button className="btn btn-outline w-full flex items-center justify-center gap-2">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-base-content">
          Don’t have an account?{" "}
          <Link
            to="/signUp"
            className="text-primary font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
