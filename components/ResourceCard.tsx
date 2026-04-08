import Link from "next/link";

import type { ResourceItem } from "@/lib/site-data";

type ResourceCardProps = {
  resource: ResourceItem;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <div className="resource-meta-row">
        <span className="pill">{resource.source}</span>
        <span className="muted">{resource.minutes}</span>
      </div>
      <h3>{resource.title}</h3>
      <p>{resource.excerpt}</p>
      <div className="resource-tags">
        {resource.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
      <Link href={resource.href} className="text-link" target="_blank" rel="noreferrer">
        続きを見る
      </Link>
    </article>
  );
}
