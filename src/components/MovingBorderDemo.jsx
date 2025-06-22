"use client";
import React from "react";
import { Buttonn } from "./ui/moving-border";
import Link from "next/link";


export default function MovingBorderDemo() {
  return (
    <div>
      <Buttonn
  borderRadius="1.75rem"
  className="pulse-button text-base font-semibold px-4 py-2 bg-black bg-opacity-70 dark:bg-slate-900 text-black dark:text-white border border-gray-300 dark:border-gray-800 shadow-lg hover:shadow-xl transition duration-300"
>
  <Link
    href="https://wa.me/919942488298?text=Hi%20there%2C%20I%27m%20interested%20in%20your%20services!"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full text-center"
  >
    Book Free Consultation
  </Link>
</Buttonn>

    </div>
  );
}
