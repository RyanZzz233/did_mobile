import { getFirestore, doc, getDoc } from "firebase/firestore";
import { NextResponse } from 'next/server';
import { initializeApp } from "firebase/app";
import {getRemoteConfig, getValue} from "firebase/remote-config";
import {fetchAndActivate} from "firebase/remote-config";

// Firebase configuration
const firebaseConfig = {
  // Your Firebase configuration here
  apiKey: process.env.apiKey,
  authDomain: "did2-dc32f.firebaseapp.com",
  projectId: "did2-dc32f",
  storageBucket: "did2-dc32f.appspot.com",
  messagingSenderId: "804510242582",
  appId: "1:804510242582:web:90c29c522b6036e8e12237"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const remoteConfig = getRemoteConfig();
// export async function GET() {
//   const isFetched = await fetchAndActivate(remoteConfig);

//   if (isFetched) {
//     let flag = getValue(remoteConfig,"greeting");
//     console.log(flag)
//     if (flag) {
//       return NextResponse.json({ result: true });
//     } else {
//       return NextResponse.json({ result: false });
//     }
//   } else {
//     return NextResponse.json({ result: false });
//   }
// }

export async function GET() {
  const docRef = doc(db, 'flags', 'control');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const flag = data.flag;
    const lock = data.lock;

    const match = flag === lock;

    return NextResponse.json({ result: match });
  } else {
    console.log('No such document!');
    return NextResponse.json({ result: false });
  }
}