export type ResourceSource = "note" | "YouTube";

export type ResourceCategory = {
  slug: string;
  title: string;
  description: string;
};

export type ResourceItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  source: ResourceSource;
  minutes: string;
  category: string;
  tags: string[];
  published: boolean;
};

export const siteMeta = {
  siteName: "ドーナツメソッド",
  title: "ドーナツメソッド | Anna Miyanishi",
  description:
    "比較・罪悪感・焦りで『足りない』ばかり見てしまうときに、今ある土台・大切にしたい軸・必要な境界線を整理し、次の一歩を見つけるための1対1セッション。"
};

export const externalLinks = {
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScG6_3lO2NxvBUwRi0ALPYGNEBMBs1tLwvyHjUFQd-L69OvOQ/viewform",
  booking:
    "https://calendar.app.google/BKczqX91TmZ7MXxd6"
};

export const externalLinks = {
  contactForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScG6_3lO2NxvBUwRi0ALPYGNEBMBs1tLwvyHjUFQd-L69OvOQ/viewform",
  booking:
    "https://calendar.app.google/BKczqX91TmZ7MXxd6"
};


export const navigation = [
  { href: "/start", label: "はじめての方へ" },
  { href: "/library", label: "テーマから探す" },
  { href: "/sessions", label: "セッション" },
  { href: "/profile", label: "プロフィール" },
  { href: "/contact", label: "お問い合わせ" }
] as const;



export const hero = {
  eyebrow: "ドーナツメソッド",
  title: "足りない探しをやめて、今ある土台から整える。",
  description:
    "ドーナツメソッドは、比較・罪悪感・焦りで『まだ足りない』に引っぱられるときに、今ある土台・大切にしたい軸・必要な境界線を整理し、次の一歩を決めるための1対1セッションです。",
  primaryCta: { href: "/sessions", label: "セッションを見る" },
  secondaryCta: { href: "/library", label: "テーマから探す" }
};

export const painPoints = [
  "ちゃんとやっているのに、いつもまだ足りない気がする",
  "何かを達成すれば落ち着けるはず、と次を追い続けてしまう",
  "よりよい場所を探して、選び直しや転職をくり返してしまう",
  "親やまわりの期待を優先したあとで、自分の気持ちが見えにくくなる",
  "家庭や子育ての中で、ちゃんとできていない気がして苦しい",
  "大切な人ほど言いすぎてしまい、あとで自己嫌悪になる",
  "仕事や役割がないと、自分の価値まで薄くなる気がする",
  "夢や目標が叶っても、また次の不足を探してしまう"
];

export const takeaways = [
  "今の苦しさの中心にあるテーマ",
  "すでにある支えや土台",
  "本当に大切にしたいこと",
  "引き受けすぎなくていいこと",
  "次の一歩としてやってみること"
];

export const methodCards = [
  {
    title: "足りないと感じること（穴）",
    body: "比較、罪悪感、焦り、理想との差など、苦しさの中心にあるもの。"
  },
  {
    title: "今ある土台（生地）",
    body: "すでにある関係、注いでいる時間、できていること、現実にここにあるもの。"
  },
  {
    title: "大切にしたい軸（味）",
    body: "どんなふうに生きたいか、何を守りたいか、自分で選びたい方向。"
  },
  {
    title: "必要な境界線（外枠）",
    body: "どこまでが自分の課題で、どこからが相手の課題か。"
  },
  {
    title: "よろこびと余白（彩り）",
    body: "なくても成立するけれど、あると自分らしさが戻るもの。"
  }
] as const;

export const methodOverview = {
  short:
    "ドーナツメソッドは、『足りない』『できていない』『まだ足りない気がする』という穴ばかりを見る生き方から、今ここにすでにある土台を見つめ直し、自分が大切にしたい軸と必要な境界線を整えていくための視点転換メソッドです。",
  paragraphs: [
    "ドーナツメソッドとは、『足りない』『できていない』『まだ足りない気がする』という穴ばかりを見る生き方から、今ここにすでにある関係・愛情・時間・力・現実という生地を見つめ直し、自分が何を大切にして生きたいかという味を選び、他人の基準を入れすぎない外枠を整え、最後に人生に彩りを足していくための視点転換メソッドです。",
    "人は、生まれた時点でドーナツとして成立しています。何かを足してはじめて価値が生まれるのではありません。それでも、比較、能力主義、SNS、正解信仰、数値ばかりを見やすい時代の中で、私たちは穴ばかり見るモードに入りやすい。ドーナツメソッドは、ないものに追われる前に、今ここにあるものを見て、自分の味で人生を選び直すための地図です。"
  ]
};




export const startOptions = [
  {
    title: "まず内容を知りたい",
    body: "はじめての方へページで、ドーナツメソッドの考え方と、このセッションが何を整理する時間なのかを確認できます。",
    href: "/start",
    label: "はじめての方へ"
  },
  {
    title: "1対1で話したい",
    body: "今の状態を整理しながら、自分に合う選び方と次の一歩を一緒に整えていきます。",
    href: "/sessions",
    label: "セッションを見る"
  },
  {
    title: "記事や動画から知りたい",
    body: "note と YouTube を、テーマ別にまとめて見られるようにしています。",
    href: "/library",
    label: "テーマから探す"
  }
] as const;


export const resourceCategories: ResourceCategory[] = [
  {
    slug: "anxiety",
    title: "不安・焦り",
    description: "このままでいいのか落ち着かず、考えすぎて疲れてしまうときに。"
  },
  {
    slug: "overdoing",
    title: "頑張りすぎ・満たされなさ",
    description: "休んでも気が休まらず、役割や成果で自分を支えようとしてしまうときに。"
  },
  {
    slug: "relationships-family",
    title: "人間関係・家族",
    description: "親、家族、パートナー、身近な人との距離感や境界線を見直したいときに。"
  },
  {
    slug: "work-career",
    title: "仕事・キャリア",
    description: "働き方や進み方、今の仕事との向き合い方を整理したいときに。"
  },
  {
    slug: "self",
    title: "自分との関係",
    description: "自分の気持ちや選び方、自分らしさを見直したいときに。"
  },
  {
    slug: "life-health",
    title: "心と体・暮らし",
    description: "子育て、家事、休み方、暮らしの土台を見直したいときに。"
  },
  {
    slug: "creative-book",
    title: "本づくり・創作",
    description: "書くことや表現の過程で見えてきた問いをまとめています。"
  }
];

export const resources: ResourceItem[] = [
  // ここに note / YouTube のデータを追加してください。
  // 例:
  // {
  //   id: "note-001",
  //   title: "比べてしまう日に見直したいこと",
  //   excerpt: "足りない側ばかり見てしまう日に、今ある土台へ戻るための視点。",
  //   href: "https://note.com/...",
  //   source: "note",
  //   minutes: "5分",
  //   category: "self-kindness",
  //   tags: ["子育て", "自分のこと"],
  //   published: true
  // }
];

export const audienceTags = [
  "子育て",
  "家事・家庭",
  "仕事・働き方",
  "親・家族",
  "パートナー・近しい関係",
  "自分との関係",
  "お金",
  "海外移住",
  "モチベーション",
  "休み方"
] as const;

export const profileSummary = {
  name: "Anna Miyanishi",
  role: "ドーナツメソッド / 1対1セッション",
  shortBio:
    "元CAとして培った対人感覚と、暮らしの中で向き合ってきた『足りなさ』への問いから、ドーナツメソッドを形にしました。今は、比較や罪悪感に引っぱられやすいときも、感覚だけにも理屈だけにも偏らず、今ある土台と大切にしたい軸を整理する1対1セッションを届けています。"
};

export const profilePageIntro =
  "元客室乗務員。外資系IT企業、フリーランス、海外移住を経て、独自の自己理解メソッド「ドーナツメソッド」を開発。「頑張っているのに満たされない」という慢性的な焦りの構造を解き明かし、1対1のセッションを通じて、その人に合った「次の一歩」を一緒に見つけています。";

export const founderStory = {
  title: "ドーナツメソッドが生まれた背景",
  paragraphs: [
    "CAになれば満たされると思っていました。でも夢を叶えた先にあったのは、安らぎではなく「次はどこへ行けばいいんだろう」という焦りでした。",
    "フリーランスになり、産後5ヶ月で外資系IT企業に復帰し、家族でマレーシアへ移住。環境や肩書きを変え続けた7年間、「止まっている自分には価値がない」という思い込みに駆り立てられていました。",
    "転機は、1歳の娘がショーケースのドーナツを指差して「ドードー！」と叫んだ瞬間でした。まだ本物を食べたこともない娘が、「穴のある形」を見ただけでドーナツだと分かった。その時、気づいたのです。穴は埋めるべき欠陥ではなく、ドーナツをドーナツたらしめている一部なのだと。"
  ]
};

export const missionStatement = {
  title: "このメソッドを届けたい理由",
  paragraphs: [
    "このメソッドを残したいのは、自分のためだけではありません。我が子と、その先の世代が、達成や比較だけを幸せの尺度にせず、自分の生地を見失わずに生きられるようにするためです。",
    "目的地に着くことだけを急がないでほしい。そこへ向かう道のりの中にある景色や関係を、自分の味で楽しんでほしい。ドーナツメソッドは、そのための地図です。"
  ]
};

export const profileParagraphs = [
  "元CAとして、多くの人と接する中で、言葉にならない緊張や小さな違和感を汲み取る感覚を育ててきました。",
  "同時に、自分自身も長い間、『次へ行けば満たされる』という感覚の中で、環境や肩書きや役割を変え続けてきました。",
  "だからこそ、ただ励ますのでも、ただ分析するのでもなく、暮らしの現実の中で今ある土台を見直す時間を大切にしています。",
  "ドーナツメソッドは、感覚と構造の両方を扱いながら、その人に合う次の一歩を見つけるための見取り図です。"
];

export const sessionConfig = {
  title: "1対1セッション",
  description:
    "このセッションは、目標を急いで立てたり、正解を提案したりする時間ではありません。今の状態を整理しながら、自分に合う次の一歩を見つけていく1対1の対話です。",
  suitableFor: [
    "他の人と比べて落ち込みやすい",
    "家事・家庭・仕事・自分のことを両立しようとして、いつも何か足りない気がする",
    "親やまわりの期待を優先してしまい、自分の気持ちが見えにくい",
    "子育てや暮らしの中で、罪悪感を抱えやすい",
    "頑張っているのに満たされない",
    "次の一歩を決めたいが、頭の中が散らかっている"
  ],
  format: "オンライン（Google Meet）",
  duration: "60分",
  priceLabel: "モニター価格 6,600円（税込）",
  priceFallback: "通常価格 9,900円（税込）予定",
  priceNote:
    "現在はモニター価格でご案内しています。セッション後に、簡単なご感想アンケートをお願いする場合があります。",
  bookingUrl: externalLinks.booking,
  bookingLabel: "予約ページへ進む",
  contactEmail: "hello@annamiyanishi.com",
  responseTime: "3営業日以内を目安にお返事します。",
  reservationSteps: [
    "予約ページから希望日時を選ぶ",
    "お名前・メールアドレス・事前項目を入力する",
    "確認メールを受け取る",
    "当日はGoogle Meetで参加する"
  ],
  cancellationText: [
    "ご都合が悪くなった場合は、予約確認メールから変更またはキャンセルをお願いします。",
    "前日以降の変更が続く場合は、次回以降の日程調整をお願いすることがあります。"
  ]
};

export const faqs = [
  {
    question: "どんな人に向いていますか？",
    answer:
      "比較・罪悪感・焦りで『足りない』ばかり見てしまうときに、今の状況や選び方を整理したい方に向いています。特に、子育て期や家事・家庭・自分のことの両立で疲れている方に合いやすいです。"
  },
  {
    question: "話がまとまっていなくても大丈夫ですか？",
    answer:
      "大丈夫です。最初からきれいに話せなくても、今起きていることを一緒に整理していきます。"
  },
  {
    question: "これはカウンセリングですか？",
    answer:
      "いいえ。医療や心理療法ではなく、対話を通して状況や考えを整理するための時間です。心身の不調や治療が必要な場合は、適切な専門機関の利用をご検討ください。"
  },
  {
    question: "継続しないと意味がありませんか？",
    answer:
      "単発でも整理の役に立つことがあります。必要に応じて、次の受け方をご案内します。"
  },
  {
    question: "子どもがいて静かな時間が取りにくいです。",
    answer:
      "途中で中断の可能性がある場合は、事前にお知らせください。無理のない形で進めます。"
  }
] as const;

export const contactText = {
  intro:
    "セッションについてのご質問、取材・掲載のご相談、そのほかのお問い合わせはこちらからご連絡ください。",
  fallback:
    "お問い合わせフォームまたは hello@annamiyanishi.com までご連絡ください。",
  formUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScG6_3lO2NxvBUwRi0ALPYGNEBMBs1tLwvyHjUFQd-L69OvOQ/viewform"
};

export function getPublishedResources() {
  return resources.filter((item) => item.published);
}

export function getResourcesByCategory(category: string) {
  return getPublishedResources().filter((item) => item.category === category);
}

export function getCategoryBySlug(slug: string) {
  return resourceCategories.find((item) => item.slug === slug);
}
