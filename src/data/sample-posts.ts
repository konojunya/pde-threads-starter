export type SamplePost = {
  id: string;
  author: string;
  handle: string;
  body: string;
  postedAt: string;
  accent: "blue" | "mint" | "coral";
  reactions: number;
  replies: number;
  media?: "blueprint";
};

export const samplePosts: readonly SamplePost[] = [
  {
    id: "sample-01",
    author: "Mina · 学生",
    handle: "mina_builds",
    body: "今日から、小さなWebサービスを作り始めます。まずは画面にある部品を観察中。1年後、どこまで作れるようになっているか楽しみ！",
    postedAt: "12分",
    accent: "blue",
    reactions: 24,
    replies: 3,
  },
  {
    id: "sample-02",
    author: "Kai · はじめての開発",
    handle: "kai_notes",
    body: "エラーは失敗の証拠ではなく、次に見る場所を教えてくれる情報らしい。",
    postedAt: "28分",
    accent: "mint",
    reactions: 18,
    replies: 2,
  },
  {
    id: "sample-03",
    author: "Rin · 制作記録",
    handle: "rin_makes",
    body: "公開したら友だちに触ってもらいたい。どんな反応が返ってくるか楽しみ。今日のメモも残しておきます。",
    postedAt: "1時間",
    accent: "coral",
    reactions: 31,
    replies: 5,
    media: "blueprint",
  },
];
