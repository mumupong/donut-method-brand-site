import Image from "next/image";

import { SectionIntro } from "@/components/SectionIntro";
import {
  founderStory,
  missionStatement,
  profileParagraphs,
  profileSummary
} from "@/lib/site-data";

export default function ProfilePage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="Profile"
        title="Anna Miyanishiについて"
        description="プロフィールと、ドーナツメソッドが生まれた背景について。"
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

<section className="page-section two-column-grid">
  <div className="soft-card soft-card-strong">
    <h2>{founderStory.title}</h2>
    {founderStory.paragraphs.map((item) => (
      <p key={item} className="body-copy">
        {item}
      </p>
    ))}
  </div>

  <div className="soft-card soft-card-strong">
    <h2>{missionStatement.title}</h2>
    {missionStatement.paragraphs.map((item) => (
      <p key={item} className="body-copy">
        {item}
      </p>
    ))}
  </div>
</section>
      
      
    </div>
  );
}
