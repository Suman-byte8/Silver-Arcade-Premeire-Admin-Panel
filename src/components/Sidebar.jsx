import React, { useEffect, useRef } from "react";
import { sidebarLinks } from "../constants/sidebarLinks";
import { gsap } from "gsap";

export default function Sidebar(){
  const ref = useRef(null);
//   useEffect(()=>{ gsap.from(ref.current,{x:-60,opacity:0,duration:.6,ease:"power2"}); },[]);
  return (
    <aside ref={ref} className="w-64 bg-gray-800 text-white flex flex-col p-4 space-y-6 overflow-y-auto scrollbar-hide sticky top-0 h-screen">
      <div className="flex flex-col items-center space-y-2">
        <div className="w-24 h-24 rounded-full bg-gray-300 border-4 border-white/25" />
        <div className="font-semibold">Admin</div>
        <div className="text-sm opacity-90">random@gmail.com</div>
      </div>
      <ul className="flex flex-col space-y-1">
        {sidebarLinks.map((it,idx)=>(
          <li key={idx} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
            <i className={it.icon}/>
            <span>{it.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700 cursor-pointer">
        <i className="fa-solid fa-power-off"/>
        <span>Logout</span>
      </div>
    </aside>
  );
}
