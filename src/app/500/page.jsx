"use client";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CopyTextArea from "@/components/CopyTextArea";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import React, { useState } from "react";

const Error = () => {
  const [mail, setmail] = useState(true);
  const handlesetmail = () => {
    setmail(!mail);
  };
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
      <FadeIn className="flex flex-col items-center">
        <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          500
        </p>
        <h1 className="mt-4 flex justify-start  font-display text-2xl font-semibold text-neutral-950">
          Error Page
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          error is error comes from error , Solution Debug and understand the
          error then say Thank you to Error to come unwantedly
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>

        {/* <a
            href="mailto:kuamrwebworks@gmail.com?subject=Error Report&body=Describe the issue you faced:"
          className="mt-10 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        > */}
        {/*         
          Report Error 
        </a> */}
        <section
          onClick={handlesetmail}
          className="mt-16 w-full flex justify-center text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          {{ mail } ?
           <CopyTextArea/> 
           :
           <Button>Report Error</Button>}
        </section>
      </FadeIn>
    </Container>
  );
};

export default Error;
