import Meta from "@/components/Meta";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Thanks – Kumar Web Works",
  description: "Thank you for reaching out to Kumar Web Works. We appreciate your interest and will get back to you shortly.",
  metadataBase: new URL("https://www.kumarwebworks.com/thanks"),
  alternates: {
    canonical: "/thanks",
  },
  openGraph: {
    title: "Thanks – Kumar Web Works",
    description: "Thank you for reaching out to Kumar Web Works. We appreciate your interest and will get back to you shortly.",
    url: "https://www.kumarwebworks.com/thanks",
    siteName: "Kumar Web Works",
    images: [
      {
        url: "https://www.kumarwebworks.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "Kumar Web Works Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanks – Kumar Web Works",
    description: "Thank you for reaching out to Kumar Web Works. We appreciate your interest and will get back to you shortly.",
    images: ["https://www.kumarwebworks.com/favicon.ico"],
  },
  robots: "noindex, nofollow",
  keywords: "thank you, contact us, Kumar Web Works, web development",
  type: "website",
  locale: "en_US",
};

const Thanks = () => {
  return (
    <>
    <Meta
      {...metadata}
    />
      <PageIntro eyebrow="Thanks You" title="Quick response guaranteed — we'll contact you within an hour.">
        <p>
        We’re excited to talk with you. Let’s make something great together.
        </p>
      </PageIntro>
    </>
  );
};

export default Thanks;
