import Image from "next/image";
import Link from "next/link";

import { CTABox } from "@/components/CTABox";
import { FAQList } from "@/components/FAQList";
import { SectionIntro } from "@/components/SectionIntro";
import {
  faqs,
  hero,
  methodCards,
  painPoints,
  profileSummary,
  resourceCategories,
  sessionConfig,
  startOptions,
  takeaways
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.title}</h1>
            <p className="hero-description">{hero.description}</p>
            <div className="button-row">
              <Link href={hero.primaryCta.href} className="button button-dark">
                {hero.primaryCta.label}
              </Link>
              <Link href={hero.secondaryCta.href} className="button button-light">
                {hero.secondaryCta.label}
              </Link>
            </div>
          </div>

          <aside className="hero-card">
            <p className="hero-card-title">このサイトでわかること</p>
            <ul className="check-list">
              <li>どんな人に向いているか</li>
              <li>何が整理されやすいか</li>
              <li>1対1セッションの受け方</li>
              <li>note と YouTube の探し方</li>
            </ul>
            <div className="hero-meta-grid">
              <div>
                <span className="mini-label">形式</span>
                <strong>{sessionConfig.format}</strong>
              </div>
              <div>
                <span className="mini-label">時間</span>
                <strong>{sessionConfig.duration}</strong>
              </div>
              <div>
                <span className="mini-label">料金</span>
                <strong>{sessionConfig.priceLabel}</strong>
              </div>
              <div>
                <span className="mini-label">予約</span>
                <strong>受付中</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            title="こんな悩みはありませんか"
            description="当てはまるものがあれば、このセッションが役立つ可能性があります。"
          />
          <div className="grid-cards grid-2">
            {painPoints.map((item) => (
              <article key={item} className="soft-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="container">
          <SectionIntro
            title="このセッションで整理していくこと"
            description="大きな答えを急いで出すためではなく、今の状況を整理して、自分に合う次の一歩を見つけるための時間です。"
          />
          <div className="grid-cards grid-5">
            {takeaways.map((item) => (
              <article key={item} className="number-card">
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            eyebrow="Method"
            title="ドーナツメソッドとは"
            description="私は、足りないものばかり見てしまう状態を整理するための見取り図を、ドーナツメソッドと呼んでいます。何かを足して完成するためではなく、今ある土台を見直し、自分にとって大切な軸と必要な境界線を確かめるための方法です。"
          />
          <div className="grid-cards grid-3">
            {methodCards.map((item) => (
              <article key={item.title} className="method-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-tinted">
        <div className="container">
          <SectionIntro
            title="はじめ方"
            description="まずは、自分に合う方法から選べます。"
          />
          <div className="grid-cards grid-3">
            {startOptions.map((item) => (
              <article key={item.title} className="soft-card soft-card-strong">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className="text-link">
                  {item.label}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <SectionIntro
            title="テーマから探す"
            description="note と YouTube を、今の悩みや関心に近いテーマ別にまとめています。"
          />
          <div className="grid-cards grid-3">
            {resourceCategories.map((item) => (
              <Link key={item.slug} href={`/library/${item.slug}`} className="category-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="text-link">このテーマを見る</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-photo">
        <div className="container profile-highlight">
          <div className="profile-photo-wrap">
            <Image
              src="/anna-photo.png"
              alt="Anna Miyanishi"
              width={720}
              height={720}
              className="profile-photo"
            />
          </div>
          <div>
            <SectionIntro title="Anna Miyanishiについて" />
            <p className="profile-copy">{profileSummary.shortBio}</p>
            <p className="profile-role">{profileSummary.role}</p>
            <Link href="/profile" className="button button-light">
              プロフィールを見る
            </Link>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container two-column-grid">
          <div className="info-card">
            <p className="eyebrow">Session</p>
            <h2>料金とご予約</h2>
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
                <dd>{sessionConfig.priceLabel}</dd>
              </div>
            </dl>
            <p className="body-muted">{sessionConfig.priceNote}</p>
            <Link href="/sessions" className="text-link">
              詳細を見る
            </Link>
          </div>

          <div>
            <SectionIntro title="よくある質問" />
            <FAQList items={faqs.slice(0, 4)} />
          </div>
        </div>
      </section>

      <div className="container bottom-space">
        <CTABox
          title="今の状態を、ひとつずつ整理していくために"
          body="1対1セッションの予約、またはお問い合わせフォームからご連絡いただけます。"
          primaryHref="/sessions"
          primaryLabel="セッションを見る"
          secondaryHref="/contact"
          secondaryLabel="お問い合わせ"
        />
      </div>
    </>
  );
}
