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

console.log(permutations('abc'));

class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

function Employee(id, name) {
  this.id = id;
  this.name = name;
}

Employee.prototype.getId = function () {
  return this.id;
};

Employee.prototype.getName = function () {
  return this.name;
};
