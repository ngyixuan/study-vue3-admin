import i18n from '@/i18n'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import * as icons from '@element-plus/icons'

import './permission'
// 导入全局样式
import './style/index.scss'
// 导入 svgIcon
import installIcons from '@/icons'
import installDirective from '@/directives'
import installFilter from '@/filters'
const app = createApp(App)
Object.keys(icons).forEach((key) => {
  app.component(key, icons[key])
})
app.use(i18n)
installElementPlus(app)
installIcons(app)
installDirective(app)
installFilter(app)
app.use(store).use(router).mount('#app')
