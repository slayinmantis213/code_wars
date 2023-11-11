
#1. If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Additionally, if the number is negative, return 0.

# Note: If the number is a multiple of both 3 and 5, only count it once.

# my solution

def solution(number):
    sum = 0
    if number < 0:
        return sum
    number -= 1
    while number > 0:
        if number % 5 == 0 or number % 3 == 0:
            sum += number
        number -= 1

    return sum


# similar cw solution
def solution(number):
    sum = 0
    for i in range(number):
        if (i % 3) == 0 or (i % 5) == 0:
            sum += i
    return sum

# concise cw solution
def solution(number):
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)


#2. In this kata you will create a function that takes a list of non-negative integers and strings and
# returns a new list with the strings filtered out.

# Example
# filter_list([1,2,'a','b']) == [1,2]
# filter_list([1,'a','b',0,15]) == [1,0,15]
# filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


# my solution
import numbers
def filter_list(l):
    return list(filter(lambda e: isinstance(e, numbers.Number), l))


# cw solution
def filter_list(l):
    return [i for i in l if not isinstance(i, str)]


#3. Digital root is the recursive sum of all the digits in a number.

# Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until
# a single-digit number is produced. The input will be a non-negative integer.

# Examples
#     16  -->  1 + 6 = 7
#    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
# 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
# 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

# my solution
def digital_root(n):
    s = 0
    for i in str(n):
        s += int(i)
    if s >= 10:
        return digital_root(s)
    else:
        return s

# cw solution
def digital_root(n):
    return n if n < 10 else digital_root(sum(map(int, str(n))))


#4. Task
# You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

# Examples
# [7, 1]  =>  [1, 7]
# [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

#my solution 0n**2
def sort_array(source_array):
    odds = []
    for num in source_array:
        if num % 2 != 0:
            odds.append(num)

    if len(odds) <= 1:
        return source_array

    odds = sorted(odds)

    idx = 0
    new_arr = []
    for num in source_array:
        if num % 2 != 0:
            new_arr.append(odds[idx])
            idx += 1
        else:
            new_arr.append(num)

    return new_arr


print(sort_array([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
# expected: [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


# cw similar but better
def sort_array(source_array):

    odds = []
    answer = []

    for i in source_array:
        if i % 2 > 0:
            odds.append(i)
            answer.append("X")

        else:
            answer.append(i)

    odds.sort()

    for i in odds:
        x = answer.index("X")
        answer[x] = i
    return answer

# cw succinct
def sort_array(arr):
    odds = sorted((x for x in arr if x % 2 != 0), reverse=True)
    return [x if x % 2 == 0 else odds.pop() for x in arr]
