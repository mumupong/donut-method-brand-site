import Link from "next/link";

import { ResourceCard } from "@/components/ResourceCard";
import { SectionIntro } from "@/components/SectionIntro";
import { getPublishedResources, resourceCategories } from "@/lib/site-data";

export default function LibraryPage() {
  const resources = getPublishedResources();

  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Library"
        title="悩みから読む・見る"
        description="note と YouTube を、悩みのテーマごとに見られるようにしています。媒体で分けるのではなく、いまの自分に必要なテーマから選べる設計です。"
      />

      <section className="page-section">
        <div className="grid-cards grid-3">
          {resourceCategories.map((item) => (
            <Link key={item.slug} href={`/library/${item.slug}`} className="category-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="category-meta">テーマを見る</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section">
        <h2>最新の note / YouTube</h2>
        {resources.length > 0 ? (
          <div className="grid-cards grid-3">
            {resources.slice(0, 6).map((item) => (
              <ResourceCard key={item.id} resource={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>note 記事と YouTube 動画は、このページに順次追加していけるようにしてあります。</p>
            <p className="body-muted">
              `lib/site-data.ts` の resources 配列へデータを追加すると、この一覧とカテゴリページに自動で反映されます。
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
