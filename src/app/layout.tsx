import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Blog It",
  description:
    "Blog-It, is a simple application where techies can come and share their thoughts, experiences and also get to teach others tech tips",
  icons: {
    icon: "/site-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
