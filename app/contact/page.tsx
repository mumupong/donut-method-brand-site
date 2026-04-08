import Link from "next/link";

import { SectionIntro } from "@/components/SectionIntro";
import { contactText, sessionConfig } from "@/lib/site-data";

export default function ContactPage() {
  const emailExists = Boolean(sessionConfig.contactEmail);

  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Contact"
        title="お問い合わせ"
        description={contactText.intro}
      />

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
              <p className="body-copy">{contactText.fallback}</p>
              <p className="body-muted">{sessionConfig.responseTime}</p>
            </>
          )}
        </div>

        <div className="info-card">
          <h2>ご予約前の確認</h2>
          <p className="body-copy">
            セッションについてのご質問がある場合は、予約前でも遠慮なくご連絡ください。
          </p>
          <div className="button-row button-row-tight">
            <Link href="/sessions" className="button button-light">
              セッション詳細を見る
            </Link>
            <Link href="/faq" className="button button-dark">
              FAQ を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
