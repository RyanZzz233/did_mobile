import React from "react";
import Link from "next/link";

const Button1 = ({ text, url }:any) => {
  return (
    <Link href={url}>
      <button
        className={
          "border bg-tw-black text-white hover:bg-tw-grey font-normal py-2 px-3 rounded-full shadow-md hover:shadow-lg h-12 w-24  text-xs lg:text-lg lg:w-48 bg-transparent text-center"
        }
      >
        {text}
      </button>
    </Link>
  );
};

export default Button1;