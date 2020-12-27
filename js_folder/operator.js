let apples = "2";
let oranges = "3";
alert(apples + oranges); // "23", 二項演算子プラスは文字列を結合します

let apple = "2";
let orange = "3";
// 二項演算子プラスの処理の前に、両方の値が数値に変換されます
alert(+apple + +orange); // 5

let counter = 2;
counter++;      // counter = counter + 1 と同じですがより短いです
alert(counter); // 3

let n = 2;
n += 5; // 今 n = 7 (n = n + 5 と同じ)
n *= 2; // 今 n = 14 (n = n * 2 と同じ)
alert(n); // 14

let a = (1 + 2, 3 + 4);
alert(a); // 7 (3 + 4 の結果)

alert("" + 1 + 0);// 10
alert("" - 1 + 0);// -1
alert(true + false);// 1
alert(6 / "3");// 2
alert("2" * "3");// 6
alert(4 + 5 + "px");// 9px
alert("$" + 4 + 5);// $45
alert("4" - 2);// 2
alert("4px" - 2);// NaN
alert(7 / 0);// Infinity
alert("  -9  " + 5);// -9 5
alert("  -9  " - 5);// -14
alert(null + 1);// 1
alert(undefined + 1);// NaN
alert(" \t \n" - 2);// -2
