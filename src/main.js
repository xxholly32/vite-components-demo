import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// can work
// import ui from "./components/index.js";
// cant work
import ui from "../lib/index.esm.js";

const app = createApp(App);
app.use(ui);
app.mount("#app");