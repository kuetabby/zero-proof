import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import BaseLayout from "@/layouts";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const app_title =
  "Zero Knowledge Proof - Bridging Secure Transactions Seamlessly";
const app_name = "Zero Knowledge Proof";
const description =
  "Discover Zero Knowledge Proof, a revolutionary platform offering a sophisticated bridge mechanism, enabling seamless and secure transactions across networks.";

export const metadata: Metadata = {
  title: app_title,
  description,
  applicationName: app_name,
  keywords:
    "Blockchain, Connectivity, Decentralized Solutions, Community-Driven, Transparency, Security, Innovation",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://ifritnetwork.com"),
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/app-apple-icon.png" },
      { url: "/app-apple-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/app-apple-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app_name,
    description,
    images: ["/app-apple-icon.png"],
  },
  openGraph: {
    type: "website",
    siteName: app_name,
    title: app_name,
    description: description,
    images: "/og-image.png",
  },
  category: "crypto dApp",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A8FDC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
