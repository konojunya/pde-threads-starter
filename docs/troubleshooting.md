# 起動できないときの観測手順

推測で変更する前に、次の順番で事実を確認します。

## 1. 現在地

```sh
pwd
```

最後が`pde-threads-starter`または自分で付けたrepo名になっているか確認します。

## 2. Version

```sh
node --version
bun --version
```

Node.jsは`v24.19.0`、Bunは`1.3.4`以上を使います。

## 3. 依存関係

```sh
bun install
```

赤い行が出たら、最初のエラーから省略せず記録します。

## 4. Port

`Port 3000 is in use`と表示された場合、案内された別のURLを開くか、起動中のserverを`Control + C`で止めます。

## Codexへ伝える内容

- 実行したコマンド
- 期待した結果
- 実際の画面
- 最初から最後までのエラー
- `pwd`、`node --version`、`bun --version`の結果

token、password、`.env.local`の内容は貼り付けません。
