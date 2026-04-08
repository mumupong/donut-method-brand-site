import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page-shell not-found-shell">
      <p className="eyebrow">404</p>
      <h1>ページが見つかりませんでした</h1>
      <p className="section-description">
        URL が変更されたか、まだ公開されていない可能性があります。
      </p>
      <Link href="/" className="button button-dark">
        トップへ戻る
      </Link>
    </div>
  );
}
