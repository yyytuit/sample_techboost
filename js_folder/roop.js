// 3, 2, 1と表示し、0で終了する
let i = 3;
while (i) {
  alert(i--);
}

// 1 から 4までループ
let t = 0;
while (++t < 5) alert(t);

// 1 から 5までループ
let y = 0;
while (y++ < 5) alert(y);

// 0 から 4までループ
for (let p = 0; p < 5; ++p) alert(p);
for (let p = 0; p < 5; p++) alert(p);

for (let i = 2; i <= 10; ++i) {
  if (i % 2 == 0) {
    alert(i);
  }
}

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }
// 上記をwhileに変える
let k = 0;
while (k < 3) {
  alert(`number ${k}!`);
  k++;
}

//     100 より大きい数値を入力するプロンプトを書いてください。もし訪問者が別の数値を入力したら – 再び入力を訪ねます。
// ループは、訪問者が 100 より大きい値を入力するか、入力をキャンセル/空行の入力をするまで訪ねます。
// ここでは、訪問者は数値のみを入力すると仮定します。このタスクでは、非数値に対する特別な処理を実装する必要はありません。
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// 素数を変えす
let n = 10;
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }
  alert(i); // a prime
}
