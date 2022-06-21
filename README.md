# TypeScriptの訓練場所

## 参考

### 訓練参考

- [TypeScript を使用して JavaScript アプリケーションをビルドする](https://docs.microsoft.com/ja-jp/learn/paths/build-javascript-applications-typescript/)

### 環境構築(Docker)

- [Node(typescript) + docker 環境構築メモ](https://zenn.dev/gakin/scraps/4cc16e7761d1ef)

### 使い方

    docker-compose up -d

    # コンテナ環境内に入る
    docker-compose exec node-dev sh
    
    # コンテナ環境内で任意のコマンドを実行
    npm run dev

    # JavaScriptファイルを作成
    npx tsc