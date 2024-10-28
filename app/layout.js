"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const [state, setState] = useState("");

  return (
    <html lang="en">
      <Head>
        <title>CoreTech</title>
        <meta name="description" content="Created by coretech" />
        <link rel="icon" href="/tablogo.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
