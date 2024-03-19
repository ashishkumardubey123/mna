import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 bg-blue-500">
      <h1 className="text-2xl text-white">Navbar</h1>
      <div className="flex items-center justify-center">
        <Link href={"/"}>
          <p className="text-white mx-2 hover:underline">Home</p>
        </Link>
        <Link href={"/service"}>
          <p className="text-white mx-2 hover:underline">Service</p>
        </Link>
        <Link href={"/about"}>
          <p className="text-white mx-2 hover:underline">About</p>
        </Link>
        <Link href={"/contact"}>
          <p className="text-white mx-2 hover:underline">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
