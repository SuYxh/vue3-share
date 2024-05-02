import { reactive, effect, bucket } from "./index.js";

// 创建响应式对象
const obj = reactive({ foo: 100 });

effect(function effectFn1() {
  console.log("foo" in obj);
});

// 当我们触发删除操作后，effect 并不会执行，因为我们还并没有实现拦截删除。
delete obj.foo;

// 但是可以通过调试看到，已经被收集到了。
console.log(bucket);
