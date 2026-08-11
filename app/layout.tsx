import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-display", subsets: ["latin"], weight: "400" });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Himal Gym | Train Smart. Live Strong.";
  const description = "Premium strength training, practical nutrition guidance and fitness tools for every level in Nepal.";
  return {
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og-classes.png`, width: 1630, height: 965, alt: "Himal Gym coach-led small group strength training" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og-classes.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${anton.variable}`}>{children}</body></html>;
}
