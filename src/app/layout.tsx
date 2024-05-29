import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import organization from "@/data/organization.json";
import TopNavigationLoader from "@/components/base/TopNavigationLoader";
import MainAppLayout from "@/layouts/MainAppLayout";

export const metadata: Metadata = {
  title: "NoLancer - A revolutionary freelance marketplace for software developers and designers",
  description: `NoLancer is a freelance marketplace for software developers, designers, and other digital professionals who are experts in their field.
  The marketplace is designed to help freelancers find work and clients find talent.
  `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationString = JSON.stringify(organization);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" />
        <meta name="google-site-verification" content="ZKVHeQK7ogB8YNzkqwBYG1KRoLeemB6CpGlrxkOLs0k" />
      </Head>
      <body>
        <MainAppLayout>
          {children}
        </MainAppLayout>

        <TopNavigationLoader />
        <Analytics />
        <SpeedInsights />

        <Script id="organizationString" type="application/ld+json" async={true} dangerouslySetInnerHTML={{ __html: organizationString }} />
      </body>
    </html>
  );
}
