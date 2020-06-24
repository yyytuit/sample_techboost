class Animal
end

animal = Animal.new
p animal

class Animal
  def self.greet
    p "こんにちは!Animalです！"
  end

  def greet
    p "こんにちは!Animalのインスタンスです！"
  end

  def initialize
    @@counter += 1
  end

  @@counter = 0

  def self.get_counter
    p @@counter
  end

  # def name=(value)
  #   @name = value
  # end

  # def name
  #   @name
  # end
  attr_accessor :name
end

class Dog < Animal
  def self.bow
    p "BowBow"
  end
end

Animal.greet

animal = Animal.new
animal.greet
Animal.get_counter

Animal.new
Animal.get_counter

Animal.new
Animal.get_counter

Animal.new
Animal.get_counter

animal = Animal.new
animal.name = "サル"
p animal.name

animal2 = Animal.new
animal2.name = "ゾウ"
p animal2.name

p animal.name

Dog.greet
Dog.bow
