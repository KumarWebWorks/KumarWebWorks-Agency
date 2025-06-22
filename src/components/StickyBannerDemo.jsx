import { StickyBanner } from "@/components/ui/sticky-banner";

import Link from "next/link";

export function StickyBannerDemo() {
  return (
    <div className="relative flex  w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-transparent">
        <p className=" mx-0 max-w-[90%] text-white drop-shadow-md">
          Get a Stunning One-Page Website — Absolutely FREE! &nbsp;&nbsp;&nbsp;
          
          <Link href="/anouncement" className="transition duration-200 hover:underline">
          Read announcement
          </Link>
        </p>
      </StickyBanner>
      
    </div>
  );
}


