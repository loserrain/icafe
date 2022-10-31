<template>
  <transition
    name="modal"
    appear
    appear-class="modal-enter"
    appear-active-class="modal-enter-active"
    appear-to-class="modal-enter-to"
  >
    <div class="modal-mask" @click="onModalMaskClick" name="modal-mask">
      <div class="modal-wrapper" name="modal-wrapper">
        <div class="modal-container">
          <div class="input-view" ref="inputView">
            <div class="input-view__header">
              <h1>訂閱電子報</h1>
            </div>

            <div class="input-view__body">
              <form class="email-form">
                <div class="email-form__input-box input-box">
                  <label class="input-box__label" for="email">E-MAIL</label>
                  <input
                    class="input-box__input"
                    placeholder="sophie@example.com"
                    type="email"
                    name="email"
                    maxlength="60"
                    v-model="sub_email"
                  />
                </div>
                <a
                  @click="onEmailFormSubmitClick"
                  class="email-form__btn-submit btn-submit"
                >
                  <p>送出</p>
                </a>
              </form>
            </div>

            <div class="input-view__footer">
              <slot name="footer"></slot>
            </div>
          </div>

          <div class="result-view" ref="resultView">
            <template v-if="sub_result == 'success'">
              <font-awesome-icon :icon="['fas', 'check']" />
              <h1>訂閱成功</h1>
            </template>
            <template v-else-if="sub_result == 'failed'">
              <font-awesome-icon :icon="['fas', 'times']" />
              <h1>發生錯誤</h1>
            </template>
          </div>
        </div>
        <a class="modal-btn-close" @click="onButtonCloseClick"></a>
        <!-- <a class="modal-btn-close" @click="onButtonCloseClick"></a> -->
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ISubscriModal',
  data() {
    return {
      sub_email: '',
      sub_result: 'failed',
    }
  },
  methods: {
    onModalMaskClick(e) {
      let target_name = e.target.getAttribute('name')
      if (target_name === 'modal-mask') {
        this.closeSubScribeModal()
      }
    },
    onEmailFormSubmitClick() {
      if (this.validEmail(this.sub_email)) {
        this.sub_result = 'success'
        this.$refs.inputView.classList.add('input-view--submitted')
        this.$refs.resultView.classList.add('result-view--submitted')
      } else {
        this.sub_result = 'failed'
      }
    },
    validEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.exec(email) !== null
    },
    onButtonCloseClick() {
      this.closeSubScribeModal()
    },
    closeSubScribeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss" scoped>
$modal-font-color: #6d6c6c;
.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-wrapper {
  position: relative;
  width: 70vh;
  height: 70vh;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 8px 1px rgba(104, 104, 104, 0.6);
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  @include for-mobile {
    width: 90vw;
    height: 90vw;
  }
}

.modal-container {
  display: grid;
  grid-template-columns: repeat(3, 40vh);
  grid-auto-rows: 1fr;
  position: absolute;
  text-shadow: 0px 0px 1px lighten($modal-font-color, 20);
  color: $modal-font-color;
}

.input-view {
  grid-column: 2 / 3;
  opacity: 1;
  &--submitted {
    grid-column: 1 / 2;
    opacity: 0;
  }
  &__header {
    > h1 {
      font-size: 3rem;
      margin: 0;
    }
  }
  &__body {
    .email-form {
      &__btn-submit {
        float: right;

        font-size: 1.1rem;
        line-height: 2rem;

        font-weight: bold;
        cursor: pointer;
        > p {
          transition: all 0.3s;
          &::after {
            content: '';
            width: 0px;
            height: 0px;
            display: inline-block;
            // border-width: 6px 0px 6px 10px;
            border-width: 0.47rem 0px 0.47rem 0.77rem;
            border-style: solid;
            border-color: transparent $modal-font-color;
            margin-left: 0.4rem;
            transition: inherit;
            // vertical-align: middle;
          }
          @include for-desktop {
            &:hover {
              text-shadow: 2px 2px 3px lighten($modal-font-color, 50);
              &::after {
                margin-left: 0.8rem;
                margin-right: -0.4rem;
              }
            }
          }
        }
      }
    }
    .input-box {
      &__label {
        display: block;

        font-size: 2rem;
        font-weight: bold;

        margin-bottom: 0.5rem;
      }
      &__input {
        width: 100%;
        line-height: 2rem;
        background-color: transparent !important;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-color: $modal-font-color;
        border-width: 0 0 3px 0;
        box-shadow: 0px 1px 0px lighten($modal-font-color, 20);
        color: darken($modal-font-color, 20) !important;
        transition: all 0.3s ease;
        &:focus {
          background-color: white !important;
        }
      }
    }
  }
}

.result-view {
  grid-column: 3 / 4;
  opacity: 0;
  &--submitted {
    grid-column: 2 / 3;
    opacity: 1;
  }
  > svg {
    font-size: 5rem;
    // margin: 0 auto;
    width: 100%;
  }
  > h1 {
    text-align: center;
  }
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-to,
.modal-leave {
  opacity: 1;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.6s ease-in-out;
}

.modal-btn-close {
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: all 0.6s ease;
  position: absolute;
  top: 10%;
  left: 80%;

  border: 2px solid $modal-font-color;
  border-radius: 100%;
  &::before,
  &::after {
    content: '';
    width: 70%;
    height: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background-color: $modal-font-color;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    transform: rotate(180deg);
  }
}
</style>
