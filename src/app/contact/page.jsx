import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Contact Us – Let's Connect at Kumar Web Works",
  description: "Have questions or ideas? Reach out to the Kumar Web Works team and let's bring your vision to life!",
  metadataBase: new URL("https://www.kumarwebworks.com/contact"),
  alternates: {
    canonical: "/contact",
  },  
  openGraph: {
    title: "Contact Us – Let's Connect at Kumar Web Works",
    description: "Have questions or ideas? Reach out to the Kumar Web Works team and let's bring your vision to life!",
    url: "https://www.kumarwebworks.com/contact",
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
    title: "Contact Us – Let's Connect at Kumar Web Works",
    description: "Have questions or ideas? Reach out to the Kumar Web Works team and let's bring your vision to life!",
    images: ["https://www.kumarwebworks.com/images/agency.PNG"],
  },
  robots: "index, follow",
  keywords: "contact us, Kumar Web Works, web development inquiries, connect",
  type: "website",
  locale: "en_US",
 
         
  };

const ContactPage = () => {

  return (
    <>
     

<Meta
        {...metadata}
      />



      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can not wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
