#my solution
def to_jaden_case(string):
    string = string.split()
    for i in range(len(string)):
        string[i]=string[i].capitalize()
    return " ".join(string)

print(to_jaden_case("How can mirrors be real if our eyes aren't real"))

#solution from code wars
def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())
