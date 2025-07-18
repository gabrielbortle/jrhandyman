import Head from 'next/head';
import HomeHero from '@/components/HomeHero/HomeHero';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';

export default function Home({ heroData, servicesData }) {
  return (
    <>
      <Head>
        <title>Affordable Handyman Services in Jackson, WY & Teton Valley | JR Handyman</title>
        <meta
          name="description"
          content="Reliable handyman services in Jackson, WY, Teton Valley, and Victor, ID. Drywall repair, painting, and more. Get a free quote today!"
        />
        <meta property="og:title" content="Handyman Services in Jackson, WY & Teton Valley" />
        <meta property="og:description" content="Affordable handyman services for Jackson, WY, and Teton Valley." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://jrhandy.com" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://jrhandy.com" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "JR Handyman",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Main St",
        addressLocality: "Jackson",
        addressRegion: "WY",
        postalCode: "83001",
        addressCountry: "US"
      },
      telephone: "+1-555-123-4567",
      url: "https://jrhandy.com"
    })
  }}
/>

      </Head>

      <HomeHero data={heroData} />
      <ServicesGrid data={servicesData} />
    </>
  );
}
export async function getStaticProps() {
  const heroData = {
    heading: "Reliable Handyman Services in",
    highlight: "Jackson, WY",
    subheading: "Serving Jackson, Victor, and the surrounding areas — offering drywall repair, painting, carpentry, and more.",
    ctaText: "Get a Free Quote",
    ctaLink: "/contact"
  };

  const servicesData = [
    { title: 'Drywall Repair', icon: 'Hammer' },
    { title: 'Interior Painting', icon: 'PaintRoller' },
    { title: 'General Repairs', icon: 'Wrench' },
  ];

  return {
    props: {
      heroData,
      servicesData,
    },
  };
}

