


"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

import React from 'react'

export default function BlogCard() {
  return (
   <div className="w-full max-w-sm mx-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 ">
        <Card
      className="max-w-sm bg-neutral-950 text-base antialiased pt-5 pl-5 pr-5 "
      renderImage={() => <Image width={500} height={500} src="/hero.jpg" alt="image 1" />}
    >
   
<div className="">
  <div className="  rounded-lg shadow-lg">
    <h5 className="  xl:text-2xl  md:text-lg  sm:text-base font-bold tracking-tight  text-slate-100">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-400 ">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      
  </div>
</div>
 
 
 

     
    </Card>
    </div>
      
  
  )
}
