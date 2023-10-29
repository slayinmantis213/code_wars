narc1 = 7
narc2 = 371
narc3 = 122
narc4 = 4887



def narcissistic(value):
    digits = len(str(value))
    numbers = list(str(value))
    total = 0
    for i in range(digits):
        total += int(numbers[i])**digits

    return total == value




print(narcissistic(narc1))
print(narcissistic(narc2))
print(narcissistic(narc3))
print(narcissistic(narc4))