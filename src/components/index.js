import HelloWorld from "./HelloWorld.vue";
const components = [HelloWorld];

const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return;
  // debugger;

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };
