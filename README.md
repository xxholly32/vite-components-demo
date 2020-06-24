# cant resolve components after rollup build

i want use vite to build components library like elementui。

i built helloworld form rollup and used into vue and came a bug，warning message from browser：

```
Vue warn]: Invalid VNode type: Symbol(Fragment) (symbol)
  at <HelloWorld msg="Hello Vue 3.0 + Vite" >
  at <App>
warn @ vue.js:1054
```

main.js

```
// can work
// import ui from "./components/index.js";
// cant work
import ui from "../lib/index.esm.js";

const app = createApp(App);
app.use(ui);
app.mount("#app");
```

i debugger from here, find component had same attributes

components/index.js

```
const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return;
  // debugger;

  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
```
