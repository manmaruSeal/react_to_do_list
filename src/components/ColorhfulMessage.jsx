import React from "react";

export const ColorfulMessage = (props) => {
  // console.log(props);
  // props.引数と書くのは煩雑なため、分割代入を用いる

  /**
   * タグと閉じタグの間の文字を取得するにはchildrenという要素(変数)を使う
   */
  const { color, children } = props;
  const contentStyle = {
    // 文字列かつキャメルケース！
    // color: props.color,
    // color: color, ←このような場合は省略可！
    color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
// default export は1つのファイルで1つしかできない
