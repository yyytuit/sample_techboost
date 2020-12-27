let firstName = null;
let lastName = null;
let nickName = "Supercoder";
// 最初の null/undefined でない値を表示します
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let heigh = null;
let width = null;
// 重要: 括弧を使用します
let area = (heigh ?? 100) * (width ?? 50);
alert(area); // 5000

// let x = 1 && 2 ?? 3; // Syntax error

let y = (1 && 2) ?? 3; // 動作します
alert(y); // 2

// height が null あるいは undefined であれば height=100 を設定します
height = height ?? 100;
