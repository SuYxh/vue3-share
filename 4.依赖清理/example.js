import { effect, reactive, bucket } from "./index.js";

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



/**
 * @description: 测试嵌套 effect 的场景
 * @return {*}
 */
function handleNestedEffect(params) {
  const obj = reactive({ foo: true, bar: true });
  let temp1, temp2;

  // effectFn1 嵌套了 effectFn2
  effect(function effectFn1() {
    console.log("effectFn1 执行");

    effect(function effectFn2() {
      console.log("effectFn2 执行");
      // 在 effectFn2 中读取 obj.bar 属性
      temp2 = obj.bar;
    });

    // 在 effectFn1 中读取 obj.foo 属性
    temp1 = obj.foo;
  });

  // 期待 effectFn1 执行
  obj.foo = false;

  // 期待 effectFn2 执行
  obj.bar = false;

  console.log(bucket);
}

depCleanTest();

handleNestedEffect()