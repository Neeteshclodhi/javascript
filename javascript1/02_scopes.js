//isi ko kabhi had tak closure bhi kaha jata hai andar ke function bahar ke variables ka use kar sakte hai
// function one() {
//           const name = "neetesh";
//           console.log(name + "rr");
          
//           function two() {
//                     const instaid = "lodhi@123";
//                     console.log(name);

//                     function three() {
//                               const surname = "lodhi";
//                               console.log(instaid);
//                               console.log(name);
//                     }
//                     three();
//           } 
//           // console.log(instaid);
         
//           two();
// }
// one();


// console.log(oneAdd(3)); //it does not throw error

// function oneAdd(num) {
//   return num + 1;
// }
// // console.log(oneAdd(3));

// console.log(twoAdd(3)); //it shows an error because of hoisting
// let twoAdd = function (num) {
//   return num + 2;
// };
// // console.log(twoAdd(3));

//closure and lexical scoping

// function f1() {
//           const channel = "youtube";
//           function f2() {
//                     const hobby = "cricket";
//                     console.log(channel);
//           }
//                     function f3() {
//                       // console.log(hobby);  //bhai bhai cannot share the variables and functions
//                     }
//           f2()
//           f3()
// }
// f1()

//2.closure

// function outerFunction(outerVariable) {
//   return function innerFunction(innerVariable) {
//     console.log(`Outer Variable: ${outerVariable}`);
//     console.log(`Inner Variable: ${innerVariable}`);
//   };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");


// function counter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// const increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3



// function createSecret(secret) {
//     return {
//         getSecret: function() {
//             console.log(`Secret: ${secret}`);
//         },
//         setSecret: function(newSecret) {
//             secret = newSecret;
//         }
//     };
// }

// const secretKeeper = createSecret('initial secret');
// secretKeeper.getSecret(); // Secret: initial secret
// secretKeeper.setSecret('new secret');
// secretKeeper.getSecret(); // Secret: new secret

