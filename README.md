1. .envを作成する
以下のリンクをクリニックする
https://github.com/settings/applications/new
githubに飛んで以下の要素を入力
Application name 
``` Next-Bookers2 (なんでもいい) ```
Homepage URL
```  http://localhost:3000/ ```
Callback URL
``` http://localhost:3000/api/auth/callback/github ```

Generate a new Clinet secretをクリック
コピーしておく
updata aplictionをクリック

.envを作る
先ほど取得したIDを張る
GITHUB_ID=???
GITHUB_SECRET=???

2. 起動する
package.jsonの存在するdirに移動する

npm installを行う

npm run devを行う

