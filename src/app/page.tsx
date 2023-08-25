import Button1 from "@/components/button/Button1";
import { Metadata } from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  title: "Metopia",
};
export default function Home() {
  const a = "a";

  return (
    <div className="relative pt-8 lg:pt-0">
      <div className="flex flex-col flex-1 gap-5">
        <h1
          className={
            "relative text-2xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold leading-tight tracking-tighter text-left pb-2 bg-gradient-to-r from-tw-purple via-tw-blue to-tw-blue text-transparent bg-clip-text"
          }
          style={{
            backgroundImage: "url('https://pub-3890daa6d3af4fe09ab0c284ce757dd9.r2.dev/Screen Shot 2023-07-11 at 5.27.25 PM.png')",
            backgroundSize: "cover",
            backgroundPosition: "left",
            //height: "100px",
          }}
        >
          Unlock Your First Web3.0 Domain Name
        </h1>
        <div className="pt-4 w-full sm:w-9/12 md:w-8/12 lg:w-8/12 xl:w-7/12">
          <p
            className={
              "text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-light leading-relaxed text-apple-black"
            }
          >
            A domain name is crucial for online presence and getting a Web 3.0
            domain name offers benefits like complete control,
            interoperability, future-proofing, secure ownership of digital
            assets, easy integration with wallets, and using it as a digital
            identity.
          </p>
        </div>
        <div className="flex justify-left pt-10">
          <Button1 url="Start" text="Get Started" />
        </div>
      </div>
    </div>
  );
}