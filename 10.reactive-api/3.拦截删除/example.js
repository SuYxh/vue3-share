import { reactive, effect, bucket } from "./index.js";

// 创建响应式对象
const obj = reactive({ foo: 100 });

effect(function effectFn1() {
  console.log('effect', obj.foo);
})

// 期待 effect 执行
delete obj.foo

