import Link from "next/link";

import { navigation, siteMeta } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">{siteMeta.siteName}</p>
          <p className="footer-copy">
            比較・罪悪感・焦りで「足りない」ばかり見てしまうときに、
            今ある土台・大切にしたい軸・必要な境界線を整理し、次の一歩を見つけるための1対1セッション。
          </p>
        </div>

        <div>
          <p className="footer-title">Pages</p>
          <ul className="footer-links">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Anna Miyanishi</div>
    </footer>
  );
}
