import Link from "next/link";

type CTABoxProps = {
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTABox({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CTABoxProps) {
  return (
    <section className="cta-box">
      <div>
        <p className="eyebrow">Next step</p>
        <h2>{title}</h2>
        <p className="section-description">{body}</p>
      </div>
      <div className="cta-actions">
        <Link href={primaryHref} className="button button-dark">
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className="button button-light">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
