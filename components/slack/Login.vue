<template>
  <div id="loginContainer">
    <header>
      <div class="left-col" />
      <div class="center-col">
        <img src="@/assets/img/Login/slack_logo-ebd02d1.svg" alt="">
      </div>
      <div class="right-col">
        <div class="join-text">
          Slack을 처음 사용하시나요?<br>
          <b-button
            class="join-btn"
            variant="outline-success"
            @click="isUserJoin()"
          >
            계정 생성
          </b-button>
        </div>
      </div>
    </header>
    <main>
      <LoginContent v-if="!userJoin" />
      <JoinContent v-if="userJoin" @hideJoin="hideJoinContent" />
    </main>
  </div>
</template>

<script>
import LoginContent from './LoginContent'
import JoinContent from './JoinContent'
export default {
  components: {
    LoginContent,
    JoinContent
  },
  data () {
    return {
      userJoin: false
    }
  },
  methods: {
    isUserJoin () {
      this.userJoin = true
    },
    hideJoinContent () {
      console.log('test')
      this.userJoin = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/slack/UserLogin.scss';
</style>
