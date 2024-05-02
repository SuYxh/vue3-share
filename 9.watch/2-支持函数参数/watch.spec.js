import { reactive } from "./index.js";
import { watch } from './watch.js';
import { describe, it, expect, vi } from "vitest";

describe("watch", () => {
  it("watch foo", () => {
    const mockFn = vi.fn();

    // 创建响应式对象
    const obj = reactive({ foo: 100 });

    watch(obj, () => {
      mockFn()
    });
    
    obj.foo ++

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("watch 多个属性", () => {
    const mockFn = vi.fn();

    // 创建响应式对象
    const obj = reactive({ foo: 100, bar: 200, age: 10 });

    watch(obj, () => {
      mockFn()
    });
    
    obj.bar ++

    obj.age ++

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('支持 getter 函数', () => {
    const mockFn = vi.fn();

    // 创建响应式对象
    const obj = reactive({ foo: 100, bar: 200, age: 10 });

    watch(() => obj.age, () => {
      mockFn()
    });
    

    obj.age ++

    expect(mockFn).toHaveBeenCalledTimes(1);
  })
});



