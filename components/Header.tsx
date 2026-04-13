"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigation, sessionConfig, siteMeta } from "@/lib/site-data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={siteMeta.siteName} onClick={closeMenu}>
          <Image
            src="/brand-mark.png"
            alt="ドーナツメソッド"
            width={44}
            height={44}
            className="brand-mark"
            priority
          />
          <span className="brand-text">ドーナツメソッド</span>
        </Link>

        <nav className="top-nav desktop-nav" aria-label="グローバルナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions desktop-only">
          <a
            href={sessionConfig.bookingUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-dark button-header"
          >
            予約する
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle mobile-only"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu-backdrop ${menuOpen ? "is-open" : ""}`} onClick={closeMenu} />
      <div id="mobile-menu" className={`mobile-menu-panel ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu-head">
          <span className="mobile-menu-title">メニュー</span>
          <button type="button" className="mobile-close" onClick={closeMenu} aria-label="閉じる">
            ×
          </button>
        </div>

        <a
          href={sessionConfig.bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-dark mobile-menu-cta"
          onClick={closeMenu}
        >
          予約する
        </a>

        <nav className="mobile-nav" aria-label="モバイルナビゲーション">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
