import type { SamplePost } from "@/data/sample-posts";

type SamplePostCardProps = {
  post: SamplePost;
};

type ActionIconProps = {
  name: "heart" | "reply" | "repost" | "share";
};

function ActionIcon({ name }: ActionIconProps) {
  if (name === "heart") {
    return <path d="M12 21s-7-4.6-9.3-9C.8 8.3 3.2 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.6 1.2-1.5 2.8-2.6 4.8-2.6 4 0 6.4 3.8 4.5 7.5C19 16.4 12 21 12 21Z" />;
  }

  if (name === "reply") {
    return <path d="M20.5 11.5a8.4 8.4 0 0 1-8.7 8.5 9.8 9.8 0 0 1-3.5-.7L4 20.5l1.2-4A8.1 8.1 0 0 1 3.5 11.5 8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 8.5 8.5Z" />;
  }

  if (name === "repost") {
    return <path d="m17 3 3 3-3 3M4 11V9a3 3 0 0 1 3-3h13M7 21l-3-3 3-3m13-2v2a3 3 0 0 1-3 3H4" />;
  }

  return <path d="m3 11 18-8-6.8 18-3.3-7L3 11Zm8 3 4.5-4.5" />;
}

export function SamplePostCard({ post }: SamplePostCardProps) {
  return (
    <article className="post-card">
      <div className={`avatar avatar-${post.accent}`} aria-hidden="true">
        {post.author.slice(0, 1)}
      </div>
      <div className="post-content">
        <header className="post-meta">
          <div>
            <strong>{post.handle}</strong>
            <span>{post.author}</span>
          </div>
          <time>{post.postedAt}</time>
          <button type="button" disabled aria-label="その他（まだ使えません）">•••</button>
        </header>
        <p>{post.body}</p>

        {post.media ? (
          <div className={`post-media post-media-${post.media}`} aria-label="サンプル画像">
            <span>BUILD LOG</span>
            <strong>DAY 01</strong>
            <p>観察して、作って、確かめる。</p>
          </div>
        ) : null}

        <footer className="post-actions" aria-label="投稿への操作">
          <button type="button" disabled aria-label={`いいね ${post.reactions}件`}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><ActionIcon name="heart" /></svg>
            <span>{post.reactions}</span>
          </button>
          <button type="button" disabled aria-label={`返信 ${post.replies}件`}>
            <svg aria-hidden="true" viewBox="0 0 24 24"><ActionIcon name="reply" /></svg>
            <span>{post.replies}</span>
          </button>
          <button type="button" disabled aria-label="再投稿（まだ使えません）">
            <svg aria-hidden="true" viewBox="0 0 24 24"><ActionIcon name="repost" /></svg>
          </button>
          <button type="button" disabled aria-label="シェア（まだ使えません）">
            <svg aria-hidden="true" viewBox="0 0 24 24"><ActionIcon name="share" /></svg>
          </button>
        </footer>
      </div>
    </article>
  );
}
