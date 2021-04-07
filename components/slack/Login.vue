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
          >
            계정 생성
          </b-button>
        </div>
      </div>
    </header>
    <main>
      <div class="login-content">
        <h1>Slack에 로그인</h1>
        <div class="rectal-email">
          <strong>
            직장에서 사용하는 이메일 주소
          </strong>
          를 사용하는 것이 좋습니다.
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#loginContainer{
  header{
    padding: 48px 0 40px;
    width: 100%;
    display: flex;
    div{
      width: 100%;
      height: 39px;
    }
    .center-col{
      text-align: center;
      img{
        height: 39px;
      }
    }
    .right-col{
      display: flex;
      justify-content: flex-end;
      .join-text{
        text-align: right;
        font-size: .9em;
        padding-right: 40px;
        color: rgba(var(--sk_foreground_max_solid,97,96,97),1);
        .join-btn{
          margin-top: 10px;

        }
      }
    } // right-col END
  }
  main{
    max-width: 800px;    width: 100%;
    margin: 0 auto;
    .login-content{
      text-align: center;
      h1{
        display: inline-block;
        width: 100%;
        font-weight: 700;
        font-size: 4rem;
        line-height: 46px;
        text-align: center;
        letter-spacing: -.75px;
        margin-bottom: 40px;
      }
      .rectal-email{
          font-size: 1.5rem;
          line-height: 27px;
          margin-bottom: 50px;
          color: #454245;
          text-align: center;
      }

    }
  }
}

</style>
