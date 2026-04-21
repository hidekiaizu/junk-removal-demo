import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-muted">404</p>
        <h1 className="mt-4 font-display text-6xl uppercase text-black">Page Not Found</h1>
        <p className="mt-5 text-base leading-8 text-muted">
          The page you are looking for is not here, but we can still help you book a junk removal estimate.
        </p>
        <div className="mt-8">
          <Link href="/" className="button-primary">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  );
}
