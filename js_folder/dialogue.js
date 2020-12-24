alert("Hello");

// prompt 機能は2つの引数を受け入れます:
// result = prompt(title[, default]);
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);

// result = confirm(question);
// confirm 関数は question と 2つのボタンをもつモーダルウィンドウを表示します。
let isBoss = confirm("Are you the boss?");
alert(isBoss);
