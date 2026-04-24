import "./globals.css";
import Script from "next/script";

const siteUrl = "https://imazineusacademy.com";
const title = "Best Digital Marketing Institute In Chandigarh | Panchkula | Mohali";
const description = "Living in Chandigarh, Panchkula or Mohali and still searching for the best digital marketing institute near me? No need to worry just join Imazine Us Academy today";

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1254360373450461');
            fbq('track', 'PageView');
          `}
        </Script>
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
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1254360373450461&ev=PageView&noscript=1" alt="" />',
          }}
        />
        {children}
      </body>
    </html>
  );
}
