function test() {
  var c = 10;

  function foo(a) {
    let b = 8;
    const d = 10;
    return function bar() {
      return a + d + c;
    };
  }

  const func = foo(7);
  func();
}
test();
