import type { Metadata } from "next";
import { Syne, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const ibmPlex = IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "HVAC Guyz ATL | Heating, Cooling & Plumbing | Atlanta, GA",
  description:
    "Atlanta HVAC, plumbing & EV charging. AC maintenance, heating install, 24/7 emergency service. Honest pricing. Call (470) 255-4535 or schedule online.",
  openGraph: {
    title: "HVAC Guyz ATL | Heating, Cooling & Plumbing | Atlanta, GA",
    description:
      "Atlanta HVAC, plumbing & EV charging. AC maintenance, heating install, 24/7 emergency service. Honest pricing.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlex.variable} scroll-smooth`}>
      <body className="min-h-screen bg-bg font-body text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
