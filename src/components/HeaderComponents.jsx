'use client'

import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import React from 'react'
import { navLinks } from "@/constants";
import { menu } from "@/assets"
import { close } from "@/assets"
import { logo } from "@/assets";
import Image from "next/image";

const HeaderComponent = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar p-4">
      <ul className="list-none sm:flex hidden items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-light cursor-pointer text-[18px] ml-5 ${
              active === nav.title ? "text-black" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <h1 className="w-[124px] h-[32px] block mr-20 cursor-pointer ">HEAD & HEAL</h1>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#F1F5F7] flex flex-col absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium text-black cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className=" items-center flex mt-3">
            <CiUser size={30} className="mr-3 cursor-pointer"/>
            <CiShoppingCart className="sm:m-4 m-0 cursor-pointer" size={30}  />
          </div>
        </div>
      </div>

      <div className=" items-center sm:flex hidden mr-5 ">
        <CiUser size={30} className="cursor-pointer"/>
        <CiShoppingCart className="sm:m-4 m-0 cursor-pointer" size={30} />
      </div>
        
    </nav>
  );
   
}
export default HeaderComponent;