import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

// export const metadata = {
//   title: "Our Process | Kumar Web Works",
//   description: "From discovery to deployment — see how Kumar Web Works transforms client ideas into fully deployed digital solutions.",
// };


const ProcessPage = () => {

   const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Our Process | Kumar Web Works",
    "url": "https://www.kumarwebworks.com/process",
    "logo": "https://www.kumarwebworks.com/images/laptop.jpg",
    "description": "From discovery to deployment — see how Kumar Web Works transforms client ideas into fully deployed digital solutions.",
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-9942488298",
      "contactType": "customer service"
    }],
    "sameAs": [
      "https://www.linkedin.com/company/kumarwebworks",
      "https://twitter.com/kumarwebworks",
      "https://www.facebook.com/kumarwebworks"
    ]
  };
  return (
    <>
     <Meta
        title={metadata.title}
        description={metadata.description}
        url="https://www.kumarwebworks.com/process"
        image="https://www.kumarwebworks.com/images/agency.PNG" // Update this image URL as needed
        keywords="our process, Kumar Web Works, web development process, digital solutions"
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
