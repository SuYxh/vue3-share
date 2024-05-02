import { reactive, effect, bucket } from "./index.js";

// 创建响应式对象
const obj = reactive({ foo: 100 });

effect(function effectFn1() {
  console.log("effectFn1");
  for (const key in obj) {
    console.log(key);
  }
});

// 增加属性： 期待 effectFn1 函数执行
obj.bar = 2;

// 修改属性： 期待 effectFn1 函数不执行
obj.foo = 100;
