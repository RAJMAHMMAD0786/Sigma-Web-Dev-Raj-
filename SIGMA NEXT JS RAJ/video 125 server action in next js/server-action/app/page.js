"use client"

import { submitAction } from "@/action/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()

  return (
    <div className="w-2/3 mx-auto my-12">
      <form ref={ref} action={(e) => { submitAction(e); ref.current.reset() }}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-4 border border-amber-100" type="text" />
        </div>
        <div>
          <label htmlFor="Address">Address</label>
          <input name="Address" id="Address" className="text-black mx-4 border border-amber-100" type="text" />
        </div>
        <div>

          <button className="border border-black px-3 ">Submit</button>
        </div>
      </form>
    </div>
  );
}
