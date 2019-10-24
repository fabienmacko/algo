# This time no story, no theory. The examples below show you how to write function accum:

# Examples:

# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.

def accum(s):
  string = ''
  counter = 0
  for l in list(s):
    counter+=1
    i = 0
    while i < counter:
      if i == 0:
        string += l.upper()
      else:
        string += l.lower()
      i+=1
    if counter == len(s):
      break
    else:
      string += '-'
  return string