function showMessage() {
  alert('Hello everyone!');
}
showMessage();
showMessage();

// 関数内のローカル変数の変数定義は関数内でのみ見えます。
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // ローカル変数
  alert(message);
}
showMessage(); // Hello, I'm JavaScript!
// alert(message); // <-- エラー! 変数は関数のローカルです

// 同様に、関数は外部変数にアクセスすることができます
let userName = 'John';
function showMesse() {
  let messe = 'Hello, ' + userName;
  alert(messe);
}
showMesse(); // Hello, John

// 関数は外部変数に対してフルアクセス権を持ちます。それを変更することもできます
let userName2 = 'John';
function showMessage2() {
  userName2 = "Bob"; // (1) 外部変数の変更
  let message2 = 'Hello, ' + userName2;
  alert(message2);
}
alert(userName2); // 関数呼び出しの前は John
showMessage2(); // Hello, Bob
alert(userName2); // Bob, 関数によって値が変更されました

// 外部の変数は、ローカル変数が存在しない場合にのみ使われます。
// そのため、let を忘れた場合、意図せず外部の変数を変更してしまう可能性があります。
// 同じ名前の変数が関数内に宣言されている場合は、外部変数を 隠します。
// 例えば、以下のコードでは関数はローカルの userName を使います。外部の userName は無視されます。
let userName3 = 'John';
function showMessage3() {
  let userName3 = "Bob"; // ローカル変数の宣言
  let message3 = 'Hello, ' + userName3; // Bob
  alert(message3);
}
// 関数は作られ独自の userName を使います
showMessage3(); // Hello, Bob
alert(userName3); // John, 変更されていません。関数は外部変数へアクセスしませんでした

// パラメータを使うことで、任意のデータを関数に渡すことができます(関数の引数 と呼ばれます)。
// 下の例では、関数は2つのパラメータを持っています: from と text です。
function showMessage4(from, text) { // 引数: from, text
  alert(from + ': ' + text);
}
showMessage4('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage4('Ann', "What's up?"); // Ann: What's up? (**)

// “デフォルト” の text を使いたい場合、= の後に指定することができます:
function showMessage5(from, text = "no text given") {
  alert(from + ": " + text);
}
showMessage5("Ann"); // Ann: no text given
showMessage5("Ann", "Hello!"); // Ann: Hello!

// 値の返却
function sum(a, b) {
  return a + b;
}
let result = sum(1, 2);
alert(result); // 3

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}
let age = prompt('How old are you?', 18);
if (checkAge(age)) {
  alert('Access granted');
} else {
  alert('Access denied');
}

function showPrimes(n) {
  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    alert(i); // a prime
  }
}
showPrimes(10)

function showPrimes2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);  // a prime
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
showPrimes2(10)


// checkage疑問符演算子 '?'
function checkAage2(age) {
  (age > 18) ? true : confirm('Do you have your parents permission to access this page?');
}

// checkage OR || を使うケース
function checkAge3(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

function min(n, m) {
  if (m > n) {
    return n
  } else {
    return m
  }
}
alert(min(2, 5))
alert(min(3, -1))
alert(min(1, 1))


// x の累乗 n を返す関数 pow(x,n) を書いてください。 つまり、 x をそれ自身で n 回掛け、その結果を返します
let x = +prompt('x?')
let number = +prompt('n?')
function pow(x, number) {
  let result = x;
  for (let i = 1; i < number; i++) {
    result *= x;
  }
  return result;
}
if (number <= 1) {
  alert(`Power ${number} is not supported,
use an integer greater than 0`);
} else {
  alert(pow(x, number));
}

// 関数と関数式
function sayHi() {   // (1) 作成
  alert("Hello");
}
let func = sayHi;    // (2) コピー
func(); // Hello     // (3) コピーの実行(動きます)!
sayHi(); // Hello    //

// コールバック関数
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert("You agreed.");
}
function showCancel() {
  alert("You canceled the execution.");
}
// 使用法: 関数 showOk, showCancel は ask の引数として渡されます
ask("Do you agree?", showOk, showCancel);

ask(
  "Do you agree?",
  function () { alert("You agreed."); },
  function () { alert("You canceled the execution."); }
);
