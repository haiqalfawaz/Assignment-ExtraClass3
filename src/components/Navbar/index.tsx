import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4">
      <div>
        <h1 className="text-white text-2xl font-bold">Get Menu</h1>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link href="/">
          <p className="hover:underline">Home</p>
        </Link>
        <Link href="/food">
          <p className="hover:underline">Menu</p>
        </Link>
      </div>
      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Navbar;
