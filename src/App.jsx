import React, { useEffect, useState } from "react";
// import ColorfulMessage from "./components/ColorhfulMessage";
// ↑好きな名前を付けれる　↓import元になければエラーとなる
import { ColorfulMessage } from "./components/ColorhfulMessage";

/* eslint react-hooks/exhaustive-deps: off*/
// ↑注意をしないようにする
// コンポーネント化
// reactは関数を使って画面の要素であるコンポーネントを表現していける
// reactはファイル形式がjsでも動くが
// reactのコンポーネントと示すためにjsxとした方が良い
// コンポーネントの命名は最初大文字、-_を使わない
const App = () => {
  // console.log("saisho");
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
   * コンポーネントの再レンダリングのタイミング
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

  /** 再レンダリングの注意点
   * 例としてcounterが3の倍数のときにだけ顔文字を出すようにする
   * Too many re-renders.というエラーが出る
   * numの初期値が0でif (num % 3 === 0)の中に入り
   * setFaceShowFlagでstateの変更があると再レンダリングされて
   * また上から実行されsetFaceShowFlagでまた再レンダリングという
   * ループに陥ってしまう…！！！
   */
  /**
   * useEffectの第2引数に配列を取る
   * []の場合は最初の1回のみ実行される
   * データ取りに行くときとかに使う
   * (stateが変わる度に取りに行っていたらパフォーマンス↓)
   * []の中の変数が注意されることがある
   * useEffet内で使用している変数が他にもあるけど良いか？の注意
   * 今回はnumのみ関心を持ちたい
   */
  useEffect(() => {
    if (num % 3 === 0) {
      // すでにtrueの場合はstateの変更をしない(Falseの場合は変更)
      faceShowFlag || setFaceShowFlag(true);
    } else {
      // すでにfalseの場合はstateの変更をしない(trueの場合は変更)
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  /**
   * 上記のようにすればエラーは消えるが、on/offボタンが聞かなくなる
   * ボタンを押下することでonClickSwitchShowFlagが動き
   * stateが変更される→上から再レンダリング
   * numは変わらないからボタンでT/Fを変えても
   * if (num % 3 === 0)で元に戻ってしまって動いてないように見える
   * ⇒useeffectを使う！！(関心の分離？)
   */

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

// 他のファイルでもAppを使用することを明示
export default App;
