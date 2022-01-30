// "abc" => abc,acb,bac,bca,cab,cba

// "bc" => bc, cb

const permutations = (str) => {
  if (!str) {
    return [];
  }
  if (str.length === 1) {
    return [str];
  }

  let result = [];
  for (let i = 0; i < str.length; i++) {
    const strArr = str.split('');
    const currentLetter = strArr[i];
    const remainingLetters = permutations(
      strArr.filter((item, index) => index !== i).join('')
    );
    for (let i = 0; i < remainingLetters.length; i++) {
      const newLetter = currentLetter + remainingLetters[i];
      result.push(newLetter);
    }
  }

  return result;
};

function getData(data) {
  console.log('input', data);
  const input = data.split('\n');

  const secondLine = input[1].split(' ');
  const thirdLine = input[2].split(' ');

  const arr = secondLine || [1, 0, 3, 6, 2, 5];
  const min = thirdLine[0] || 1;
  const max = thirdLine[1] || 3;
  const fourthLine = Number(input[3]);
  let i = 0;
  while (i < fourthLine) {
    const day = Number(input[4 + i]);
    console.log(getPeopleCount(arr, min, max, day));
    i++;
  }
}

function getPeopleCount(arr, min, max, day) {
  const minRange = day - max - 1;
  const maxRange = day - min - 1;
  let ranges = [];
  if (maxRange < 0) {
    return 0;
  } else if (minRange < 0) {
    ranges = [0, maxRange];
  } else {
    ranges = [minRange, maxRange];
  }
  return arr
    .slice(ranges[0], ranges[1] + 1)
    .reduce((acc, item) => acc + Number(item), 0);
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var std_input = '';
process.stdin.on('data', function (input) {
  std_input += input;
});
process.stdin.on('end', function () {
  getData(std_input);
});

// getData('6\n1 0 3 6 2 5\n1 3\n4\n1\n2\n6\n4');
