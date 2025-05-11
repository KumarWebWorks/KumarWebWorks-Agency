export function constructMetadata({
  title = "Kumar Web Works - React & Spring Boot Web Development",
  description = "Kumar Web Works offers top-notch website development services in India using React , Next , Java Spring Boot, and modern UI/UX practices. we also offer App Application Devlopment",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@kumarWebWorks",
    },
    icons,
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
