let x = 9999999999999999;
let y = BigInt("9999999999999999");
document.getElementById("nums").innerHTML = x + "<br>" + y;

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

document.getElementById("hex").innerHTML = hex + "<br>" + oct + "<br>" + bin;
/*
진법 : 숫자를 표현할 때  기준이 되는 숫자 체계
우리가 일상에서쓰는 건 10진법 0 ~ 9
2진수 : 0과 1 두개의 숫자만 사용
10진수 5 1x 2^2 + 0x2^1 + 1x20 101
자바스크립트에서 0거짓값 1진실값
0 오류 1 성공
*/ 