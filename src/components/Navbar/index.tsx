import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";

const Navbar = () => {
  const router = useRouter();

  const token = getCookie("token");

  const handleLogout = () => {
    deleteCookie("token");
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center p-4 w-full border-2 border-white rounded-lg mb-8">
      <div>
        <h1 className="text-white text-4xl font-bold">Eats & Treats</h1>
      </div>
      <div className="flex justify-center items-center gap-5 text-white text-2xl">
        <Link href="/">
          <p className="hover:bg-[#A64D79] p-3 transition-all duration-300 rounded-xl">
            Home
          </p>
        </Link>
        <Link href="#about-us">
          <p className="hover:bg-[#A64D79] p-3 transition-all duration-300 rounded-xl">
            About
          </p>
        </Link>
      </div>
      {token ? (
        <button
          className="text-white bg-[#A64D79] p-3 rounded-xl hover:scale-110 transition-all duration-300"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className="text-white bg-[#A64D79] p-3 rounded-xl hover:scale-110 transition-all duration-300">
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
