import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";

export default function useMetamask() {
  const [account, setAccount] = useState();
  const router = useRouter();

  function handleAccountsChanged(accounts: any[]) {
    if ((accounts.length === 0)) {
      // MetaMask is locked or the user has not connected any accounts.
      console.log("Please connect to MetaMask.");
      setAccount(undefined);
      //console.log(account)
      signOut();
      //window.location.reload();
      //console.log(666)
    } else if (accounts[0] !== account) {
      // Reload your interface with accounts[0].
      setAccount(accounts[0]);
    }
  }

  useEffect(() => {
    (window as any).ethereum
      .request({ method: "eth_accounts" })
      .then(handleAccountsChanged)
      .catch((err: any) => {
        alert(err);
      });
    // Note that this event is emitted on page load.
    // If the array of accounts is non-empty, you're already
    // connected.
    (window as any).ethereum.on("accountsChanged", handleAccountsChanged);
  }, []);

  const signIn = useCallback(async () => {
    const accounts = await (window as any).ethereum.request({
      method: "eth_requestAccounts",
    });

    const currentAccount = await ethers.getAddress(accounts[0])

    await axios.post("/api/auth/signIn", {
      address: currentAccount,
    });

    router.refresh();
  }, []);

  const signOut = useCallback(async () => {
    await axios.post("/api/auth/signOut");
    router.refresh();
  }, []);

  return {
    signIn,
    signOut,
    account,
  };
}
