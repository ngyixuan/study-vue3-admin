// import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
import { userLogin, getUserInfo } from '@/api/sys'
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
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    async getUserInfo(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    }
  }
}
