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
        <div class="input-content">
          <div class="api-login-btns">
            <div class="google-btn">
              <b-button
                id="Gbtn"
                variant="outline-success"
              >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="c-third_party_auth__icon"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></g></svg>
                Google을(를) 사용하여 로그인
              </b-button>
            </div>
            <!-- <div class="apple-btn">
              <b-button
                id="Abtn"
                variant="outline-dark"
              >
                <svg class="c-third_party_auth__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.16 -2.38419e-07C7.8 0.56 6.9 2.1 6.86 4.14C7.76 4.06 8.27 3.96 8.99 3.23C9.84 2.37 10.22 1.26 10.22 0.43C10.22 0.219999 10.2 0.129999 10.16 -2.38419e-07ZM10.33 3.84C9.86 3.84 9.28 3.95 8.59 4.19C7.94 4.42 7.46 4.54 7.16 4.54C6.92 4.54 6.46 4.43 5.77 4.23C5.07 4.03 4.47 3.92 3.99 3.92C1.69 3.92 1.19209e-07 6.11 1.19209e-07 9.22C1.19209e-07 10.86 0.49 12.58 1.48 14.35C2.47 16.12 3.49 17 4.5 17C4.84 17 5.29 16.89 5.83 16.65C6.36 16.41 6.84 16.32 7.26 16.32C7.69 16.32 8.2 16.43 8.77 16.64C9.39 16.87 9.85 17 10.18 17C11.9 17 13.48 14.12 14 12.41C12.8 12.05 11.72 10.53 11.72 8.85C11.72 7.3 12.46 6.44 13.52 5.53C12.82 4.66 11.93 3.84 10.33 3.84Z" fill="#1D1C1D" /></svg>
                Apple을(를) 사용하여 로그인
              </b-button>
            </div> -->
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
              placeholder="userPassword"
              type="password"
            />
          </div>
          <div class="login-btn">
            <b-button
              id="loginBtn"
              :disabled="!emailState"
            >
              이메일로 로그인
            </b-button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_email: null,
      user_pwd: null
    }
  },
  computed: {
    emailState () {
      const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      return re.test(this.user_email)
    }
  }

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
        font-size: .85em;
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
        font-size: 3rem;
        line-height: 46px;
        text-align: center;
        letter-spacing: -.75px;
        margin-bottom: 10px;
      }
      .rectal-email{
          font-size: 1.3rem;
          line-height: 27px;
          margin-bottom: 50px;
          color: #454245;
          text-align: center;
      }
      .input-content{
        width: 400px;
        margin: 0 auto;
        .api-login-btns{
          .google-btn{
            width: 400px;
            height: 44px;
            margin: 24px auto 0;
            #Gbtn{
              font-size: 1.2em; font-weight: 700;
              width: 100%;
              border: 2px solid #5370f0;
              svg{
                margin-right: 12px;
                width: 18px;
                height: 18px;
              }
            }
          } // google-btn END
            .apple-btn{
            width: 400px;
            height: 44px;
            margin: 24px auto 0;
              #Abtn{
                font-size: 1.2em; font-weight: 700;
                width: 100%;
                border: 2px solid #000;
              }
              svg{
                margin-right: 12px;
                width: 18px;
                height: 18px;
              }
          } // apple-btn END
        } // ap-login-btns END
        .or-text{
          margin: 24px 0;
          display: flex;
          align-items: center;
          .bar{
            flex-grow: 1;
            margin: 0;
            border: none;
            border-top: 1px solid #ddd;
            clear: both;
          }
          .text-content{
            padding: 0 20px;
          }
        } // or-text END
        .email-input{
          #userEmail{
            padding: 11px 12px 13px;
            height: 44px;
            font-size: 18px;
            line-height: 1.33333333;
          }
          .live-text{
            text-align: left;
            margin: 0 0 15px;
          }
          #userPassword{
            padding: 11px 12px 13px;
            height: 44px;
            font-size: 18px;
            line-height: 1.33333333;
            margin: 0 0 20px;
            :focus{
              outline: none;
            }
          }
        }
        .login-btn{
          #loginBtn{
            width: 100%; height: 44px; min-width: 96px;
            font-size: 18px; font-weight: 900;
            padding: 0 16px 3px; border: none;
            color: #fff; background-color: #4a154b;
          }
        }
      } // input-content END
      .success{
        margin: 0 0 15px;
      }
    }
  }
}

</style>
