let sum = (a, b) => a + b;
/* アロー関数は次よりも短い形式です:
let sum = function(a, b) {
  return a + b;
};
*/
alert(sum(1, 2)); // 3

// 次と同じです
// let double = function(n) { return n * 2 }
let double = n => n * 2;
alert(double(3)); // 6

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");
welcome(); // ok now

// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }
// ask(
//   "Do you agree?",
//   function () { alert("You agreed."); },
//   function () { alert("You canceled the execution."); }
// );

// 上記をアロー関数に書き換える
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);
