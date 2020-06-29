# Ruby01 はじめてのRuby

puts "hello ruby !!!!!!"

# 課題

puts "“Branding Engineer”"
puts "“Hello”"
puts "“HR Tech”"

puts 1
puts 2
puts 3

a = [1,2,3]
a.each {|n| puts n}
a.each {|n| p n}
a.each {|n| print n}

# Ruby02 Rubyの基本的なデータ型をマスターしていく

#文字列

puts "hello ruby !!!!!!"
puts "hello branding engineer"
puts "hello tech boost"

puts "hello ruby !!!!!!" + "hello branding engineer" + "hello tech boost"

# 数値

puts 2

puts 2 + 2 #足し算
puts 2 - 2 #引き算
puts 2 * 2 #掛け算
puts 2 / 2 #割り算


puts "1" + "1"

puts 1 + 1

# 変数

date = 20170101
p date

# 配列

fruits1 = "リンゴ"
fruits2 = "メロン"
fruits3 = "バナナ"
fruits4 = "イチゴ"

fruits = ["リンゴ", "メロン", "バナナ", "イチゴ"]

array = [1,2,3,4]

p array[0]
p array[1]
p array[2]
p array[3]

# ハッシュ

fruits = ['りんご', 100]

fruits = { name: 'りんご', price: 100 }
p fruits[:name]
p fruits[:price]

# メソッド

p "りんご".length

p "ruby".upcase
p "12".to_i
p "ruby"[1]
p "hello,ruby,world".split(',')

p 1 + 1
p 12.to_s
p 1.next
p 1.pred
p 1.zero?
p 1.nonzero?

# メソッドの定義

def print_apple
  p "りんご"
end

print_apple

def print_fruits(name)
  p name
end

print_fruits("リンゴ")
print_fruits("バナナ")

# 課題

# 「初めてのRuby」という文字列を出力するコードを書いてください。

puts '初めてのRuby'

# 「Ruby」と「始めました」という2つの文字列を連結して出力するコードを書いてください。

puts 'Ruby' + '始めました'

# 「3 + 3」「3 - 3」「3 * 3」「3 / 3」を計算して出力するコードを書いてください。

 puts 3 + 3
 puts 3 - 3
 puts 3 * 3
 puts 3 / 3

 # 「1,2,3,4」と4つのデータを持つ配列を定義してみましょう。

 [1,2,3,4]

 # 4で定義した配列を「num_array」と言う変数に代入してください。

  num_array = [1,2,3,4]
  p num_array

# 自分の名前、生年月日、血液型をハッシュで表して定義してみましょう。

  profile = {name: 'hiro', birth_day: '10/24', blood: 'B'}

# 渡された文字列に「ruby」を足して返すメソッドを作成しましょう。

  def plus_ruby(st)
    st + "ruby"
  end
  p plus_ruby("like")
  p plus_ruby("yhee")

# 渡された数字に1を足して返すメソッドを作成しましょう。

  def plus_one(num)
    num + 1
  end
  p plus_one(4)
  p plus_one(10)

# Ruby03 条件分岐、繰り返し（if, for, each, while）

  num = 3
  if num > 0
    p '3は0以上です。'
  end

  num = -2
  if num > 0
    p '3は0以上です。'
  end

  num = 3
  if num > 0
    p '条件式は正しいです。'
  else
    p '条件式は正しくないです。'
  end

  num = -2
  if num > 0
    p '条件式は正しいです。'
  else
    p '条件式は正しくないです。'
  end

  n = 4
  if n == 3
    p 'nは3です'
  elsif n == 4
    p 'nは4です'
  else
    p 'nは3でも4でもないです'
  end

  p 3 > 0
  p 3 < 0

  if true
    p '条件式は正しいです'
  end

  if false
    p '条件式は正しいです'
  end

  if n >= 3 && n <= 5
  end

  if n <= 3 || n >= 5
  end

  for num in 1..4 do
    p num
  end

  [1,2,3,4].each do |num|
    p num
  end

  num = 0
  while num < 5 do
    p num
    num += 1
  end

# 変数nが3の時のみ「nは3です」と出力させるコードを書いてください。

  n = 3
  if n == 3
    p 'nは3です'
  end

# 変数nが3、または4の時に変数は「3、4のどちらかです」と出力させるコードを書いてください

  n = 4
  if n == 3 || n == 4
    p '3、4のどちらかです'
  end

# 変数nが3の時は「nは3です」、4の時は「nは4です」と出力させるコードを書いてください。
  n = 4
  if n == 3
    p 'nは3です'
  elsif n == 5
    p 'nは4です'
  end

# for文を用いて5回「こんにちは」と出力してください。

  for num in 0..4 do
   p 'おはよう'
  end

# each文を用いて「1〜5」の数字を出力してください。

  (1..5).each do |n|
    p n
  end

# 変数が2の時は「2です」、3の時は「3です」それ以外の時は「それ以外です」と出力するプログラムを作成してください。

  n = 5
  if n == 2
    puts '2です'
  elsif n == 3
    puts '3です'
  else
    puts 'それ以外です'
  end
