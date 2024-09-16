"use client"; // This is a client component 👈🏽

import { useState } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import { useSearchParams } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [state, setState] = useState("");
  const searchParams = useSearchParams();
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
