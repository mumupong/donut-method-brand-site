import Link from "next/link";

import { SectionIntro } from "@/components/SectionIntro";
import { contactText, sessionConfig } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Contact"
        title="お問い合わせ"
        description={contactText.intro}
      />

      <section className="page-section two-column-grid">
        <div className="info-card">
          <h2>お問い合わせ方法</h2>
          <p className="body-copy">
            まずはお問い合わせフォームからご連絡ください。
          </p>
          <p className="body-muted">
            {sessionConfig.responseTime}
            <br />
            返信が届かない場合は、{sessionConfig.contactEmail} までご連絡ください。
          </p>

          <div className="button-row button-row-tight">
            <a
              href={contactText.formUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-dark"
            >
              お問い合わせフォームを開く
            </a>
          </div>
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
            <Link href="/faq" className="button button-light">
              FAQを見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
