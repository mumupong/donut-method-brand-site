import Image from "next/image";

import { SectionIntro } from "@/components/SectionIntro";
import { profileParagraphs, profileSummary } from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Profile"
        title="Anna Miyanishiについて"
        description="やさしい、静か、知的、あたたかい。押しつけずに、地に足のついた整理を届けるためのプロフィールページです。"
      />

      <section className="profile-page-grid">
        <div className="profile-photo-panel">
          <Image
            src="/anna-photo.png"
            alt="Anna Miyanishi"
            width={880}
            height={880}
            className="profile-photo large"
          />
        </div>

        <div className="profile-text-panel">
          <p className="eyebrow">{profileSummary.role}</p>
          <h2>{profileSummary.name}</h2>
          {profileParagraphs.map((item) => (
            <p key={item} className="body-copy">
              {item}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
