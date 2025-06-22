
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import { StickyBannerDemo } from "@/components/StickyBannerDemo";
import FadeIn from "@/components/FadeIn";

import Meta from "@/components/Meta";
import MovingBorderDemo from "@/components/MovingBorderDemo";


import SectionIntro from "@/components/SectionIntro";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";



import Script from "next/script";
import { WhyUs } from "@/components/WhyUs";





export const metadata = {
  title: "Kumar Web Works – Top-Tier Web & App Development Agency",
  description: "Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.",
  metadataBase: new URL("https://www.kumarwebworks.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kumar Web Works – Top-Tier Web & App Development Agency",
    description: "Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.",
    url: "https://www.kumarwebworks.com/",
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
    title: "Kumar Web Works – Top-Tier Web & App Development Agency",
    description: "Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.",
    images: ["https://kumarwebworks.com/favicon.ico"],
  },
  robots: "index, follow",
  keywords: "web development, app development, react, next.js, spring boot, freelance developer, agency",
  type: "website",
  locale: "en_US",
         };

export default function Home() {
 

  return (
    <>
    
    
       
        <Meta
 {...metadata}   
/>

      <Script
  src="https://example.com/analytics.js"
  strategy="lazyOnload"
/>
     
    
    <main className="text-black">
      
      <Container className=" mt-24 sm:mt-32 rounded-4xl">
        <FadeIn className="max-w-3xl">
          {/* <h1 className="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your online presence a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.

          </p> */}
           <SectionIntro
        eyebrow="🟢 Available"
        title="Make your online presence a reality with us!"
        className="mt-24 sm:mt-32 lg:mt-32"
      >
        <p>Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.
</p>   <br />
{/* <Button
  type="submit"
  className="bg-gradient-to-b from-neutral-900 to-black text-white px-6 py-2  shadow-inner border border-neutral-800 hover:brightness-110 transition duration-300 backdrop-blur-sm"
>
  Book a Free Consultation
</Button> */}
{/* <Link href="/contact" className="pulse-button inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold text-black bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 border border-gray-400 rounded-full shadow-md hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-green-300 hover:to-green-400 transition-all duration-300 ease-in-out">
  Grow Your Business with Tech
</Link> */}

      {/* <div className="flex justify-end mt-4 sm:mt-6 lg:mt-8">


</div> */}
      </SectionIntro>
     
     
      
         





          
        </FadeIn>
        <FadeIn>
          <div class="flex justify-center">
  <div class="w-fit">
    <MovingBorderDemo/>
  </div>
</div>
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
      <WhyUs/>
      <ContactSection />
    </main>
    </>
  );
}