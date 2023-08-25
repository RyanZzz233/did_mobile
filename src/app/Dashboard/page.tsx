"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import useMetamask from "@/hooks/useMetamask";
import Loading1 from "@/components/loading/Loading1";
import { useCheckFlag } from "@/hooks/useCheckFlag";


const Dashboard = () => {
  const { account } = useMetamask();

useCheckFlag();

  useEffect(() => {
    document.title = "Metopia | Dashboard";
  }, []);

  const [username, setUsername] = React.useState("");
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const usernameResponse = await fetch("/api/getUsername");
      const usernameData = await usernameResponse.json();
      setUsername(usernameData.username);

      if (!usernameData.username) {
        router.push("/Dashboard/login");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const usernameResponse = await fetch("/api/getUsername");
      const usernameData = await usernameResponse.json();
      setUsername(usernameData.username);

      if (!usernameData.username) {
        router.push("/Dashboard/login");
      }
    };

    fetchData();
  }, [account]);

  // @ts-expect-error
  const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

  //const hardcodedUsername = '0x1234567890000';
  //for testing only

  //const apiEndpoint = `/api/userlocal?key=${encodeURIComponent(searchType)}&value=${encodeURIComponent(searchInput)}&page=${page}`;

  const { data, mutate, error, isLoading } = useSWR(
    username ? `/api/userlocal?key=owner&value=${encodeURIComponent(username)}&page=${page}` : null,
    fetcher
  );

  const handlePageChange = (event:any) => {
    setPage(event.target.value);
  };

  return (
    <div className="relative pt-8 lg:pt-0">
      <div className="">
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
          Web3.0 DID Dashboard
        </h1>

        <div className="flex flex-wrap">
          <div className="">
            <div className="">
              <div className="text-apple-black">
                {isLoading ? (
                  <Loading1 />
                ) : (
                  <>
                    <div className="pb-4">
                      <h2 className="text-xxs sm:text-lg lg:text-xl text-apple-black font-light">
                        The DID owned by wallet address
                      </h2>
                      <h2 className="text-xxs sm:text-lg lg:text-xl text-apple-black font-light">
                        {username}
                      </h2>
                    </div>
                    <div>
                      <div className="py-10">
                        {data?.length > 0 ? (
                          data.map((post: any) => (
                            <div className="flex pb-4" key={post._id}>
                              <div className="flex">
                                <h2 className="text-xs sm:text-lg lg:text-xl text-apple-black font-light">
                                  DID: {post.domain}
                                </h2>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-xs sm:text-lg lg:text-xl">No data matched, please retry.</div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="my-4">
          <label>
            Page:
            <select value={page} onChange={handlePageChange}>
              {/*//@ts-ignore*/}
              {Array.from({length: datad?.TotalPages || 1}, (_, i) => i + 1).map((pageNumber) => (
                <option key={pageNumber} value={pageNumber}>
                  {pageNumber}
                </option>
              ))}
            </select>
          </label>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
