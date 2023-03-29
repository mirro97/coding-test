/**
 * 클로저 (closure)
 *
 * 함수가 선언된 환경의 스코프를 기억해 함수가 스코프 밖애서 실행될 때에도
 * 기억한 스코프에 접근할 수 있게 만드는 문법
 */

// 클로저 예시
function sayHi(name) {
  const greeting = "Hi, ";

  return function () {
    console.log(greeting + name, "!");
  };
}

const sujeong = sayHi("Su-Jeong");
const jonghee = sayHi("Jong-Hee");

sujeong();
jonghee();

// 은닉화 예시
function Counter() {
  let privateCounter = 0;

  function changeBy(value) {
    privateCounter += value;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
}

const counter = Counter();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

// 클로저 이해하기

// 문제가 있는 코딩
// : setTimeout 의 대기시간이 끝나 콜백함수가 실행되는 시점에는 이미 루프가 종료되어 i 는 5가 됨
function counting_issue() {
  let i;
  for (i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("!!", i);
    }, i * 100);
  }
}

// 해결
// let 을 사용하여 for문에서 선언한다. 블록 수준의 스코프라 매 루프마다 클로저가 생성되어 각 i 의 값이 유지될 수 있음
function counting() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log("??", i);
    }, i * 100);
  }
}

counting_issue();
counting();
