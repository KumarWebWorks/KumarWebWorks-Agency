import "./globals.css";
import RootLayout from "@/components/RootLayout";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/next';
import FloatingDockWrapper from "@/components/FloatingDockWrapper";

const inter = Inter({ subsets: ["latin"] });



export default function Root({ children }) {
  return (
   
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    >
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Custom web and app development solutions tailored to your business needs. From UI/UX to full-stack engineering. Get results with Kumar Web Works." />
        <meta name="keywords" content="kumar, kumarweb, kumarwebworks , website kumar , kumar website , kumarweb website , kumar portfolio , web devlopment , app devlopment , web agency" />
        <meta name="author" content="Sahil Kumar" />
        <title>Kumar Web Works – Top-Tier Web & App Development Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} flex min-h-full flex-col`}>
        
        <RootLayout>
         <div className="flex justify-center">
  <FloatingDockWrapper />
</div>
          
          {children}
          <Analytics />
        </RootLayout>
      </body>
    </html>
   
  );
}
