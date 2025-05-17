import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

export const metadata = {
  title: "About Us – Learn More About Kumar Web Works",
  description: "Get to know the team behind Kumar Web Works and our mission to deliver exceptional web solutions.",
  metadataBase: new URL("https://www.kumarwebworks.com/about"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us – Learn More About Kumar Web Works",
    description: "Get to know the team behind Kumar Web Works and our mission to deliver exceptional web solutions.",
    url: "https://www.kumarwebworks.com/about",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://kumarwebworks.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Kumar Web Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us – Learn More About Kumar Web Works",
    description: "Get to know the team behind Kumar Web Works and our mission to deliver exceptional web solutions.",
    images: ["https://kumarwebworks.com/favicon.ico"],
  },
     
   robots: "index, follow",
  keywords: "about us, web development, app development, react, next.js, spring boot, freelance developer, agency",
  type: "website",
  locale: "en_US",  
         };
  


const AboutPage = () => {
 

  return (
    <>
       
<Meta
      {...metadata}
       
/> 

      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5" label="Underpaid employees" />
          <StatListItem value="12" label="satisfied clients" />
          <StatListItem value="&#8377;1,05,000" label="Invoices billed" />
        </StatList>
      </Container>
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
