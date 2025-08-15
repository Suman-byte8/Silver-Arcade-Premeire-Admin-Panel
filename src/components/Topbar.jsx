import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Topbar(){
  const ref = useRef(null);
//   useEffect(()=>{ gsap.from(ref.current,{y:-20,opacity:0,duration:.5}); },[]);
  return (
    <div ref={ref} className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="text-2xl font-semibold">Welcome Admin!</div>

      <div className="flex-1 max-w-xl mx-4">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
          <input className="flex-1 outline-none bg-transparent" placeholder="Search" />
          <div className="w-8 h-8 flex items-center justify-center">
            <i className="fa-solid fa-magnifying-glass text-gray-500"/>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="flex items-center space-x-2 bg-gray-700 text-white rounded-full p-1 px-3">
          <i className="fa-regular fa-sun" />
          <i className="fa-regular fa-moon" />
        </div>
      </div>
    </div>
  );
}
