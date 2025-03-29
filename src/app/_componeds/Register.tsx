"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Register() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white to-green-500 text-black">
      <div className="flex flex-col px-5 bg-white shadow-2xl rounded-sm w-[17rem] py-5">
        <h1 className="text-center text-xl pb-3">Register now</h1>

        <label htmlFor="username" className="py-2 text-[15px]">
          Enter your name:
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-200 py-1 px-1 text-sm rounded outline-none focus:border-green-500"
        />

        <label htmlFor="password" className="py-2 text-[15px]">
          Enter your Password:
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-200 px-1  text-sm py-1 rounded outline-none focus:border-green-500"
        />

        <label htmlFor="password" className="py-2 text-[15px]">
          Conform your Password:
        </label>
        <input
          type="password"
          id="Conform_password"
          className="border border-gray-200 px-1  text-sm py-1 rounded outline-none focus:border-green-500"
        />

        <button
          type="submit"
          className="mt-4  text-[15px] py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Link href="/login">Submit</Link>
        </button>
      </div>
    </div>
  );
}
