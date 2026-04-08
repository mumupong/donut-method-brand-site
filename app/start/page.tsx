import Link from "next/link";

import { CTABox } from "@/components/CTABox";
import { SectionIntro } from "@/components/SectionIntro";
import { methodCards, painPoints, sessionConfig, takeaways } from "@/lib/site-data";

export default function StartPage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Start here"
        title="はじめての方へ"
        description="このページでは、ドーナツメソッドがどんな人のためのものか、どんなふうに役立ちやすいかを先に整理しています。"
      />

      <section className="page-section">
        <h2>こんなときに向いています</h2>
        <div className="grid-cards grid-2">
          {painPoints.map((item) => (
            <article key={item} className="soft-card">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>ドーナツメソッドの見取り図</h2>
        <div className="grid-cards grid-3">
          {methodCards.map((item) => (
            <article key={item.title} className="method-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section section-tinted subtle-panel">
        <h2>この時間で整理しやすくなること</h2>
        <ul className="bullet-list">
          {takeaways.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="body-muted">
          このセッションは、目標を急いで立てたり、正解を提案したりする時間ではありません。
          今の状態を整理しながら、自分に合う次の一歩を見つけていく1対1の対話です。
        </p>
      </section>

      <section className="page-section two-column-grid">
        <div className="info-card">
          <h2>受け方の目安</h2>
          <dl className="info-list">
            <div>
              <dt>形態</dt>
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
          <Link href="/sessions" className="text-link">
            セッション詳細を見る
          </Link>
        </div>
        <div className="soft-card soft-card-strong">
          <h2>記事や動画から見たい方へ</h2>
          <p>
            まずは note や YouTube から雰囲気を知りたい場合は、「悩みから探す」ページからテーマ別に見られます。
          </p>
          <Link href="/library" className="text-link">
            悩みから探す
          </Link>
        </div>
      </section>

      <CTABox
        title="一度、話しながら整理してみたい方へ"
        body="セッションページで、向いている方・予約方法・FAQ を先に確認できます。"
        primaryHref="/sessions"
        primaryLabel="セッションを見る"
        secondaryHref="/contact"
        secondaryLabel="お問い合わせ"
      />
    </div>
  );
}
