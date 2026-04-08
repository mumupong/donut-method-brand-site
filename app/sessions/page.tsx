import Link from "next/link";

import { FAQList } from "@/components/FAQList";
import { SectionIntro } from "@/components/SectionIntro";
import { faqs, sessionConfig, takeaways } from "@/lib/site-data";

export default function SessionsPage() {
  const bookingHref = sessionConfig.bookingUrl || "/contact";
  const emailExists = Boolean(sessionConfig.contactEmail);

  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Session"
        title={sessionConfig.title}
        description={sessionConfig.description}
      />

      <section className="page-section">
        <h2>こんな方に向いています</h2>
        <div className="grid-cards grid-2">
          {sessionConfig.suitableFor.map((item) => (
            <article key={item} className="soft-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-tinted subtle-panel">
        <h2>セッションで持ち帰りやすいこと</h2>
        <ul className="bullet-list">
          {takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="page-section two-column-grid">
        <div className="info-card">
          <h2>料金・形態</h2>
          <dl className="info-list">
            <div>
              <dt>形式</dt>
              <dd>{sessionConfig.format}</dd>
            </div>
            <div>
              <dt>時間</dt>
              <dd>{sessionConfig.duration}</dd>
            </div>
            <div>
              <dt>料金</dt>
              <dd>{sessionConfig.priceLabel || sessionConfig.priceFallback}</dd>
            </div>
          </dl>
        </div>

        <div className="info-card">
          <h2>予約方法</h2>
          <ol className="ordered-list">
            {sessionConfig.reservationSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="button-row button-row-tight">
            <Link href={bookingHref} className="button button-dark">
              {sessionConfig.bookingUrl ? sessionConfig.bookingLabel : "お問い合わせへ"}
            </Link>
            <Link href="/contact" className="button button-light">
              質問を送る
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section two-column-grid">
        <div className="info-card">
          <h2>お問い合わせ先</h2>
          {emailExists ? (
            <>
              <p className="body-copy">{sessionConfig.contactEmail}</p>
              <p className="body-muted">{sessionConfig.responseTime}</p>
            </>
          ) : (
            <>
              <p className="body-copy">お問い合わせ先は公開時にここへ設定してください。</p>
              <p className="body-muted">{sessionConfig.responseTime}</p>
            </>
          )}
        </div>

        <div className="info-card">
          <h2>予約変更・キャンセルについて</h2>
          <ul className="bullet-list">
            {sessionConfig.cancellationText.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <h2>よくある質問</h2>
        <FAQList items={faqs} />
      </section>
    </div>
  );
}
