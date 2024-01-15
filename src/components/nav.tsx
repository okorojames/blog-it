"use client";
import { BarIcon } from "@/icons/bar-icon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimePresence, MotionDiv } from "./animate";

export const Nav = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  //
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-md px-5 py-3 flex justify-between xs:justify-start items-center gap-2 sm:gap-5">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <div className="hidden xs:flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <Link
          className="rounded-[100px] border border-stone-700 px-4 py-1"
          href="/login"
        >
          Sign In
        </Link>
      </div>
      <BarIcon
        onClick={() => setShowNav(!showNav)}
        className="block xs:hidden cursor-pointer"
      />
      <AnimePresence>
        {showNav && (
          <MotionDiv
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="flex xs:hidden fixed flex-col top-[74px]
          bg-slate-300/60 backdrop-blur-lg w-[50%] h-[200px] justify-center right-0 items-center gap-6"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link
              className="rounded-[100px] border border-stone-700 px-4 py-1"
              href="/login"
            >
              Sign In
            </Link>
          </MotionDiv>
        )}
      </AnimePresence>
    </nav>
  );
};
