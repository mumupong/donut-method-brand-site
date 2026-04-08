import { FAQList } from "@/components/FAQList";
import { SectionIntro } from "@/components/SectionIntro";
import { faqs } from "@/lib/site-data";

export default function FAQPage() {
  return (
    <div className="container page-shell">
      <SectionIntro
        eyebrow="FAQ"
        title="よくある質問"
        description="お申し込み前に気になりやすいことを、先に確認できるようにまとめています。"
      />
      <FAQList items={faqs} />
    </div>
  );
}
