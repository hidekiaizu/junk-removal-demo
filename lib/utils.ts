import type { Metadata } from "next";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buildMetadata({
  title,
  description,
  path = ""
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const siteName = "Got A Guy";
  const absoluteTitle = `${title} | ${siteName}`;
  const url = `https://www.gotaguydemo.com${path}`;

  return {
    title: absoluteTitle,
    description,
    alternates: {
      canonical: path || "/"
    },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description
    }
  };
}
