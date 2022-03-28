// reactのコンポーネントを書いていく際に必要
import React from "react";
// htmlにコンポーネントを反映していくの必要
import ReactDom from "react-dom";

import App from "./App";

// ここにメソッド定義して処理を書いていくと大変だから
// コンポーネント化する

/**
 * 画面に反映!
 * htmlのrootのidを取得して、そこに対してrenderでjsの内容を反映させている
 * お決まりのルール
 *  */
ReactDom.render(<App />, document.getElementById("root"));
