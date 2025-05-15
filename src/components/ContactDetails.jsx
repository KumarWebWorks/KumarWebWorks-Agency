import React from "react";
import FadeIn from "./FadeIn";
import Offices from "./Offices";
import Border from "./Border";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

const ContactDetails = () => {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Prefer doing things in person? We don’t but we have to list our
        addresses here for legal reasons.
      </p>
      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {/* {[
            ["Careers", "kumarwebworks.com"],
            ["Press", "kumarwebworks@gmail.com"],
          ].map(([label, email]) => ( */}
          {/* key={email} */}
            <div >
              <dt className="font-semibold text-neutral-950"></dt>
              <dd>
                <Link
                  href={`mailto:kumarwebworks@gmail.com`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  kumarwebworks@gmail.com
                </Link>
              </dd>
            </div>
          {/* ))} */}
        </dl>
      </Border>
      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
};

export default ContactDetails;
