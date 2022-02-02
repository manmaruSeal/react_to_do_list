// reactのコンポーネントを書いていく際に必要
import React from "react";
// htmlにコンポーネントを反映していくの必要
import ReactDom from "react-dom";

import App from "./App";

// 画面に反映!
ReactDom.render(<App />, document.getElementById("root"));
