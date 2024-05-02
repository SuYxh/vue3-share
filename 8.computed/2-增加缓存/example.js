import { computed } from './computed.js';
import { reactive, effect, bucket } from './index.js';


/**
 *  effect嵌套 computed 测试
 */
// 创建响应式对象
const obj = reactive({ price: 100, num: 10 });

// 创建计算属性
const allPrice = computed(() => obj.price * obj.num);

effect(() => {
  console.log('effect', allPrice.value);
})

// 当 obj.num 改变时，effect函数应该被再次执行，当前却没有
obj.num = 20;


console.log('bucket', bucket);