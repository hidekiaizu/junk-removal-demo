"use client";

import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { googleProfile } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

function Stars() {
  return (
    <div className="flex items-center gap-1 text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-7 w-7 fill-current" />
      ))}
    </div>
  );
}

function ReviewAvatar({ name, index }: { name: string; index: number }) {
  const initial = name.trim().charAt(0).toUpperCase();

  const backgrounds = [
    "from-[#f3d3b2] to-[#dba16f]",
    "from-[#cfd8e8] to-[#7f97b7]",
    "from-[#d8d2cb] to-[#91857b]"
  ];

  return (
    <div
      className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${backgrounds[index % backgrounds.length]} text-base font-extrabold text-black`}
    >
      {initial}
    </div>
  );
}

function ReviewCard({
  name,
  date,
  body,
  index
}: {
  name: string;
  date: string;
  body: string;
  index: number;
}) {
  const previewText = body.length > 190 ? `${body.slice(0, 190).trimEnd()}...` : body;
  const canExpand = body.length > 190;

  return (
    <article className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-card">
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          <ReviewAvatar name={name} index={index} />
        </div>
        <div className="min-w-0">
          <h3 className="font-sans text-[1.35rem] font-semibold leading-none tracking-[-0.02em] text-black">
            {name}
          </h3>
          <p className="mt-1 text-sm text-muted/80">{date}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Stars />
      </div>

      <div className="mt-5">
        <p className="text-lg leading-9 text-black">{canExpand ? previewText : body}</p>
        {canExpand ? (
          <Link
            href={googleProfile.mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex text-lg font-medium text-[#1a73e8] transition hover:text-[#1557b0]"
          >
            Read more
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function GoogleReviews() {
  return (
    <section className="section-shell relative overflow-hidden bg-canvas">
      <div className="soft-grid absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-black/10 bg-[#fcfbf7] p-6 shadow-card sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Google Reviews"
            title="What Customers Say"
            description="Real Google reviews from recent Got A Guy Moving & Junk Removal customers."
            align="center"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full bg-black px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white">
              {googleProfile.rating} stars on Google
            </div>
            <Link
              href={googleProfile.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="button-secondary"
            >
              See All on Google
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {googleProfile.reviews.map((review, index) => (
              <ReviewCard key={review.name} {...review} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
