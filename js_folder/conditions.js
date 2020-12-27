let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
    (age < 100) ? 'Greetings!' :
      'What an unusual age!';
alert(message);

if (age < 3) {
  message = 'Hi, baby!';
} else if (a < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}

if ("0") {
  alert('Hello');
}

let begin = prompt('Whats the “official” name of JavaScript?', '');
if (begin == 'ECMAScript') {
  message = 'Right!';
} else {
  message = 'You dont know? “ECMAScript”';
}
alert(message);

let val = prompt('code?', '');
if (val > 0) {
  message = '1以上';
} else if (val < 0) {
  message = '-1以下';
} else {
  message = '0';
}
alert(message);

let a = 1
let b = 2
let result = (a + b < 4) ? 'Below' : 'Over';
alert(result);

let login = prompt('who are you?', '')
let info = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
    (login == '') ? 'No login' : ' ';
alert(info);
