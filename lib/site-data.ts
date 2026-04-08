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

export const navigation = [
  { href: "/start", label: "はじめての方へ" },
  { href: "/library", label: "悩みから探す" },
  { href: "/sessions", label: "セッション" },
  { href: "/profile", label: "プロフィール" },
  { href: "/faq", label: "よくある質問" },
  { href: "/contact", label: "お問い合わせ" }
] as const;

export const hero = {
  eyebrow: "ドーナツメソッド",
  title: "ちゃんと頑張っているのに、心が追いつかないときに。",
  description:
    "ドーナツメソッドは、足りない探しで散らかった思考を、今ある土台・大切にしたい軸・必要な境界線から整え、次の一歩を見つけるための1対1セッションです。特に、子育て期や家事・家庭・自分のことの両立で疲れている方へ。",
  primaryCta: { href: "/sessions", label: "セッションを見る" },
  secondaryCta: { href: "/library", label: "悩みから探す" }
};

export const painPoints = [
  "ちゃんとやっているのに、いつもまだ足りない気がする",
  "よりよい場所を探して、選び直しや転職をくり返してしまう",
  "これがあれば落ち着けるはず、と何かを追い続けてしまう",
  "本当は何を望んでいるのか、自分の気持ちが見えにくい",
  "親の期待や助言を優先したあとで、後悔が残ることがある",
  "親やまわりの顔色に影響されやすい",
  "大切な人を思うほど、言いすぎてしまうことがある",
  "仕事や役割を手放すと、自分の価値まで薄くなる気がする"
];

export const takeaways = [
  "今いちばん整えたいテーマ",
  "すでにある支えや土台",
  "本当は大切にしたいこと",
  "引き受けすぎなくていいこと",
  "今日からの小さな一歩"
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

export const startOptions = [
  {
    title: "まずひとりで整理したい",
    body: "はじめての方へページで、ドーナツメソッドの考え方と受け方を先に確認できます。",
    href: "/start",
    label: "はじめての方へ"
  },
  {
    title: "話しながら整理したい",
    body: "1対1セッションで、今の状況・大切にしたい軸・次の一歩を一緒に整えていきます。",
    href: "/sessions",
    label: "セッションを見る"
  },
  {
    title: "記事や動画から考えたい",
    body: "note と YouTube を、悩みのテーマごとにまとめて見られるようにしています。",
    href: "/library",
    label: "悩みから探す"
  }
] as const;

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "calm",
    title: "気持ちを落ち着かせたい",
    description: "不安、焦り、考えすぎで頭の中が休まらないときに。"
  },
  {
    slug: "self-kindness",
    title: "自分にやさしくなりたい",
    description: "比べすぎる、自分を責めやすい、足りなさばかり見えてしまうときに。"
  },
  {
    slug: "relationships",
    title: "人間関係を整えたい",
    description: "親、家族、パートナー、身近な人との距離感や境界線を見直したいときに。"
  },
  {
    slug: "work-life",
    title: "仕事と暮らしを整えたい",
    description: "働き方、役割、家庭との両立、頑張りすぎを見直したいときに。"
  },
  {
    slug: "choices",
    title: "自分に合う選び方を見つけたい",
    description: "転職、復職、学び直し、暮らし方などの選択に迷うときに。"
  },
  {
    slug: "fulfillment",
    title: "満たされなさを整理したい",
    description: "頑張っているのに満たされない、何かを手に入れても落ち着かないときに。"
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
  "自分のこと"
] as const;

export const profileSummary = {
  name: "Anna Miyanishi",
  role: "ドーナツメソッド / 1対1セッション",
  shortBio:
    "元CAとして、人の緊張や言葉にならない違和感を汲み取る対人感覚を育ててきました。今は、比較・罪悪感・焦りで『足りない』ばかり見てしまう方が、今ある土台・大切にしたい軸・必要な境界線を整理し、次の一歩を見つけるための対話を届けています。"
};

export const profileParagraphs = [
  "元CAとして、多くの人と接する中で、言葉にならない緊張や小さな違和感に気づく感覚を育ててきました。",
  "今は、比較・罪悪感・焦りで『足りない』ばかり見てしまう方が、今ある土台・大切にしたい軸・必要な境界線を整理し、次の一歩を見つけるための対話を届けています。",
  "大切にしているのは、強く押し出すことより、静かに整理が進むこと。答えを急がせることより、その人の暮らしに足のついた一歩が見えてくることです。",
  "ドーナツメソッドは、感覚だけでも理屈だけでもなく、今ここにある現実と、その人が本当に大切にしたいことの両方を扱うための見取り図です。"
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
  format: "オンライン（Zoom）",
  duration: "60分",
  priceLabel: "",
  priceFallback: "料金は現在最終調整中です。公開時にここへ掲載してください。",
  bookingUrl: "",
  bookingLabel: "予約フォームへ",
  contactEmail: "",
  responseTime: "3営業日以内を目安にお返事します。",
  reservationSteps: [
    "予約フォームから希望日時を選ぶ",
    "自動返信メールを受け取る",
    "事前案内を確認する",
    "当日、Zoom に参加する"
  ],
  cancellationText: [
    "ご予約の変更・キャンセルについては、公開時にこちらへ掲載してください。",
    "体調不良ややむを得ない事情がある場合の扱いも、あわせて明記してください。"
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
    "セッションについてのご質問、取材・掲載のご相談、そのほかのお問い合わせは、こちらからご連絡ください。",
  fallback:
    "お問い合わせフォームまたはメールアドレスを、公開時にここへ設定してください。"
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
