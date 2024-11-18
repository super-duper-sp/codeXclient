import React, { useState, useEffect } from "react";
import { loginUser } from "../Features/Auth/AuthAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true); // State to control error visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  // Redirect to dashboard when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error?.message) {
      setVisible(true); // Show toast whenever a new error occurs
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ user_email: email, password }));
  };

  return (
    <div className="relative h-screen bg-[#0C0C0C] flex items-center justify-center">

      {/* Error Message Toast */}
     {error?.message && visible && (
  <div className="toast toast-top toast-center">
    <div className="alert flex items-center justify-between bg-green-100 text-green-800 border border-green-300 rounded-lg p-3">
      <span>{error?.message}</span>
      <button
        className="btn btn-sm btn-ghost ml-4 text-green-800 hover:text-green-600"
        onClick={() => setVisible(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}


      <div className="absolute w-[548px] h-[687px] border rounded-lg border-solid border-[#1E1E1E] bg-opacity-40 backdrop-blur-lg p-8">
        {/* Heading */}
        <div className="text-center my-11">
          <h1 className="text-2xl font-bold text-white">Sign in</h1>
          <p className="text-gray-400 mt-2">
            Sign in securely to your hosting platform and get started.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 px-8">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <div className="px-8 mt-8">
          <button
            onClick={handleSubmit}
            className={`w-full py-3 rounded-lg ${
              loading ? "bg-gray-600" : "bg-[#00FF00]"
            } text-black font-bold hover:bg-[#00CC00] transition`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-4 text-gray-400">
          <a href="#" className="hover:underline">
            Forgot your password?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6 px-8">
          <hr className="flex-grow border-t border-gray-600" />
          <span className="px-4 text-gray-400">Or</span>
          <hr className="flex-grow border-t border-gray-600" />
        </div>

        {/* OAuth Login Options */}
        <div className="space-y-4 px-8">
          <a
            href="http://localhost:8080/auth"
            className="flex items-center justify-center py-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 transition"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG Path */}
            </svg>
            <span className="ml-2">Login with Google</span>
          </a>
        </div>

        {/* Sign up Link */}
        <div className="text-center mt-8 text-gray-400">
          Don’t have an account yet?{" "}
          <a href="/signup" className="text-[#00FF00] hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
