import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as icons from '@element-plus/icons'
// 导入全局样式
import './style/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
installElementPlus(app)
installIcons(app)
app.use(store).use(router).mount('#app')
