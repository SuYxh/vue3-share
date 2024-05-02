import { effect, reactive, bucket } from "./index.js";

const arr = reactive([1]);

effect(function effectFn() {
  console.log("effect", arr[0]);
});

// expect(mockFn).toHaveBeenCalledTimes(1);

arr.length = 0;
// expect(mockFn).toHaveBeenCalledTimes(2);

console.log(bucket);