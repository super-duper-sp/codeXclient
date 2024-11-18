import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../Features/Auth/AuthAction";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [visible, setVisible] = useState(false);

  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.message) {
      setVisible(true); // Show toast whenever a new error occurs
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard"); // Redirect to the dashboard when authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    try {
      setPasswordError("");
      const credentials = {
        user_name: username,
        user_email: email,
        password: password,
        roles: ["User"],
      };
      await dispatch(signupUser(credentials));
    } catch (err) {
      console.error(err);
      alert("Failed to register user");
    }
  };

  return (
    <div className="relative h-screen bg-[#0C0C0C] flex items-center justify-center">
      <div className="absolute w-[548px] h-[730px] border rounded-lg border-solid border-[#1E1E1E] bg-opacity-40 backdrop-blur-lg p-8">
        <div className="text-center my-11">
          <h1 className="text-2xl font-bold text-white">Sign up</h1>
          <p className="text-gray-400 mt-2">
            Enlist now and access premium hosting solutions tailored for gaming, websites, and enterprise giants.
          </p>
        </div>

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


        {/* Form Fields */}
        <div className="space-y-4 px-8">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        {/* Submit Button */}
        <div className="px-8 mt-8">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`w-full py-3 rounded-lg ${
              loading ? "bg-gray-600" : "bg-[#00FF00]"
            } text-black font-bold hover:bg-[#00CC00] transition`}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
