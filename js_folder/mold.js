let value = true;
alert(typeof value); // boolean

value = String(value); // 今、値は文字列の "true"
alert(typeof value); // string
alert("6" / "2");
let str = "123";
alert(typeof str); // string

let num = Number(str); // 数値の 123 になります
alert(typeof num); // number

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, 変換失敗

// 数値変換
alert(Number("   123   ")); // 123
alert(Number("123z"));      // NaN ("z" の読み込みでエラー)
alert(Number(true));        // 1
alert(Number(false));       // 0

// boolean変換
alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean("hello")); // true
alert(Boolean("")); // false
