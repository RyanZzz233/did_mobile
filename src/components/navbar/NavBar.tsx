"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { or } from "firebase/firestore";
import React, { useEffect, useState } from "react";


//@ts-ignore

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Search",
    url: "/SearchDID",
  },

  {
    id: 3,
    title: "Transactions",
    url: "/Transactions",
  },

  {
    id: 4,
    title: "Dashboard",
    url: "/Dashboard",
  },
];


const NavBar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = React.useState("");
  const pathname = usePathname();
  const [inflag, setinflag] = useState(1);

  useEffect(() => {
    fetch('/api/checkFlag')
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setinflag(0);
        } else 
        {
          setinflag(1);
        }
      });
  }, [pathname]);

  
  if ((pathname === '/Start')||(inflag === 1)) {
    return (
      <button className="fixed top-0 left-0 w-full lg:w-48 justify-start transition-width duration-100 ease-in-out lg:bottom-0">
        <Link href="/">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start space-x-2 p-4 lg:absolute lg:top-0 lg:left-0 lg:mt-4 lg:pb-10 cursor-pointer">
            <img
              src="https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/logo.webp"
              alt="Logo"
              className="w-24 h-12 object-contain transform hover:scale-125 transition-transform duration-300 ease-in-out filter contrast-75"
            />
          </div>
        </Link>
      </button>
    );
  }
return (
  <nav className="fixed top-0 left-0 w-full lg:w-48 lg:flex lg:flex-col bg-apple-grey lg:justify-start transition-width duration-300 ease-in-out lg:bottom-0 lg:border-r border-grey lg:hover:w-48 justify-center lg:">
    <Link href="/">
      <div className="flex items-center justify-center lg:justify-start space-x-2 p-4 lg:absolute lg:top-0 lg:left-0 lg:mt-4 lg:pb-10 cursor-pointer">
        <img
          src="https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/logo.webp"
          alt="Logo"
          className="w-24 h-12 object-contain transform hover:scale-125 transition-transform duration-300 ease-in-out filter contrast-75"
        />
      </div>
    </Link>
    <div className="flex flex-row lg:flex-col gap-x-1 gap-y-6 lg:gap-y-1 lg:gap-x-6 text-apple-black font-bold lg:mt-32 px-4 lg:pl-6 overflow-auto justify-center space-x-1 lg:space-x-0">   {links.map((link) => (
        <div key={link.id} className="text-sm sm:text-base">
          <Link href={link.url}>
            <div
              className={`p-2 ${pathname === link.url ?
                'text-tw-black font-normal transition-all duration-200 ease-in-out' :
                'transition-all duration-200 ease-in-out hover:text-tw-black font-normal'
              }`}
            >
              {link.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  </nav>
);
};

export default NavBar;