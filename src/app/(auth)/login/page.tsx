import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Login Here</h1>
      <form className="w-full xxs:w-[370px] flex flex-col gap-3">
        <label className="flex flex-col gap-1" htmlFor="email">
          <span>Email</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            type="email"
            id="email"
          />
        </label>
        <label className="flex flex-col gap-1" htmlFor="password">
          <span>Password</span>
          <input
            className="w-full border border-stone-300 py-3 pl-2 rounded-md outline-none"
            type="password"
            id="password"
          />
        </label>
        <div className="flex items-center gap-2 mt-2">
          <p>Don&apos;t have an account?</p>
          <Link className="text-blue-500" href="/sign-up">
            Sign Up
          </Link>
        </div>
        <button
          className="bg-blue-500 text-white py-3 rounded-md mt-5 hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
