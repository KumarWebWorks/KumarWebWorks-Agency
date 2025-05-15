import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
export const metadata = {
   title : "Contact | Kumar Web Works",
  description : "Have a project in mind? Reach out to Kumar Web Works for custom web and app development solutions tailored to your business."
  };

const ContactPage = () => {

   const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Contact | Kumar Web Works",
    "url": "https://www.kumarwebworks.com/contact",
    "logo": "https://www.kumarwebworks.com/images/laptop.jpg",
    "description": "Have a project in mind? Reach out to Kumar Web Works for custom web and app development solutions tailored to your business.",
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
     {/* <Meta
  title = "Contact | Kumar Web Works"
  description = "Have a project in mind? Reach out to Kumar Web Works for custom web and app development solutions tailored to your business."
  url="https://kumarwebworks.com/blog"
  image="https://kumarwebworks.com/images/laptop.jpg"
  jsonLd={jsonLdData}
/> */}

<Meta
  title="Contact Us – Let's Connect at Kumar Web Works"
  description="Have questions or ideas? Reach out to the Kumar Web Works team and let's bring your vision to life!"
  url="https://www.kumarwebworks.com/contact"
  image="https://www.kumarwebworks.com/images/agency.PNG"
  keywords="contact us, Kumar Web Works, web development inquiries, connect"
/>



{/* <Meta
  title="Our Work – Projects and Case Studies from Kumar Web Works"
  description="Discover our portfolio showcasing successful projects and case studies at Kumar Web Works."
  url="https://www.kumarwebworks.com/work"
  image="https://www.kumarwebworks.com/images/work-og.jpg"
  keywords="portfolio, case studies, web development projects, Kumar Web Works"
/>


<Meta
  title="About Us – Learn More About Kumar Web Works"
  description="Get to know the team behind Kumar Web Works and our mission to deliver exceptional web solutions."
  url="https://www.kumarwebworks.com/about"
  image="https://www.kumarwebworks.com/images/about-og.jpg"
  keywords="about us, Kumar Web Works, web development team, company mission"
/> */}




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
