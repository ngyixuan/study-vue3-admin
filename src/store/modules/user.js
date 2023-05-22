// import md5 from 'md5'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router, { resetRouter } from '@/router'
import { userLogin, getUserInfo } from '@/api/sys'
import { setTimeStamp } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      console.log('username', username, password)
      return new Promise((resolve, reject) => {
        userLogin({ username, password })
          .then((data) => {
            console.log(data.token)
            this.commit('user/setToken', data.token)
            router.push('/') // 保存登录时间
            setTimeStamp()
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    logout() {
      resetRouter()
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      router.push('/login')
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)

      return res
    }
  }
}
