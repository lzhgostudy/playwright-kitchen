import DefaultTheme  from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./custom.css";
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
  }
}