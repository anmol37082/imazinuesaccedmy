import "./globals.css";

export const metadata = {
  title: "Imazine Us Academy",
  description: "Offline creative courses in Zirakpur.",
  icons: {
    icon: "/ImazineUsAcademyLogo.png",
    shortcut: "/ImazineUsAcademyLogo.png",
    apple: "/ImazineUsAcademyLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
