//block sope and local scope


// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// if (true) {

//           let a = 10;
c = 1000;
// const b = 20;
//           var c = 30;
//           var c = 2000; // c has three values with var keyword but it give the recently assign value
// }

// console.log(a);
// console.log(b);
// console.log(c);

console.log(oneAdd(3)); //it does not throw error

function oneAdd(num) {
  return num + 1;
}
// console.log(oneAdd(3));

console.log(twoAdd(3)); //it shows an error because of hoisting
let twoAdd = function (num) {
  return num + 2;
};
// console.log(twoAdd(3));
