import { effect, reactive, bucket } from "./index.js";

// const arr = reactive([1, 2]);
// let flag;

// effect(function effectFn() {
//   flag = arr.includes(1);
//   console.log('effectFn', flag);
// });

// // expect(flag).toBe(true);

// arr[0] = 100;
// // expect(flag).toBe(false);


const obj = {}
const arr = reactive([obj]);
let flag;

effect(function effectFn() {
  flag = arr.includes(arr[0])
  console.log('effect', flag);
});

// expect(flag).toBe(true)

console.log(bucket);