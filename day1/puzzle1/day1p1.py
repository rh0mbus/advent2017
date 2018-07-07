file = open('input.txt', ('r+'), encoding=('utf-8'))

lines = list()
numArr = list()

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
    if counter < len(numArr) - 1:
        if num == numArr[counter + 1]:
            total += num
    counter += 1

# Check for circular case
if numArr[-1] == numArr[0]:
    total += numArr[-1]

print(f'This is the total: {total}')
file.close()
