import Image from "next/image";

import { SectionIntro } from "@/components/SectionIntro";
import {
  founderStory,
  missionStatement,
  profilePageIntro,
  profileSummary
} from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Profile"
        title="プロフィール"
        description="ドーナツメソッドを届けている Anna Miyanishi のこと。"
      />

      <section className="profile-hero">
        <div className="profile-photo-panel">
          <Image
            src="/anna-photo.png"
            alt="Anna Miyanishi"
            width={880}
            height={1100}
            className="profile-photo large"
          />
        </div>

        <div className="profile-text-stack">
          <p className="profile-role">{profileSummary.role}</p>
          <h1 className="profile-name">{profileSummary.name}</h1>
          <p className="profile-lead">{profilePageIntro}</p>
        </div>
      </section>

      <section className="page-section story-grid">
        <article className="subtle-panel story-card">
          <h2>{founderStory.title}</h2>
          <div className="story-copy-group">
            {founderStory.paragraphs.map((item) => (
              <p key={item} className="body-copy">
                {item}
              </p>
            ))}
          </div>
        </article>

        <article className="subtle-panel story-card">
          <h2>{missionStatement.title}</h2>
          <div className="story-copy-group">
            {missionStatement.paragraphs.map((item) => (
              <p key={item} className="body-copy">
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
