"use client";
import Image from "next/image";
import { useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

export default function Main() {
  const [values, setValues] = useState("");
  const [qrvalue, setQrvalue] = useState("");
  const [hello,setHello]=useState();

  const handlevalue = (e: any) => {
    setValues(e.target.value);
  };

  const datas=["hello",'world',"dsfdf"]

const api=async () => {
  setQrvalue(values)

  try {
    const res=await axios.post("/api/history",{name:qrvalue})
    console.log(res.data)
  } catch (error) {
    
  }
}


  return (
    <div className=" h-screen flex justify-center items-center bg-gray-100 rounded-l-md shadow-xl">
      <div className="w-[26rem] h-auto shadow-xl bg-white rounded-md py-10">
        <div className="flex justify-center">
          <QRCode value={qrvalue} className="w-40 h-40 rounded-md" />
        </div>
        <div className="mt-6 flex justify-center ">
          <input
            type="text"
            onChange={handlevalue}
            className="border border-blue-500 rounded-sm text-black focus:outline-none focus:border-blue-800 ml-10 text-sm px-1"
          />
          <button
            onClick={api}
            className={`bg-green-500 py-[2px] px-1 text-white text-sm ml-1 rounded-sm `}
          >
            Genarat
          </button>
        </div>
      </div>
    </div>
  );
}
