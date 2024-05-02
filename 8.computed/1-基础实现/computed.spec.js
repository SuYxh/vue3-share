import { reactive } from "./index.js";
import { computed } from './computed';
import { describe, it, expect } from "vitest";

describe("computed", () => {
  it("base computed", () => {
    // 创建响应式对象
    const obj = reactive({ price: 100, num: 10 });

    const allPrice = computed(() => obj.price * obj.num);

    expect(allPrice.value).toBe(1000);
  });
});



