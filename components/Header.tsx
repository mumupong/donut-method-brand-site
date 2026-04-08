import Image from "next/image";
import Link from "next/link";

import { navigation, siteMeta } from "@/lib/site-data";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={siteMeta.siteName}>
          <Image
            src="/logo_AnnaMiyanishi.png"
            alt="Anna Miyanishi"
            width={210}
            height={99}
            className="brand-logo"
            priority
          />
        </Link>

        <nav className="top-nav" aria-label="グローバルナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
