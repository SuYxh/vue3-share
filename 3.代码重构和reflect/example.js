import { effect, reactive, bucket } from "./index.js";

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
  obj.foo++;
  // expect(consoleSpy).toHaveBeenCalledTimes(2);
  console.log("bucket", bucket);
}

/**
 * @description: 测试依赖清理
 * @return {*}
 */
function depCleanTest() {
  // 依赖清理测试
  const obj = reactive({ name: "dahuang", age: 18, isStudent: true });

  // isStudent 为 true 时，依赖 name
  effect(() => {
    const info = obj.isStudent ? obj.name : obj.age;
    console.log("effect", info);
  }); 

  // 修改 name， effect 执行, 打印 name
  obj.name = "jarvis";
  // debugger;
  // 修改 isStudent 为 false，effect 执行， 打印 age
  obj.isStudent = false;
  // 修改 name， effect应该不执行
  obj.name = "iron man";
  // 修改 age， effect 执行，打印 age
  // obj.age = 20;

  // console.log('bucket', bucket);
}


// whyUseReflect();

depCleanTest()
