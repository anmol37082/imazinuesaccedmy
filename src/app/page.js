import HomePage from "./HomePage";

const siteUrl = "https://imazineus.com";
const pageUrl = `${siteUrl}/`;
const title =
  "Imazine Us Academy | Graphic Design, Video Editing and Offline Classes";
const description =
  "Join Imazine Us Academy for offline graphic design, Photoshop, Illustrator, InDesign and creative training classes in Zirakpur.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: "Imazine Us Academy",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/ImazineUsAcademyLogo.png`,
      },
      description,
      sameAs: [
        "https://www.instagram.com/imazineusacademy/",
        "https://www.facebook.com/Imazine.Us.Academy",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zirakpur",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      inLanguage: "en-IN",
      isPartOf: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "Course",
      "@id": `${siteUrl}/graphic-design-course`,
      name: "Graphic Designing Course",
      description:
        "Offline graphic designing course covering Photoshop, Illustrator, InDesign, typography, branding, social media design and portfolio building.",
      provider: {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#organization`,
      },
      educationalCredentialAwarded: "Certificate",
    },
  ],
};

export const metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title,
    description,
    images: [`${siteUrl}/ImazineUsAcademyLogo.png`],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}
