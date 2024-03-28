紹介  
Next.jsのapp routerを理解するために作成しました。  
Next.jsを用いて一番初めのアウトプットになります。  
主に、CRUDに焦点を当てて作りました。  

アプリの動かし方  

1. git clone git@github.com:Fkinds/next-bookers2.git  

2. .envを作成する  
以下のリンクをクリニックする  
https://github.com/settings/applications/new  
githubに飛んで以下の要素を入力  
Application name  
``` Next-Bookers2 (名前はなんでも大丈夫です) ```  
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

3. 起動する  
package.jsonの存在するdirに移動する  
npm installを行う  
npm run devを行う  