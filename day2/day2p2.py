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

    for num in temp:
        index = 0
        while index < len(temp):
            if num is temp[index]:
                index += 1
                continue
            if(num % temp[index]) == 0:
                return num / temp[index]
            index += 1

quotients = list()
for line in line_array:
    quotients.append(process(line))

checksum = 0
for num in quotients:
    checksum += num

print(f'Checksum: {checksum}')
