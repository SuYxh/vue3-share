// 存储副作用函数的桶
const bucket = new Set();

// 原始数据
const data = { name: 'dahuang', age: 18 };

// 对原始数据的代理
const obj = new Proxy(data, {
  // 拦截读取操作
  get(target, key) {
    // 将副作用函数 effect 添加到存储副作用函数的桶中
    bucket.add(effect);
    // 返回属性值
    return target[key];
  },
  // 拦截设置操作
  set(target, key, newVal) {
    target[key] = newVal;
    bucket.forEach(fn => fn());
    return true;
  }
});

// 以下为测试代码
// 副作用函数
function effect() {
  console.log(obj.age);
}

// 执行副作用函数，触发读取
effect();

// 1 秒后修改响应式数据
setTimeout(() => {
  obj.age = 23;
}, 1000);