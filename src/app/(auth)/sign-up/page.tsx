import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Create Account</h1>
      <form className="w-full xxs:w-[370px] flex flex-col gap-3">
        <label className="flex flex-col gap-1" htmlFor="full-name">
          <span>Full Name</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            id="full-name"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="email">
          <span>Email</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            id="email"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="phone-number">
          <span>Phone Number</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            id="phone-number"
            type="mobile"
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="password">
          <span>Password</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            id="password"
            type="password"
          />
        </label>
        <div className="flex items-center gap-2 mt-2">
          <p>Already have an account?</p>
          <Link className="text-blue-500" href="/login">
            Sign In
          </Link>
        </div>
        <button className="bg-blue-500 text-white py-3 rounded-md mt-5 hover:bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default page;
