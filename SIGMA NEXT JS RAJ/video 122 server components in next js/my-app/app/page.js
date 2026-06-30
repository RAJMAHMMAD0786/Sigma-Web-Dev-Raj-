// import Image from "next/image";

// "use client"---> ka used kiya jata hai contant ko client side pe dikhane ke liye
// "use client"
// import { useState, useEffect } from "react";

import fs from "fs/promises"

import Navbar from "@/components/Navbar"

export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("I am Raj")

  let a = fs.readFile(".gitignore")
  a.then(e => { console.log(e.toString()) })

  return (
    <div>

      <Navbar />

      I am Components
      {/* {count} */}
      {/* <button onClick={() => setcount(count + 1)}>Click Me</button> */}
    </div>
  );
}
