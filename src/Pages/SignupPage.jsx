import React from 'react';

const SignupPage = () => {
  return (
    <div className="relative h-screen bg-[#0C0C0C] flex items-center justify-center">
      <div className="absolute w-[548px] h-[730px] border rounded-lg border-solid border-[#1E1E1E] bg-opacity-40 backdrop-blur-lg p-8">
        {/* Heading */}
        <div className="text-center my-11">
          <h1 className="text-2xl font-bold text-white">Sign up</h1>
          <p className="text-gray-400 mt-2">
            Enlist now and access premium hosting solutions tailored for gaming, websites, and enterprise giants.
          </p>
        </div>

        {/* Input Fields */}
        <div className="space-y-4 px-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-[#1E1E1E] text-gray-200 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Signup Button */}
        <div className="px-8 mt-8">
          <button className="w-full py-3 rounded-lg bg-[#00FF00] text-black font-bold hover:bg-[#00CC00] transition">
            Sign up
          </button>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-center justify-center mt-4 text-gray-400 text-sm">
          <input type="checkbox" className="mr-2 bg-[#1E1E1E] rounded" />
          <p>
            I agree to the{' '}
            <a href="#" className="text-[#00FF00] hover:underline">
              Terms of Service
            </a>{' '}
            and the{' '}
            <a href="#" className="text-[#00FF00] hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6 px-8">
          <hr className="flex-grow border-t border-gray-600" />
          <span className="px-4 text-gray-400">Or</span>
          <hr className="flex-grow border-t border-gray-600" />
        </div>

        {/* OAuth Signup Options */}
        <div className="space-y-4 px-8">
        <a
            href="http://localhost:8080/auth"
            className="flex items-center justify-center py-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-gray-700 transition"
          >
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4455 7.11269H14.875V7.08329H8.49996V9.91662H12.5031C11.9191 11.566 10.3498 12.75 8.49996 12.75C6.1529 12.75 4.24996 10.847 4.24996 8.49996C4.24996 6.1529 6.1529 4.24996 8.49996 4.24996C9.58335 4.24996 10.569 4.65867 11.3195 5.32627L13.323 3.32275C12.0579 2.14373 10.3657 1.41663 8.49996 1.41663C4.58819 1.41663 1.41663 4.58819 1.41663 8.49996C1.41663 12.4117 4.58819 15.5833 8.49996 15.5833C12.4117 15.5833 15.5833 12.4117 15.5833 8.49996C15.5833 8.02502 15.5344 7.56142 15.4455 7.11269Z" fill="#FFC107" />
              <path d="M2.2334 5.20302L4.56063 6.90975C5.19034 5.35071 6.71538 4.24996 8.50002 4.24996C9.58342 4.24996 10.5691 4.65867 11.3195 5.32627L13.3231 3.32275C12.058 2.14373 10.3658 1.41663 8.50002 1.41663C5.77931 1.41663 3.41986 2.95265 2.2334 5.20302Z" fill="#FF3D00" />
              <path d="M8.50003 15.5833C10.3297 15.5833 11.9921 14.8831 13.2491 13.7445L11.0568 11.8894C10.3456 12.4281 9.46159 12.75 8.50003 12.75C6.65765 12.75 5.0933 11.5752 4.50397 9.93579L2.19409 11.7155C3.36638 14.0094 5.74709 15.5833 8.50003 15.5833Z" fill="#4CAF50" />
              <path d="M15.4456 7.11277H14.875V7.08337H8.5V9.91671H12.5031C12.2226 10.709 11.713 11.3922 11.0557 11.8898L11.0567 11.8891L13.249 13.7442C13.0939 13.8851 15.5833 12.0417 15.5833 8.50004C15.5833 8.0251 15.5345 7.5615 15.4456 7.11277Z" fill="#1976D2" />
            </svg>
            <span /> Login with Google
          </a>
        </div>

        {/* Sign in Link */}
        <div className="text-center mt-8 text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-[#00FF00] hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
