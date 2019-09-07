# sample_node_express
すげー雑にcookieとかを受けて表示できるようなサンプルを作りたかっただけ。
1. cookieをヘッダに組み込む方法を勉強したよ
2. javascriptでsingletonってどうやって実現するの

## gitにつなぐならsshだよね
https://qiita.com/shizuma/items/2b2f873a0034839e47ce

## npmをインストール
https://qiita.com/taiponrock/items/9001ae194571feb63a5e

## expressを使うのだ
https://expressjs.com/

## babelでES6記法に対応するのだ
https://daiki-sekiguchi.com/2018/09/11/nodejs-how-to-use-es6/

https://qiita.com/foursue/items/d80667eff2faed8613f2

https://barikanblog.com/javascript-es6-babel/

## cookie-parser
https://www.utali.io/entry/2016/10/05/031358

## デザインパターン
https://qiita.com/kenju/items/4d32598ffddf86af82f2

## ビルド
npm run build

## 起動
npm run start

## 実際にcurlを叩いてみる
curl.exe http://localhost:3000/cookie -H 'Cookie: foo=6; bar=28; baz=496'

curl.exe http://localhost:3000/singleton/

curl.exe http://localhost:3000/factory

curl.exe http://localhost:3000/iterator

curl.exe http://localhost:3000/decorator

curl.exe http://localhost:3000/strategy

curl.exe http://localhost:3000/facade

curl.exe http://localhost:3000/proxy

curl.exe http://localhost:3000/mediator

curl.exe http://localhost:3000/observer
