import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "./components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Find your next bite",
  description: "Discover approachable recipes for every craving.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
