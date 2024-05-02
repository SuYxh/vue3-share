import "./style.css";

window.addEventListener("hashchange", () => {
  let hash = location.hash.replace("#", "");
  hash = decodeURIComponent(hash)
  console.log('hash', hash);
  switch (hash) {
    case "1响应式数据":
      import("./1.响应式系统的基本实现/index.js");
      break;
    case "2MVP模型":
      import("./2.响应式系统完善/index.js");
      break;
    default:
      console.log("未知页面");
  }
});

document.querySelector("#app").innerHTML = `
  <div>
    <a href="#1响应式数据">1响应式数据</a>
    <a href="#2MVP模型">2MVP模型</a>
  </div>
`;