<template>
  <transition
    name="modal"
    appear
    appear-class="modal-enter"
    appear-active-class="modal-enter-active"
    appear-to-class="modal-enter-to"
  >
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>

          <a class="modal-btn-close" @click="$emit('close')"></a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'IModal',
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transform-origin: center top;
}

.modal-wrapper {
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.modal-container {
  max-width: 960px;
  width: 60%;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  width: 100%;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: scaleY(0);
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
  transition: 0.6s;
  position: absolute;
  top: 0;
  left: 100%;
  &::before,
  &::after {
    content: '';
    width: 60%;
    height: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    background: #fff;
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

@media screen and (max-width: 1023.97px) {
  .modal-container {
    width: 100%;
  }
  .modal-btn-close {
    top: auto;
    left: auto;
    bottom: 100%;
    right: 0;
    &:hover {
      transform: rotate(180deg);
    }
  }
}
</style>
