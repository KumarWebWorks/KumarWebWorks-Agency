// 
import Head from 'next/head';

export default function Meta({
  title = 'Kumar Web Works – Top-Tier Web & App Development Agency',
  description = 'Custom web and app development solutions tailored to your business needs.',
  url = 'https://www.kumarwebworks.com/',
  image = 'https://www.kumarwebworks.com/agency.PNG',
  keywords = 'web development, app development, react, next.js, spring boot, freelance developer, agency',
  type = 'website',
  locale = 'en_US',
}) {
  return (
    <Head>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#0a0a0a" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Kumar Web Works" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Optional Favicons (add actual paths to your public directory) */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Optional JSON-LD Schema (Uncomment to use) */}
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Kumar Web Works",
            url: url,
          }),
        }}
      />
     
    </Head>
  );
}
