type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className={`text-sm font-extrabold uppercase tracking-[0.24em] ${isDark ? "text-white/58" : "text-muted"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-4xl uppercase leading-none tracking-[0.04em] md:text-5xl ${isDark ? "text-white" : "text-black"}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${isDark ? "text-white/72" : "text-muted"}`}>{description}</p>
      ) : null}
    </div>
  );
}
