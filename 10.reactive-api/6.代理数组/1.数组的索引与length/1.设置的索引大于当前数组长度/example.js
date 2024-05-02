import { effect, reactive, bucket } from "./index.js";

const arr = reactive([1]);

effect(function effectFn() {
  console.log("effect", arr.length);
});

// expect(mockFn).toHaveBeenCalledTimes(1);

arr[1] = 2;
// expect(mockFn).toHaveBeenCalledTimes(2);

console.log(bucket);

setTimeout(() => {
  arr[2] = 3;
}, 2000);
