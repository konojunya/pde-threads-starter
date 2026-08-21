# Starterの構造

このstarterは、完成したSNSではありません。受講者がLessonごとに機能を追加できる画面枠です。

## 最初からあるもの

- `src/app/`: URLと画面全体
- `src/components/`: 画面を構成する部品
- `src/data/sample-posts.ts`: 読み取り専用のサンプルデータ
- `src/app/globals.css`: 見た目のルール

## まだないもの

- 投稿フォームの動作
- API
- データベース接続
- ログイン
- 実在ユーザーのデータ

サンプル投稿を変更するときは、まず`src/data/sample-posts.ts`を見ます。画面の並びを変更するときは、`src/app/page.tsx`から読み始めます。
