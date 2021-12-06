const outerCircle = documetnt.getElementById('');
const innerCircle = documetnt.getElementById('inner-circle');

function rotateInner() {
  const { top, left } = innerCircle.getBoundingClientRect();
}

setInterval(() => rotateInner(), 100);
