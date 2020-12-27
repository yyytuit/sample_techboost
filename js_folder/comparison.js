alert('2' > 1); // true, 文字列 '2' は数値 2 になります
alert('01' == 1); // true, 文字列 '01' は数値 1 になります

alert(true == 1); // true
alert(false == 0); // true
alert('' == false); // true

alert(null === undefined); // false
alert(null == undefined); // true

alert("apple" > "pineapple");// false
alert(null == "\n0\n");// false
alert(null === +"\n0\n");// false
