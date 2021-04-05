import Vue from 'vue'
import { BootstrapVueIcons } from 'bootstrap-vue'
import jwtDecode from 'jwt-decode'

import VuejsDialog from 'vuejs-dialog'
import 'vuejs-dialog/dist/vuejs-dialog.min.css'

Vue.prototype.$bus = new Vue()
Vue.prototype.$jwt_decode = jwtDecode

Vue.use(BootstrapVueIcons)
Vue.use(VuejsDialog, { okText: '확인', cancelText: '닫기' })
