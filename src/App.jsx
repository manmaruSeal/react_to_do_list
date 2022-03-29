import React, { useState } from "react";
import ColorfulMessage from "./components/ColorhfulMessage";

// コンポーネント化
// reactは関数を使って画面の要素であるコンポーネントを表現していける
// reactはファイル形式がjsでも動くが
// reactのコンポーネントと示すためにjsxとした方が良い
// コンポーネントの命名は最初大文字、-_を使わない
const App = () => {
  console.log("saisho");
  /**state
   * 条件によって動的変わる部分をstateとして定義する
   * useState()から分割代入で2つを取り出す
   * 1つ目がstateとして使用する変数名
   * 2つ目は1つ目の変数を変更するための関数
   * useStateの()は初期値を設定できる
   * コンポーネント内でstateは上に書いておくとわかりやすくてよい！
   * stateは再読み込みをせずに画面に変化が出る
   * →リアクトのコンポーネントが再レンダリングされているため
   */
  /**
   * 再レンダリングのタイミング
   * stateを変更した場合
   * propsを受け取っていて、propsの中身が変わった場合
   * 親のコンポーネントのstateが変更(再レンダリング)された場合
   * 再レンダリングの最適化も必要になってくる
   */
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // JSX技法
  // JavaScriptの中でHTMLを書くことを指す
  return (
    // JSX技法のルール
    // retrunするhtmlの内容は1つのタグで囲う必要がある
    // <div>
    // エラー回避のために<div>を使うと不必要な時ある。。
    // そんな時に<React.Fragment>,<>
    <>
      {/* スタイルの当て方
      CSSで当てることも可能
      タグに直接充てることも可能
      関数を定義して中にCSSのプロパティを書くことも可能
      外側はjavasript書くよ～
      内側はJavaScriptのオブジェクト */}
      <h1 style={{ color: "blue" }}>hello!</h1>
      {/* <ColorfulMessage color="black" message="hey??" /> */}
      <ColorfulMessage color="black"> hey?? </ColorfulMessage>
      {/* 　propsはコンポーネントに渡す引数のようなもの
            表示内容を動的に換えるために使う
      　　　　color,messageがpropsで任意に決めてよい
      */}
      {/* <ColorfulMessage color="red" message="hey!!" /> */}
      <ColorfulMessage color="red"> hey!! </ColorfulMessage>
      {/* イベントの割り当て */}
      <button onClick={onClickCountUp}>Count Up!!</button>
      <p>{num}</p>
      <button onClick={onClickSwitchShowFlag}>on/off!</button>
      {faceShowFlag && <p>(・_・)</p>}
      {/* タグの中で扱うイベントやスタイルの名称が全てキャメルケース 
      {}はjavascriptとして認識  */}
    </>
    // </div>
  );
};

// 他のファイルでも使用することを明示
export default App;
