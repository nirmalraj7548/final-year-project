"use client"
import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";


export default function PostmanHeader() {
    const [invite,setInvite]=useState(false);
  return (
    <div className="w-full bg-gray-100  py-2 px-[14px] flex justify-between" onClick={()=>invite ? setInvite(!invite) : ""}>
      <div className="flex text-[14px] gap-3 text-gray-800">
        {["Home", "WorkSpeace", "API Network"].map((item) => (
          <p className="hover:bg-gray-200 rounded-[4px] py-[4px] px-[6px] cursor-pointer ">
            {item}
          </p>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Search Postman"
          className="text-[13px] hover:border-gray-600 text-black py-1 text-center border border-gray-300 rounded-sm bg-gray-200 focus:outline-none w-40 "
        />
      </div>

      <div className="flex text-[14px] gap-x-1 text-gray-800 items-center">
        <button onClick={()=>setInvite(!invite)} className="bg-blue-500 text-[10px]    text-white px-2 h-5 rounded-sm  hover:bg-blue-600 ">
          + invite
        </button>
      <CiSettings className="hover:bg-gray-200 rounded-[4px] py-[4px] px-[6px] cursor-pointer text-[2rem] "/>
      <IoNotificationsOutline className="hover:bg-gray-200 rounded-[4px] py-[4px] px-[6px] cursor-pointer text-[28px] text-gray-500" />
      <CiImageOn className="hover:bg-gray-200 rounded-[4px] py-[4px] px-[6px] cursor-pointer text-[32px] text-gray-500"/>
       {invite ? <div className="absolute w-[10rem] h-[10rem] font-medium text-green-500 text-lg bg-white shadow-2xl flex justify-center items-center right-[7rem] top-9 rounded-sm">
          Hello world
        </div>:""} 


        {["Upgrade"].map((item) => (
          <p className="hover:bg-gray-200 rounded-[4px] py-[4px] px-[6px] cursor-pointer ">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
