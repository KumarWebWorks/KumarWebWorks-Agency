import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We build complete, high-performance websites — from pixel-perfect UI to powerful backend systems. Whether it&apos;s a marketing site, e-commerce platform, admin dashboard, or custom web app, we deliver fast, secure, and fully responsive solutions tailored to your goals.
            </ListItem>
            <ListItem title="App Development">
              Our expert team builds fast, reliable, and user-friendly mobile apps using the latest frameworks and technologies. From sleek UI/UX to powerful backend integration, we deliver scalable apps tailored for both iOS and Android.
            </ListItem>
            <ListItem title="Desktop App">
              We develop powerful, lightweight desktop applications with a focus on performance, stability, and offline functionality. Whether it&apos;s for Windows, macOS, or cross-platform, our solutions are tailored to do exactly what your business needs — no bloat, just results.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
