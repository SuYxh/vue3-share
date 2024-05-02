import { reactive, effect, bucket } from "./index.js";

// const obj = reactive({ foo: 1, bar: NaN });

// effect(function effectFn() {
//   console.log("effectFn");
//   console.log("foo", obj.foo);
//   console.log("bar", obj.bar);
// });

// obj.foo = 1;

// obj.bar = NaN;


const obj = {};
const proto = { bar: 1 };

const child = reactive(obj);
const parent = reactive(proto);

// 使用 parent 作为 child 的原型
Object.setPrototypeOf(child, parent);

effect(() => {
  console.log(child.bar); // 1
});
// expect(mockFn).toHaveBeenCalledTimes(1);

// 修改 child.bar 的值
child.bar = 2; // 会导致副作用函数重新执行两次
// expect(mockFn).toHaveBeenCalledTimes(2);

console.log(bucket);