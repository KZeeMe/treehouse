def ask(question)
    print question + " "
    gets.chomp
end

def price(quantity)
    quantity * 10
end

puts "Welcome to the widget store!"
answer = ask("How many widgets are you ordering?")
number = answer.to_i
total = price(number)
puts "For #{answer} widgets, your total is $#{ number * 10 }"