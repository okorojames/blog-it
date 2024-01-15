import React from "react";
import { FacebookIcon } from "@/icons/facebook-icon";
import { LinkedinIcon } from "@/icons/linkedin-icon";
import { TwitterIcon } from "@/icons/twitter-icon";

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 min-h-[100px] flex flex-col justify-center bg-stone-900 text-white">
      <div className="flex justify-around flex-wrap">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <a
            href="https://www.facebook.com/mrokorojames"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.x.com/okorojames_"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/okorojames"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
