import { effect, reactive, bucket } from "./index.js";

function handleForin(params) {
  const arr = reactive([1, 2]);

  effect(function effectFn() {
    console.log("for of");
    for (const key of arr) {
      console.log(key);
    }
  });

  // expect(mockFn).toHaveBeenCalledTimes(1);

  arr[2] = 100;
  // expect(mockFn).toHaveBeenCalledTimes(2);
}

function handleForof(params) {
  const arr = reactive([1, 2]);

  effect(function effectFn() {
    console.log("for of");
    for (const key of arr) {
      console.log(key);
    }
  });

  // expect(mockFn).toHaveBeenCalledTimes(1);

  arr[2] = 100;
  // expect(mockFn).toHaveBeenCalledTimes(2);
}

handleForof()

