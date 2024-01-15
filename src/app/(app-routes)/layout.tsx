import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import React from "react";

const AppRoutesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-stone-50">
      <Nav />
      <div className="min-h-screen mt-[90px]">{children}</div>
      <Footer />
    </div>
  );
};

export default AppRoutesLayout;
