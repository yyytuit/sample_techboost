class People
  def initialize
    p "Peopleのインスタンスが作られました"
  end

  def self.intoro
    p "私は#{self}クラスです"
  end

  attr_accessor :name
end

class ChildPeople < People
  def self.beem
    p '私は目からビームが出せます'
  end
end

human = People.new
People.intoro
human.name = '人'
p human.name
ChildPeople.beem
ChildPeople.intoro
