"use client";;
import { Code, Server, Settings, PenTool, TerminalSquare } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";


export function GlowingEffectDemoSecond() {
  return (
    <ul
      className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
         title = "Frontend"
      description = "Articles on React, Vue, and UI design."
         imageSrc="/frontend-main.jpg"
           imageAlt="Example description"
            />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Server className="h-4 w-4 text-black dark:text-neutral-400" />}
        title= "Backend"
      description ="Node.js, Spring Boot, Databases."
         imageSrc="/backend-main.jpg"
           imageAlt="Example description"
        />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
         title = "DevOps"
      description = "Docker, CI/CD, and deployments."
         imageSrc="/devops-main.jpg"
           imageAlt="Example description"
        />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
         imageSrc="uiux-main.jpg"
           imageAlt="Example description"
        icon={<PenTool className="h-4 w-4 text-black dark:text-neutral-400" />}
         title= "UI/UX"
      description= "Design systems, Figma, animations."
        />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<TerminalSquare className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="The best AI code editor ever"
         imageSrc="/codeeditor-main.jpg"
           imageAlt="Example description"
        description="Experience real-time code suggestions, bug fixes, and smart refactoring—powered by cutting-edge AI. This is the future of development." />
    </ul>
  );
}
const GridItem = ({
  area,
  icon,
  title,
  description,
  imageSrc, // background image
}) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Background Image with Overlay */}
        <div
          className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,1)), url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-3 z-10">
            <div className="w-fit rounded-lg border border-gray-200 p-2 bg-white">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-neutral-200 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
