import { BarIcon } from "@/icons/bar-icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Nav = () => {
  return (
    <nav className="sticky top-0 bg-white/60 backdrop-blur-md px-5 py-3 flex justify-between xs:justify-start items-center gap-2 sm:gap-5">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <div className="hidden xs:flex w-full items-center justify-between gap-2">
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <Link href="/login">Sign In</Link>
      </div>
      <BarIcon className="block xs:hidden cursor-pointer" />
    </nav>
  );
};
