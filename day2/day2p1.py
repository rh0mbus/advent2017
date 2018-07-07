file = open('input.txt', 'r+', encoding='utf-8')

lines = list()
line_array = list()

for line in file:
    lines.append(line.rstrip())

for line in lines:
    line_array.append(line.split('\t'))

file.close()

def process(line):
    temp = list()
    for num in line:
        temp.append(int(num))
    return max(temp) - min(temp)

total = 0
for line in line_array:
    total += process(line)

print(f'Checksum: {total}')
