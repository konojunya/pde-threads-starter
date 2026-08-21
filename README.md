# Trace Starter

Product Engineer Learning Pathで使う、個人SNS制作のstarterです。読み取り専用のサンプル投稿と画面枠だけがあり、投稿、API、データベース、ログインはまだ実装されていません。

## 必要なもの

- Mac
- Node.js 24.19.0
- Bun 1.3.4以上
- Codex
- WarpまたはMacのTerminal
- Webブラウザ

VS Codeは必須ではありません。

## 起動する

WarpまたはCodexでこのrepoを開き、次を実行します。

```sh
bun install
bun run dev
```

表示された`http://localhost:3000`をブラウザで開きます。終了するときは、コマンドを実行した画面で`Control + C`を押します。

Lesson 003では、まずここまでできれば完了です。下にある品質確認の言葉を、今すぐ覚える必要はありません。

## もう一度起動する

repoのディレクトリを開き、次を実行します。

```sh
bun run dev
```

毎回`bun install`を実行する必要はありません。`package.json`または`bun.lock`が変わったときは再実行します。

## Lesson 010で品質を確認する

Lesson 010で、次のコマンドを一つずつ実行します。`lint`、`typecheck`、`build`の違いは、そのLessonで実際のエラーを見ながら学びます。

```sh
bun run check
bun run security:scan
```

## 最初に読む場所

- [Starterの構造](docs/architecture.md)
- [起動できないときの観測手順](docs/troubleshooting.md)
- `src/data/sample-posts.ts`: 画面に表示するサンプル
- `src/app/page.tsx`: サンプルを画面部品へ渡す場所

## 秘密情報

本物のtoken、password、secret keyをGitHubへ置きません。Lesson 008以降で必要になった値は`.env.example`を参考に`.env.local`へ書きます。`.env.local`はGitの対象外です。

## Templateから始める

GitHub Template公開後は、教材のLesson 002にある`Use this template`の手順から、自分専用のrepoを作ります。forkは使用しません。

作成したrepoの`Issues`には、Lesson 012で使うバグ報告フォームが含まれます。期待、実際、再現手順、観測した事実を自分で記入し、秘密情報を貼らないための補助です。
