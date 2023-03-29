/**
 * 클로저 (closure)
 *
 * 함수가 선언된 환경의 스코프를 기억해 함수가 스코프 밖애서 실행될 때에도
 * 기억한 스코프에 접근할 수 있게 만드는 문법
 */

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
