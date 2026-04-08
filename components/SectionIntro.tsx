type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, description, align = "left" }: SectionIntroProps) {
  return (
    <div className={`section-intro ${align === "center" ? "section-intro-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
