import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";
// export const metadata = {
//   title: "Contact | Kumar Web Works",
//   description: "Have a project in mind? Reach out to Kumar Web Works for custom web and app development solutions tailored to your business.",
// };

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
     <Meta
  title = "Contact | Kumar Web Works"
  description = "Have a project in mind? Reach out to Kumar Web Works for custom web and app development solutions tailored to your business."
  url="https://kumarwebworks.com/blog"
  image="https://kumarwebworks.com/images/laptop.jpg"
  jsonLd={jsonLdData}
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
