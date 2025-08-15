import React, { useEffect, useRef } from "react";
import Sparkline from "../Home/SparkLine";
import { gsap } from "gsap";

export default function FavoriteItemCard(){
  const ref = useRef(null);
  useEffect(()=>{
    // gsap.from(ref.current,{y:20,opacity:0, duration:.45, ease:"power2"});
  },[]);
  return (
    <div ref={ref} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <div className="w-20 h-16 rounded-md bg-gray-200" />
      <div className="flex-1 space-y-1">
        <div className="font-semibold">Watermelon Juice With Ice</div>
        <div className="text-sm text-gray-600">
          <span className="text-yellow-500"><i className="fa-solid fa-star"/> <i className="fa-solid fa-star"/> <i className="fa-solid fa-star"/> <i className="fa-solid fa-star"/> <i className="fa-regular fa-star"/></span>
          &nbsp;&nbsp;(454 votes)
        </div>
        <div className="flex items-center space-x-2 text-sm text-blue-500">
          <i className="fa-solid fa-heart"/>
          <span>256k Like It</span>
        </div>
      </div>

      <Sparkline points={[3,6,4,7,5,8,6,9,5]} />

      <div className="flex space-x-6">
        <div className="flex flex-col items-start">
          <div className="text-2xl font-bold text-blue-500">45%</div>
          <div className="text-xs text-gray-500">Interest</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-xs text-gray-500 mb-1"><i className="fa-solid fa-chart-column"/> Total Sales</div>
          <div className="text-2xl font-bold text-blue-500">6,732</div>
        </div>
      </div>
    </div>
  );
}
