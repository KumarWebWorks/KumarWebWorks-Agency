"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Image from "next/image";



const content = [
  {
    title: "Free One-Page Website Offer",
    description:
    "We believe everyone deserves a strong digital presence. That’s why we offer a fully designed, mobile-friendly one-page website absolutely free — no hidden charges, no catch. Ideal for startups, freelancers, or small businesses looking to make their mark online.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/freewebsite.jpg"
          width={400}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {  title: "Strategy-First Approach",
    description:
      "We don’t just jump into design or development. First, we understand your business goals, challenges, and ideal audience. This ensures that every feature we build directly supports your growth and creates real value for your brand.",
  content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/detailmeeting.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
     title: "Full-Service Digital Studio",
    description:
      "KUMARWEBWORKS is your one-stop solution for all things digital. From custom websites and mobile apps to desktop software and admin dashboards — everything is handled under one roof by passionate professionals who care about your success.",
  content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/studio.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
   
  {
      title: "Lightning-Fast Delivery",
    description:
      "Speed matters in business. We use modern tools and a streamlined process to deliver projects faster than traditional agencies — without sacrificing quality. You get your product up and running sooner, so you can start growing right away.",
   content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/light.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
   {
     title: "Mobile-First & SEO-Optimized",
    description:
      "Your audience is on mobile, and Google rewards mobile-ready websites. We build responsive, mobile-first designs that not only look amazing on all devices but are also optimized to get discovered through search engines and drive organic traffic.",
  content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/seo.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
    {
       title: "Clean, Modern, & Custom Design",
    description:
      "No outdated templates or cluttered layouts. We craft beautiful, modern designs from scratch that reflect your brand’s personality, engage your users, and drive more conversions — whether that’s getting calls, bookings, or sales.",
  content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/modern.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
    {
   title: "Direct Communication With Developers",
    description:
      "Unlike big agencies where your message gets lost in layers, we let you speak directly with the team building your solution. This ensures faster decisions, clearer understanding, and better outcomes without delays or confusion.",
   content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/call.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
    {
     title: "Transparent Pricing & Tailored Packages",
    description:
      "Whether you’re bootstrapping or scaling up, we offer flexible pricing based on your exact needs. No inflated fees or vague estimates — just honest rates, clear deliverables, and full ownership of your product once it’s live.",
  content: (
       <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/price.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];
export function WhyUs() {
  return (
     <Container className=" mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-16  md:px-12">
        <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Why Choose &nbsp; KUMARWEBWORKS 
          </h2>
          <br />
          <p className="font-display  text-white [text-wrap:balance] ">we don’t just build software — we build online success.</p>
          </div>
      <StickyScroll content={content} />
        </FadeIn>   
    </Container>
  );
}
