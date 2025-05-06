// import React from "react";
// import Container from "./Container";
// import FadeIn from "./FadeIn";
// import FooterNavigation from "./FooterNavigation";
// import Logo from "./Logo";
// import Link from "next/link";

// const ArrowIcon = (props) => {
//   return (
//     <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
//       <path
//         fill="currentColor"
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16 3 10 .5v2H0v1h10v2L16 3Z"
//       />
//     </svg>
//   );
// };

// const NewsletterForm = () => {
//   return (
//     <form className="max-w-sm">
//       <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
//         Sign up for our newsletter
//       </h2>
//       <p className="mt-4 text-sm text-neutral-700">
//         Subscribe to get the latest design news, articles, resources and
//         inspiration.
//       </p>
//       <div className="relative mt-6">
//         <input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
//         />
//         <div className="absolute inset-y-1 right-1 flex justify-end">
//           <button
//             type="submit"
//             aria-label="Submit"
//             className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
//           >
//             <ArrowIcon className="w-4" />
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// const Footer = () => {
//   return (
//     <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
//       <FadeIn>
//         <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
//           <FooterNavigation />
//           <div className="flex lg:justify-end">
//             <NewsletterForm />
//           </div>
//         </div>
//         <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
//           <Link href={"/"} aria-label="Home">
//             <Logo className="h-8" fillOnHover>
//               Abdullah Agency
//             </Logo>
//           </Link>
//           <p className="text-sm text-neutral-700">
//             © Abdullah Agency Inc. {new Date().getFullYear()}
//           </p>
//         </div>
//       </FadeIn>
//     </Container>
//   );
// };

// export default Footer;

"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import FooterNavigation from "./FooterNavigation";
import Logo from "./Logo";
import Link from "next/link";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  const [email , setEmail] = useState();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return null; // Or a loading state
  }
  
  
  
  

  return (
    <form className="max-w-sm" action="https://formsubmit.co/kumarwebworks@gmail.com" method="POST">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
      
        <input
          type="email"
          label="Email"
          value={email}
          name="email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <input type="text" name="_honey" className="hidden"/>
<input type="hidden" name="_captcha" value="false"/>
<input type="hidden" name="_next" value="http://kumarwebworks.com/thanks"/>
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            
             <ArrowIcon className="w-4" />
          </button>
          
      
        </div>
      </div>
    </form>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <FooterNavigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href={"/"} aria-label="Home">
            <Logo className="h-8" fillOnHover>
              Kumar Web Works
            </Logo>
          </Link>
          <p className="text-sm text-neutral-700">
            © Kumar Web Works Inc. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
