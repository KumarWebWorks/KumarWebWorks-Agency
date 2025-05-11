import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Kumar Web Works - React & Spring Boot Web Development",
  description:
    "Kumar Web Works offers top-notch website and app development using React, Next.js, and Java Spring Boot. We also provide mobile app development and UI/UX services.",
};

const Thanks = () => {
  return (
    <>
      <PageIntro eyebrow="Thanks You" title="We Will Connect Before An Hour">
        <p>
        We’re excited to talk with you. Let’s make something great together.
        </p>
      </PageIntro>
    </>
  );
};

export default Thanks;
