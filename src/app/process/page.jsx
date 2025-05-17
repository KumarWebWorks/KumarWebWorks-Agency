import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";

import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";

import React from "react";

export const metadata = {
  title: "Our Process – How Kumar Web Works Delivers Excellence",
  description: "Discover the streamlined process that powers our web and app development projects at Kumar Web Works.",
  metadataBase: new URL("https://www.kumarwebworks.com/process"),
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Our Process – How Kumar Web Works Delivers Excellence",
    description: "Discover the streamlined process that powers our web and app development projects at Kumar Web Works.",
    url: "https://www.kumarwebworks.com/process",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://www.kumarwebworks.com/images/agency.PNG",
        width: 800,
        height: 600,
        alt: "Kumar Web Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process – How Kumar Web Works Delivers Excellence",
    description: "Discover the streamlined process that powers our web and app development projects at Kumar Web Works.",
    images: ["https://www.kumarwebworks.com/images/agency.PNG"],
  },
  robots: "index, follow",
  keywords: "our process, Kumar Web Works, web development process, digital solutions",
  type: "website",
  locale: "en_US",
 
};


const ProcessPage = () => {

  
  return (
    <>
    <Meta
            {...metadata}
          />
       
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          We believe in efficiency and maximizing our resources to provide the
          best value to our clients. The primary way we do that is by re-using
          the same five projects we’ve been developing for the past decade.
        </p>
      </PageIntro>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />
        {/* Build */}
        <Build />
        {/* Deliver */}
        <Deliver />
      </div>
      {/* Values */}
      <Values />
      <ContactSection />
    </>
  );
};

export default ProcessPage;
