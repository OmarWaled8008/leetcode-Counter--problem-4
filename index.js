var createCounter = function (init) {
  let a = init;
  function increment() {
    return ++a;
  }
  function decrement() {
    return --a;
  }
  function reset() {
    return (a = init);
  }
  return { increment, decrement, reset };
};

let init = document.getElementById("init");
init.addEventListener("keyup", function () {
  let counter = createCounter(init.value);
  // console.log(init.value);
  // console.log(counter);
  // console.log(counter.increment());
  // console.log(counter.increment());
  // console.log(counter.decrement());
  // console.log(counter.reset());
  document.getElementById("result").innerHTML = counter.reset();
  document.getElementById("increment").addEventListener("click", function () {
    document.getElementById("result").innerHTML = counter.increment();
  });
  document.getElementById("decrement").addEventListener("click", function () {
    document.getElementById("result").innerHTML = counter.decrement();
  });
  document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("result").innerHTML = counter.reset();
  });
});
