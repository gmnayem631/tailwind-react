import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Links from "./Links";

const CustomNav = () => {
  const [open, setOpen] = useState(false);
  const menuData = [
    {
      id: 1,
      path: "/",
      menuName: "Home",
    },
    {
      id: 2,
      path: "/about",
      menuName: "About",
    },
    {
      id: 3,
      path: "/services",
      menuName: "Services",
    },

    {
      id: 5,
      path: "/blog",
      menuName: "Blog",
    },
    {
      id: 6,
      path: "/contact",
      menuName: "Contact",
    },
  ];
  const links = (
    <>
      {menuData.map((link) => (
        <Links key={link.id} link={link}></Links>
      ))}
    </>
  );
  return (
    <nav className="flex justify-between mx-6 my-4 z-10">
      <span
        onClick={() => setOpen(!open)}
        className="flex gap-3 items-center cursor-pointer"
      >
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute duration-500 ${open ? "top-6" : "-top-40"} bg-amber-200 text-black`}
        >
          {links}
        </ul>
        <h2>Custom Navbar</h2>
      </span>
      <ul className="md:flex hidden gap-10">{links}</ul>
      <button className="btn">Login</button>
    </nav>
  );
};

export default CustomNav;
