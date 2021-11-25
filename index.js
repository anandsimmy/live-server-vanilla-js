let a = {
  name: 'Jon',
  fname: {
    title: 'Got',
    hello: [3, 4, { 1: 2 }],
  },
  arr: [1, 2, {}, [5, 6]],
};

//deepclone implementation
const deepClone = (param) => {
  if (Array.isArray(param)) {
    const newArr = [];
    param.forEach((item, index) => {
      if (Array.isArray(item) || typeof item === 'object') {
        newArr[index] = deepClone(item);
      } else {
        newArr[index] = item;
      }
    });
    return newArr;
  } else if (typeof param === 'object') {
    const newObj = {};
    Object.keys(param).forEach((key) => {
      if (Array.isArray(param[key]) || typeof param[key] === 'object') {
        newObj[key] = deepClone(param[key]);
      } else {
        newObj[key] = param[key];
      }
    });
    return newObj;
  }
};

let b = deepClone(a);

const person = {
  firstName: '',
  lastName: '',
  setName(name) {
    const self = this;
    function splitName(n) {
      self.firstName = n.split(' ')[0];
      self.lastName = n.split(' ')[1];
    }
    splitName(name);
  },
};

person.setName('john doe');

function Counter() {
  let count = 1;
  this.increment = function () {
    count++;
    console.log(count);
  };
  this.decrement = function () {
    count--;
    console.log(count);
  };
}

const c = new Counter();
const d = new Counter();

console.log(c);
c.increment();
c.decrement();
c.increment();
d.increment();
