const starItems = document.getElementsByClassName('star-item');

function mouseOverHandler(index, node) {
  for (let i = 0; i <= index; i++) {
    if (!starItems[i].classList.contains('hovered')) {
      starItems[i].classList.add('hovered');
    }
  }
}

function mouseOutHandler(index, node) {
  for (let i = 0; i <= index; i++) {
    if (starItems[i].classList.contains('hovered')) {
      starItems[i].classList.remove('hovered');
    }
  }
}

function clickHandler(index, node, event) {
  event.stopPropagation();
  for (let i = 0; i < starItems.length; i++) {
    if (i <= index && !starItems[i].classList.contains('selected')) {
      starItems[i].classList.add('selected');
    } else if (i > index) {
      starItems[i].classList.remove('selected');
    }
  }
}

function resetHandler(event, node) {
  for (let i = 0; i < starItems.length; i++) {
    starItems[i].classList.remove('selected');
  }
}

function Node(val) {
  this.val = val;
  this.next = null;
}

function myLinkedList() {
  this.head = null;
}

myLinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    return newNode;
  }
  let node = this.head;
  while (node.next) {
    node = node.next;
  }
  node.next = newNode;
  return newNode;
};

myLinkedList.prototype.remove = function (val) {
  if (this.head) {
    if (!this.head.next) {
      this.head = null;
      return this;
    }
    let currentNode = this.head;
    let fartherNode = this.head.next.next;
    while (fartherNode) {
      fartherNode = fartherNode.next;
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
  return this;
};

const newList = new myLinkedList();
newList.add(4);
newList.add(2);
newList.add(6);
newList.add(1);
newList.add(8);

console.log(newList);

const starWrapper = document.querySelector('.star-wrapper');

console.log(starWrapper);

starWrapper.addEventListener('click', function (e) {
  console.log(this, e.target);
});
