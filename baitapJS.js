// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
// Input: [0, 5, 4, 2, 8]
// Output: 19
var input = [0, 5, 4, 2, 8]
var tong = 0;
for(let i = 0; i < input.length; i++){
    tong += input[i];
}
console.log(tong);


// bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
// Input: const person = [
// 	{ name: 'John', age: 24 },
// 	{ name: Pete, age: 25 },
// 	{ name: Mary', age: 28 }
// ]
// Output: ['John', 'Pete', 'Mary'].

const person = [
     	{ name: 'John', age: 24 },
     	{ name: 'Pete', age: 25 },
     	{ name: 'Mary', age: 28 }
    ];
const newArr = [];
for(let i = 0; i < person.length; i++) {
    newArr.push(person[i]['name'])
}
console.log(newArr);


// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
// Input:	arr1 = ['John', 'Pete', 'Mary']
// 	arr2 = ['Mary', 'Henry', 'Harry']

// Output: ['John', 'Pete', 'Mary', 'Henry']

const arr1 = ['John', 'Pete', 'Mary']
const arr2 = ['Mary', 'Henry', 'Harry']
const arr3 = arr1.concat(arr2)
const arr4 = new Set(arr3);
console.log(arr4)
