import Link from "next/link";
import React from "react";
import useLogin from "./useLogin";

// import icons
import { IoChevronBack } from "react-icons/io5";

const LoginPage = () => {
  const { handleFormLogin, setformData, formData } = useLogin();

  return (
    <div className="min-h-screen bg-[#6A1E55] flex flex-col items-center justify-center">
      <div className="bg-[#1A1A1D] p-8 rounded-lg shadow-lg w-full max-w-sm space-y-5">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Login
        </h1>
        <p className="text-white text-lg text-center mb-6">
          Login to Your Account
        </p>
        <div className="flex flex-col items-start justify-center w-full gap-3">
          <h3 className="text-sm text-white md:text-xl">Email</h3>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-2 text-center h-9 rounded-xl"
            name="email"
            onChange={(e) =>
              setformData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-3">
          <h3 className="text-sm text-white md:text-xl">Password</h3>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-2 text-center h-9 rounded-xl"
            name="password"
            onChange={(e) =>
              setformData({ ...formData, password: e.target.value })
            }
          />
          <p className="ml-auto text-sm text-white hover:text-blue-500 hover:cursor-pointer hover:underline">
            Forgot Your Password?
          </p>
        </div>
        <Link href="/food">
          <button
            className=" text-white border border-black rounded-xl px-2 bg-[#A64D79] hover:scale-105 transition-all duration-300 w-full  h-9 shadow-lg mt-4"
            onClick={handleFormLogin}
          >
            Login
          </button>
        </Link>
      </div>
      <Link href="/">
        <button className=" text-white border border-black rounded-xl px-2 bg-[#A64D79] hover:scale-105 transition-all duration-300 w-full  h-9 shadow-lg mt-4">
          <IoChevronBack />
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
