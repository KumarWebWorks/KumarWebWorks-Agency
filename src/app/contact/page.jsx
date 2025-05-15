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

  return (
    <>
     

<Meta
  title="Contact Us – Let's Connect at Kumar Web Works"
  description="Have questions or ideas? Reach out to the Kumar Web Works team and let's bring your vision to life!"
  url="https://www.kumarwebworks.com/contact"
  image="https://www.kumarwebworks.com/images/agency.PNG"
  keywords="contact us, Kumar Web Works, web development inquiries, connect"
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
