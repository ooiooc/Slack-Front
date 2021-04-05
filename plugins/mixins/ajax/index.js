import Vue from 'vue'

const ajax = {
  methods: {
    // ajax 전송 공통함수
    ajx_sendReq ({ url, method, data, callback, catcher, final }) {
      if (data) {
        this.$axios[method](
          url, JSON.stringify(data), {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.$store.state.userInfo.token}`
            }
          }).then((response) => { callback(response.data) })
          .catch((error) => { if (catcher) { catcher(error) } })
          .then(() => { if (final) { final() } })
      } else {
        this.$axios[method](
          url, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.$store.state.userInfo.token}`
            }
          }).then((response) => { callback(response.data) })
          .catch((error) => { if (catcher) { catcher(error) } })
          .then(() => { if (final) { final() } })
      }
    }
  }
}
Vue.mixin(ajax)
