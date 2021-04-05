// 이곳에 토큰과 사용자 정보를 저장합니다.
export const state = () => ({
  token: '',
  userInfo: null
})

export const mutations = {
  setToken (state, { token }) {
    state.token = token
  },
  setUserInfo (state, { userInfo }) {
    Object.assign(state.userInfo, userInfo)
  }
}
