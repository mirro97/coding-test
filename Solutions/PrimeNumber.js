// 소수 구하기
// 1) O(n) 의 시간 복잡도를 가진 방법
function isPrime(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 2) O(sqrt(n)) 의 시간 복잡도를 가짐
function isPrime2(num) {
  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// 3) 에라토스테네스의 채 : 1 부터 N 까지 모든 소수를 구하는 경우 가장 효율적임
// O(n log  log n) 의 시간복잡도를 가짐
function getPrimeNumbers(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i++) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }
  return prime.filter(Boolean);
}

console.log(isPrime(17));
console.log(isPrime2(17));
console.log(getPrimeNumbers(10));
