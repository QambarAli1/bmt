import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Baltistan Medical Trust – Saving Lives Through Healthcare",
    template: "%s | Baltistan Medical Trust",
  },
  description:
    "Baltistan Medical Trust is a non-profit healthcare organization serving the people of Gilgit-Baltistan, Pakistan through blood donation drives, free medical camps, emergency healthcare, and rural health programs.",
  keywords: [
    "Baltistan Medical Trust",
    "blood donation Gilgit-Baltistan",
    "free medical camps",
    "NGO Pakistan healthcare",
    "donate blood Skardu",
    "humanitarian healthcare",
  ],
  authors: [{ name: "Baltistan Medical Trust" }],
  creator: "Baltistan Medical Trust",
  publisher: "Baltistan Medical Trust",
  metadataBase: new URL("https://baltistanmedicaltrust.org"),
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://baltistanmedicaltrust.org",
    siteName: "Baltistan Medical Trust",
    title: "Baltistan Medical Trust – Saving Lives Through Healthcare",
    description:
      "Serving the people of Gilgit-Baltistan with blood donation, free medical camps, emergency care, and rural healthcare outreach.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Baltistan Medical Trust" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baltistan Medical Trust",
    description: "Healthcare and humanitarian nonprofit serving Gilgit-Baltistan, Pakistan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
