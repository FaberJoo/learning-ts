function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	// if (typeof n1 !== 'number' || typeof n2 !== 'number') {
	//   throw new Error('Incorrect input!');
	// }
	const result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return result;
	}
}

// 상수 혹은 변수에 초깃값을 할당하는 경우 TS가 자동으로 타입을 추론하지만
// 변수를 사용하여 초깃값 할당하지 않을 경우 타입을 명시해주는 것이 좋음.
let number1: number;
number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
