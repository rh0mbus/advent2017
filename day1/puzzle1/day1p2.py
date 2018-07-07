file = open('input.txt', ('r+'), encoding=('utf-8'))

lines = list()
numArr = list()

# Find the correct position for the circular halfway point
def findPos(current, size):
    if current < (size / 2):
        return abs(int((current + (size / 2))))
    else:
        return abs(int(((size / 2) - current)))

for line in file:
    lines.append(line)

# Convert to list of individual ints
for num in line:
    numArr.append(int(num))

# Index and accumulator
counter = 0
total = 0

# Process array
for num in numArr:
    if num == numArr[findPos(counter, len(numArr))]:
        total += num
    counter += 1

print(f'This is the total: {total}')
file.close()
