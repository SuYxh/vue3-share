import { effect, reactive, bucket } from "./index.js";

/**
 * @description: 测试基础功能
 * @return {*}
 */
async function baseTest() {
  // 创建响应式对象
  const obj = reactive({ name: "dahuang", age: 18 });

  // 定义 effect 函数
  effect(() => {
    console.log("effect", obj.age);
  });

  // 更改 age 属性并等待
  setTimeout(() => {
    obj.age = 23;
  }, 1000);
  await new Promise((r) => setTimeout(r, 1100)); // 等待上述 setTimeout 完成

  // 更改 address 属性并等待
  setTimeout(() => {
    obj.address = "beijing";
  }, 2000);
  await new Promise((r) => setTimeout(r, 2100));

  // 验证 effect 没有因 address 改变而执行
  console.log("over");
}

/**
 * @description: 测试为什么使用 Reflect
 * @return {*}
 */
function whyUseReflect() {
  const obj = reactive({
    foo: 1,
    get bar() {
      return this.foo;
    },
  });
  effect(() => {
    console.log("effect", obj.bar);
  });
  // expect(consoleSpy).toHaveBeenCalledTimes(1);
  // 更改 foo 后期待 effect 执行，但是实际上并没有执行
  obj.foo++;
  // expect(consoleSpy).toHaveBeenCalledTimes(2);
  console.log('bucket', bucket);
}


// baseTest()
whyUseReflect()
