import { FAQList } from "@/components/FAQList";
import { SectionIntro } from "@/components/SectionIntro";
import { contactText, faqs, sessionConfig, takeaways } from "@/lib/site-data";

export default function SessionsPage() {
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
        <h2>このセッションで整理していくこと</h2>
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
              <dd>{sessionConfig.priceLabel}</dd>
            </div>
            <div>
              <dt>補足</dt>
              <dd>
                {sessionConfig.priceNote}
                <br />
                {sessionConfig.priceFallback}
              </dd>
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
            <a
              href={sessionConfig.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-dark"
            >
              {sessionConfig.bookingLabel}
            </a>
            <a
              href={contactText.formUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-light"
            >
              質問を送る
            </a>
          </div>
        </div>
      </section>

      <section className="page-section two-column-grid">
        <div className="info-card">
          <h2>お問い合わせ先</h2>
          <p className="body-copy">{sessionConfig.contactEmail}</p>
          <p className="body-muted">{sessionConfig.responseTime}</p>
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
