// import clsx from "clsx";
// import Link from "next/link";

// const Logo = ({ invert, href, className, children, ...props }) => {
//   className = clsx(
//     className,
//     "black",
//     invert ? "text-white hover:text-blue-600" : "text-black hover:text-blue-600"
//   );
//   const inner = <span className="relative">{children}</span>;
//   if (href) {
//     return (
//       <Link href={href} className={className} {...props}>
//         {inner}
//       </Link>
//     );
//   }
//   return (
//     <h2
//       className={clsx(
//         "cursor-pointer text-2xl font-semibold duration-300",
//         className
//       )}
//       {...props}
//     >
//       {inner}
//     </h2>
//   );
// };

// export default Logo;

import clsx from "clsx";
import Link from "next/link";

const Logo = ({ invert, href, className, children, ...props }) => {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-600" : "text-black hover:text-600"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h1
      className={clsx(
        "cursor-pointer text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl  font-semibold duration-300 ",
        
        // Mobile-first styles
        //  "cursor-pointer sm:text-lg sm:font-medium sm:duration-300",
        // For screens ≥640px and up
        
        // "cursor-pointer text-2xl font-semibold duration-300 ",
        // // "sm:text-xs sm:font-semibold",
        className
      )}
       {...props}
      
    >
      Kumar Web Works
     
    </h1>
  );
};

export default Logo;
