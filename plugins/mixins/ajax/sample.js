import Vue from 'vue'

const ajax = {
  methods: {
    ajx_sampleRequest ({ data, callback, catcher, final }) {
      this.ajx_sendReq({
        url: `${process.env.apiUrl}/sample/url`,
        method: 'post',
        data,
        callback,
        catcher,
        final
      })
    }
  }
}

Vue.mixin(ajax)
