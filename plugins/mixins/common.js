import Vue from 'vue'

const common = {
  data () {
    return {
    }
  },
  methods: {
    cmn_sampleFunction () {
      return '샘플 기능입니다.'
    }
  }
}

export default common

Vue.mixin(common)
