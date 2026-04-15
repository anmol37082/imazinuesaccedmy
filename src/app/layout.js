import "./globals.css";
import Script from "next/script";

const siteUrl = "https://imazineus.com";
const title = "Imazine Us Academy";
const description = "Offline creative courses in Zirakpur.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: "/ImazineUsAcademyLogo.png",
    shortcut: "/ImazineUsAcademyLogo.png",
    apple: "/ImazineUsAcademyLogo.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Imazine Us Academy",
    title,
    description,
    images: [
      {
        url: "/ImazineUsAcademyLogo.png",
        width: 512,
        height: 512,
        alt: "Imazine Us Academy logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/ImazineUsAcademyLogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q12E90CR08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q12E90CR08');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
