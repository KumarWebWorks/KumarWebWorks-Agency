import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Meta from "@/components/Meta";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Head from "next/head";
import Script from "next/script";





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
 {/* <Head>
        <title>Kumar Web Works – Top-Tier Web & App Development Agency</title>
        <meta name="description" content="Custom web and app development solutions tailored to your business needs. From UI/UX to full-stack engineering. Get results with Kumar Web Works." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kumar Web Works – Top-Tier Web & App Development Agency" />
        <meta property="og:description" content="Custom web and app development solutions tailored to your business needs." />
        <meta property="og:image" content="https://kumarwebworks.com/favicon.ico" />
        <meta property="og:url" content="https://www.kumarwebworks.com/" />
        <meta property="og:site_name" content="Kumar Web Works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kumar Web Works – Top-Tier Web & App Development Agency" />
        <meta name="twitter:description" content="Custom web and app development solutions tailored to your business needs." />
        <meta name="twitter:image" content="https://kumarwebworks.com/favicon.ico" />
        <link rel="canonical" href="https://www.kumarwebworks.com/" />
      </Head> */}

      <Script
  src="https://example.com/analytics.js"
  strategy="lazyOnload"
/>
    
    <main className="text-black">
      
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Make your online presence a reality with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Get a stunning website, powerful mobile app, or tailor-made desktop software — delivered fast and built to scale.

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