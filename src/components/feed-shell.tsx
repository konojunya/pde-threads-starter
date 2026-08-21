import type { ReactNode } from "react";

type FeedShellProps = {
  children: ReactNode;
};

export function FeedShell({ children }: FeedShellProps) {
  return (
    <div id="top" className="app-shell">
      <header className="site-header">
        <button className="header-button menu-button" type="button" disabled>
          <span className="sr-only">メニュー（まだ使えません）</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <a className="wordmark" href="#top" aria-label="Traceのトップへ戻る">
          <span className="wordmark-mark" aria-hidden="true">@</span>
          <span>trace</span>
        </a>

        <button className="header-button search-button" type="button" disabled>
          <span className="sr-only">検索（まだ使えません）</span>
          <span aria-hidden="true" />
        </button>
      </header>

      <main className="timeline-frame">
        <section className="feed-column" aria-label="みんなの投稿">
          <div className="starter-note">
            <div>
              <p>PRODUCT ENGINEER STARTER</p>
              <h1>自分だけのSNSを、ここから作る。</h1>
            </div>
            <span>build 00</span>
          </div>

          <section className="composer-placeholder" aria-labelledby="composer-title">
            <div className="avatar avatar-starter" aria-hidden="true">Y</div>
            <div className="composer-copy">
              <h2 id="composer-title">新しい投稿</h2>
              <p>Lesson 005で、この場所から投稿できるようにします。</p>
            </div>
            <button type="button" disabled>投稿</button>
          </section>

          <div className="feed-list">{children}</div>
        </section>
      </main>

      <nav className="bottom-navigation" aria-label="メインメニュー">
        <a className="nav-item nav-item-active" href="#top" aria-label="ホーム">
          <span className="home-icon" aria-hidden="true" />
        </a>
        <button className="nav-item" type="button" disabled aria-label="検索（まだ使えません）">
          <span className="nav-search-icon" aria-hidden="true" />
        </button>
        <button className="nav-item create-item" type="button" disabled aria-label="投稿（まだ使えません）">
          <span aria-hidden="true">＋</span>
        </button>
        <button className="nav-item" type="button" disabled aria-label="アクティビティ（まだ使えません）">
          <span className="nav-heart-icon" aria-hidden="true">♡</span>
        </button>
        <button className="nav-item" type="button" disabled aria-label="プロフィール（まだ使えません）">
          <span className="profile-icon" aria-hidden="true" />
        </button>
      </nav>
    </div>
  );
}
