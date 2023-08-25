"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MetaMaskInpageProvider } from "@metamask/providers";
import React, { useEffect, useState } from "react";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}


const TopNavBar = () => {
    const router = useRouter();
    const [isMetaMaskConnected, setisMetaMaskConnected] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined' && window.ethereum) {
        setisMetaMaskConnected(window.ethereum.isConnected());
      }
    }, []);
  
    return (
      <div className="inline-flex justify-end items-center pr-4 bg-transparent fixed top-4 right-0">
        {isMetaMaskConnected &&(
          <button
            className="
              px-3 py-1
              border-none
              bg-tw-black
              font-normal
              cursor-pointer
              rounded-full
              transition-colors
              duration-300
              ease-in-out
              hover:bg-tw-grey
              flex items-center
            "
            onClick={() => router.push("/Dashboard/login")}
          ><span className="text-xs font-normal text-white">Account</span>
          </button>
        )}
      </div>
    );
  };

  export default TopNavBar;