import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CTABox } from "@/components/CTABox";
import { ResourceCard } from "@/components/ResourceCard";
import { SectionIntro } from "@/components/SectionIntro";
import { getCategoryBySlug, getResourcesByCategory, resourceCategories, siteMeta } from "@/lib/site-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return resourceCategories.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: siteMeta.title };
  }

  return {
    title: `${category.title} | ${siteMeta.siteName}`,
    description: category.description
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const items = getResourcesByCategory(category.slug);

  return (
    <div className="container page-shell">
      <SectionIntro eyebrow="Theme" title={category.title} description={category.description} />

      <div className="breadcrumb">
        <Link href="/library">悩みから探す</Link>
        <span>/</span>
        <span>{category.title}</span>
      </div>

      {items.length > 0 ? (
        <div className="grid-cards grid-3">
          {items.map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>このテーマの記事や動画は、これから追加していけるようになっています。</p>
          <p className="body-muted">
            note と YouTube の内容を `lib/site-data.ts` に足すと、このカテゴリに自動で並びます。
          </p>
        </div>
      )}

      <CTABox
        title="一度、話しながら整理したい方へ"
        body="記事や動画でしっくりきたテーマがあれば、1対1セッションで今の状況に合わせて整えていくこともできます。"
        primaryHref="/sessions"
        primaryLabel="セッションを見る"
        secondaryHref="/contact"
        secondaryLabel="お問い合わせ"
      />
    </div>
  );
}
