// 1.콜백함수를 이용한 비동기 처리
// 1
console.log('1등!');
// 2
setTimeout(function() {
	console.log('2등!');
	setTimeout(function() {
	console.log('3등!');
	}, 2000);
}, 2000);
// 3
