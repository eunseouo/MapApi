const arr = [5,6,7,8];

for (let index in arr) {
	console.log(arr[index]);
}

for (let item of arr) {
	console.log(item);
}

const jsonArr = {email: "dummy", password: "a123"};

for (let key in jsonArr) {
	console.log(jsonArr[key]);
}