import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Head from "next/head";

export default function Home() {
    const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kumar Web Works",
    "url": "https://www.kumarwebworks.com",
    "logo": "https://www.kumarwebworks.com/images/laptop.jpg",
    "description": "Expert web and app development services.",
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
  title="Kumar Web Works | Expert Web & App Development"
  description="Expert web and app development services for businesses."
  url="https://kumarwebworks.com/"
  image="https://kumarwebworks.com/images/laptop.jpg"
  jsonLd={jsonLdData}
/>

      
    
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your online presence a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a group of developer working at the intersection of design
            and technology. It is a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <ContactSection />
    </main>
    </>
  );
}
