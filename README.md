# janken-app2
じゃんけんアプリ（リッチver）の課題です

## じゃんけんアプリ リッチver

### 説明
前回作った2つの画像をマッチさせるアプリに対し、効果音やマッチした際の演出をJavaScriptで追加しました。

### 工夫した点・こだわった点
* マッチした際にポップアップが出るようにしていましたが、追加の演出として紙吹雪が舞うようにしました（`confetti`というJavaScriptライブラリを使用）。
* ボタンを押す際に「パパッ」という効果音が出るようにしました。

### 難しかった点・次回トライしたいこと（または機能）
同じIDに対して、CSSとJavaScriptでそれぞれ別の機能を当てようとすると、カニバってしまうのか、正常に動作しないことがありました（`playButton`というID名の付いたボタンコンポーネントに対し、「CSSアニメーションでフェードイン効果を実装」+「JavaScriptでクリック音を実装」したかったが、正常に作動せず、片方を外すと問題なく作動しました）。

### 備考（感想、シェアしたいこと等なんでも）
上記の内容から、効果の実装をCSSでやるのかJavaScriptでやるのか、大方の方針は統一しておいた方がよいのではと感じました。
