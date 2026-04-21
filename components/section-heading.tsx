type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl uppercase leading-none tracking-[0.04em] text-black md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
