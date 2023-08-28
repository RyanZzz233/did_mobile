"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { debounce } from "perfect-debounce";
import Loading1 from "@/components/loading/Loading1";
import Link from "next/link";
import styles from "./page.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
const Search = () => {
  useEffect(() => {
    document.title = "Metopia | Start";
  }, []);

  const [newItem, setNewItem] = useState({ email: "", pdid: "" });

  const addItem = async (e: any) => {
    console.log("Form submitted");
    e.preventDefault();
    if (newItem.email !== "" && newItem.pdid !== "") {
      await addDoc(collection(db, "wishlist"), {
        to: newItem.email.trim(),
        message: {
          subject: "Welcome to Web 3.0 Revolution!",
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #2a9df4;">Hello there,</h2>
              <p>Welcome to the Web 3.0 revolution. Here is your preferred Decentralized Identifier (DID):</p>
              <h1 style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">${newItem.pdid.trim()}</h1>
              <p>We will guide you through the rest when ready.</p>
              <p>Best regards,</p>
              <p>Meta Metopia Team</p>
            </div>
          `,
        },
      });
      alert("Submitted successfully!"); // Show a success message.
      setNewItem({ email: "", pdid: "" });
    } else {
      alert("Input missing");
    }
  };

  return (
    <div className="flex">
      <div className="fixed top-0 right-0 bottom-0 w-0 md:w-1/2">
        <img
          className="object-cover h-full w-full"
          src="https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/shubham-dhage-_rZnChsIFuQ-unsplash.jpg"
          alt="Description"
        />
      </div>
      <div className="fixed top-0 left-0 bottom-0 w-full md:w-1/2 flex flex-col justify-start border-r border-grey transition-width duration-300 ease-in-out bg-apple-grey">
        <div className="pt-36 pl-12 pr-8">
          <h1
            className={
            "relative text-xl sm:text-2xl md:text-2xl md:text-3xl xl:text-4xl font-extrabold leading-tight tracking-tighter text-left pb-2 bg-gradient-to-r from-tw-purple via-tw-blue to-tw-blue text-transparent bg-clip-text"
          }
          style={{
            backgroundImage: "url('https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/Screen Shot 2023-07-11 at 5.27.25 PM.png')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            //height: "100px",
          }}
          >
            <div>Navigate the New Digital Era:</div>
            <div className="pl-8">Your Web3.0 Domain ID Awaits</div>
          </h1>

          <div className={"w-full md:w-3/4 space-y-4 pl-8"}>
            <div className="">
              <form onSubmit={addItem}>
                <div className="">
                  <p
                    className={
                      "flex w-3/4 md:w-full text-lg font-light text-sm sm:text-sm md:text-sm md:text-lg xl:text-xl leading-relaxed text-apple-black pt-12 pb-4"
                    }
                  >
                    Join the Web 3.0 revolution. Submit your email and preferred
                    DID below. We will guide you through the rest when ready.
                  </p>
                  <div className="pt-4 md:space-y-2">
                    <div className="flex w-3/4 sm:w-2/3 md:w-2/3 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="text-xs h-12 flex-grow px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-black hover:bg-gray-50 transition-all mb-2 sm:mb-2"
                        value={newItem.email}
                        onChange={(e) =>
                            setNewItem({ ...newItem, email: e.target.value })
                        }
                      />

                      <input
                        type="text"
                        placeholder="Preferred DID"
                        className="text-xs h-12 flex-grow px-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-apple-black hover:bg-gray-50 transition-all mb-2 sm:mb-2"
                        value={newItem.pdid}
                        onChange={(e) =>
                            setNewItem({ ...newItem, pdid: e.target.value })
                        }
                      />
                      <div className="pt-4 md:pt-0">
                        <button
                          className={
                            "text-lg border bg-tw-black text-white hover:bg-tw-grey font-normal py-2 px-3 rounded-full shadow-md hover:shadow-lg w-12 h-12 bg-transparent text-lg flex items-center justify-center"
                          }
                          type="submit"
                        >
                          ➜
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
