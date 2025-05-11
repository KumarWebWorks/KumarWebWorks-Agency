// import RootLayout from "@/components/RootLayout";
// import "./globals.css";

// export const metadata = {
//   title: {
//     template: "Kumar Web Works",
//     default: "Kumar Web Works",
//   },
// };

// export default function Layout({ children }) {
//   return (
//     <html
//       lang="en"
//       className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
//     >
//       <body className="flex min-h-full flex-col">
//         <RootLayout>{children}</RootLayout>
//       </body>
//     </html>
//   );
// }
// src/app/layout.jsx

import "./globals.css";
import RootLayout from "@/components/RootLayout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Kumar Web Works",
    default: "Kumar Web Works",
  },
  description:
    "Kumar Web Works offers top-notch website and app development using React, Next.js, and Java Spring Boot.",
};

export default function Root({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased text-neutral-100">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
