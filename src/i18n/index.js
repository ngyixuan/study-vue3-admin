import { createI18n } from 'vue-i18n'
import mZhLocale from './lang/zh'
import mEnLocale from './lang/en'
import store from '@/store'
import { watch } from 'vue'
const messages = {
  en: {
    msg: {
      ...mEnLocale
    }
  },
  zh: {
    msg: {
      ...mZhLocale
    }
  }
}
// const locale = 'en'
/**
 * 返回当前 lang
 */
function getLanguage() {
  console.log(store.getters)
  return store && store.getters && store.getters.language
}

/**
 *
 * @param  {...any} cbs 所有的回调
 */
export function watchSwitchLang(...cbs) {
  watch(
    () => store.getters.language,
    () => {
      cbs.forEach((cb) => cb(store.getters.language))
    }
  )
}
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false, // 全局注入 $t 函数
  globalInjection: true,
  locale: getLanguage(),
  messages
})

export default i18n
