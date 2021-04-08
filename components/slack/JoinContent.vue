<template>
  <div class="login-content">
    <h1>Slack에 회원가입</h1>
    <div class="rectal-email">
      <strong>
        직장에서 사용하는 이메일 주소
      </strong>
      를 사용하는 것이 좋습니다.
    </div>
    <div class="input-content">
      <div class="api-login-btns">
        <div class="google-btn">
          <b-button
            id="Gbtn"
            variant="outline-success"
          >
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="c-third_party_auth__icon"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg>
            Google을(를) 사용하여 회원가입
          </b-button>
        </div>
      </div>
      <div class="or-text">
        <hr class="bar">
        <div class="text-content">
          또는
        </div>
        <hr class="bar">
      </div>
      <div class="email-input">
        <b-form-input
          id="userEmail"
          v-model="user_email"
          :state="emailState"
          :class="{success : emailState}"
          type="email"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="name@work-email.com"
        />
        <b-form-invalid-feedback id="input-live-feedback" class="live-text">
          Email형식에 맞춰서 작성해주세요.
        </b-form-invalid-feedback>
        <b-form-input
          id="userPassword"
          v-model="user_pwd"
          :state="pwdState"
          :class="{success : pwdState}"
          placeholder="userPassword"
          type="password"
          :aria-disabled="emailState"
        />
        <div v-if="!pwdState" class="regular_expression_pwd">
          <span>최소 8 자, 최소 문자, 숫자 및 특수 문자를 입력해주세요.</span>
        </div>
        <b-form-input
          id="userPasswordSame"
          v-model="user_pwd_same"
          :state="pwdSameState"
          type="password"
          aria-describedby="input-live-help input-live-pwd"
          placeholder="패스워드 확인"
        />

        <b-form-input
          id="userPhone"
          v-model="user_phone"
          placeholder="핸드폰 번로를 '-' 제외하고 작성해주세요."
          type="tel"
        />
      </div>
      <div class="join-btn-content">
        <b-button-group id="JoinBtnGroup">
          <b-button
            id="joinBtn"
            :disabled="!joinState"
          >
            회원가입
          </b-button>
          <b-button id="close" @click="hideJoinContent">
            취소
          </b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_email: null,
      user_pwd: '',
      user_pwd_same: null,
      user_phone: null
    }
  },
  computed: {
    emailState () {
      const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      return re.test(this.user_email)
    },
    pwdState () {
      const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/i
      return re.test(this.user_pwd)
    },
    pwdSameState () {
      return this.user_pwd === this.user_pwd_same
    },
    joinState () {
      return this.emailState && this.pwdState && this.user_phone !== null
    }
  },
  methods: {
    hideJoinContent () {
      this.$emit('hideJoin')
    },
    clearJoinForm () {
      this.user_email = null
      this.user_pwd = ''
      this.user_pwd_same = null
      this.user_phone = null
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/slack/UserLogin.scss';
</style>
