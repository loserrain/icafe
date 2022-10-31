<template>
  <div class="wrapper">
    <!-- 導覽列 -->
    <header ref="app_header">
      <div class="logo-box">
        <router-link :to="{ name: 'home', path: '/' }">
          <img
            src="/img/logo.png"
            alt="Logo"
            class="logo-box__img"
            id="header__logo"
          />
        </router-link>
      </div>
      <nav-menu :links="nav_links" :open="nav_show == true"></nav-menu>
      <div class="nav__option" @click="toggleMenu">
        <div class="nav__hamburger"></div>
      </div>
    </header>

    <!-- 主區塊 -->
    <main>
      <transition
        name="fade"
        mode="out-in"
        @beforeEnter="beforeEnter"
        @afterEnter="afterEnter"
        appear
      >
        <!-- <keep-alive><router-view> </router-view></keep-alive> -->
        <router-view> </router-view>
      </transition>
    </main>

    <i-subscription-modal
      v-if="subscription_show == true"
      @close="subscription_show = false"
    ></i-subscription-modal>

    <a
      ref="subscription_modal"
      class="modal-btn subscription-modal"
      @click="toggleSubscriptionModal"
    >
      <font-awesome-icon :icon="['far', 'envelope']" />
    </a>

    <!-- 頁尾 -->
    <footer>
      <p>
        國立虎尾科技大學 高等教育深耕計畫 &copy; 2022
      </p>
    </footer>
  </div>
</template>

<script>
import iNavMenu from '@/components/NavMenu.vue'
import iSubscriptionModal from '@/components/SubscriptionModal.vue'
import links_iSimple from '@/assets/js/links.js'
export default {
  name: 'isimple',
  created() {
    window.addEventListener('scroll', this.onScrollPage, true)
  },
  mounted() {
    this.calcContentSectionHeight()
    this.$refs.subscription_modal.classList.add('subscription-modal--on-cover')
  },
  data() {
    return {
      nav_links: links_iSimple,
      nav_show: false,
      subscription_show: false,
      scrollPageNumber: 0,
      contentSectionHeight: 0,
    }
  },
  methods: {
    beforeEnter() {
      this.$root.$emit('scrollBeforeEnter')
    },
    afterEnter() {
      this.calcContentSectionHeight()
    },
    toggleMenu() {
      this.nav_show = !this.nav_show
    },
    toggleSubscriptionModal() {
      this.subscription_show = !this.subscription_show
    },
    onScrollPage() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.scrollPageNumber = Math.floor(scrollTop / this.contentSectionHeight)
    },
    calcContentSectionHeight() {
      let h = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )
      this.contentSectionHeight =
        Math.floor(h * 0.8) - this.$refs.app_header.offsetHeight
    },
  },
  watch: {
    scrollPageNumber(newNum) {
      const subModal = this.$refs.subscription_modal
      if (newNum === 0) {
        subModal.classList.add('subscription-modal--on-cover')
      } else {
        subModal.classList.remove('subscription-modal--on-cover')
      }
    },
  },
  components: {
    'i-subscription-modal': iSubscriptionModal,
    'nav-menu': iNavMenu,
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

section {
  .box {
    background: $color-light;
    border: $color-dark solid 2px;
    padding: 2rem;
    text-align: center;
    box-shadow: $shadow-default;
  }
}

.wrapper {
  > header {
    $header-min-height: 70px;
    $header-height: 7vh;
    box-shadow: $shadow-default;
    background-color: white;
    position: sticky;
    top: 0;

    height: $header-height;
    min-height: $header-min-height;

    display: grid;
    grid-template-rows: minmax($header-min-height, $header-height) 1fr;
    grid-template-columns: repeat(5, 1fr);

    @include for-mobile {
      min-height: 0px;
      grid-template-rows: minmax(auto, $header-height) 50vh;
    }

    z-index: 1000;
    > nav {
      grid-column: 4 / 6;
      grid-row: 1 / 2;
      @include for-mobile {
        grid-column: 1 / 6;
        grid-row: 2 / 3;
        overflow: hidden;
      }
    }
  }

  > main {
    display: grid;
    width: 100%;
    > section {
      width: inherit;
    }
  }
}

.logo-box {
  z-index: inherit;
  height: inherit;
  grid-column: 3 / 4;

  img {
    height: 100%;
    margin: 0 auto;
    object-fit: scale-down;
  }
}

.nav__option {
  $option-height: 50px;
  $option-width: 8vw;
  display: none;
  height: inherit;
  z-index: inherit;
  grid-column: 5 / 6;
  grid-row: 1 / 2;
  cursor: pointer;

  @include for-mobile {
    display: flex;
    min-height: inherit;
    align-items: center;
    justify-content: center;
  }

  .nav__hamburger {
    @include btn-hamburger($option-width, $option-width, #000, 3px);
  }
}

.subscription-modal {
  $color-sub_modal-dark: #6d6c6c;
  $color-sub_modal-light: lighten(#6d6c6c, 50);
  width: 64px;
  height: 64px;
  cursor: pointer;
  transition: 0.15s;
  position: fixed;
  top: 15%;
  left: 5%;
  z-index: 9998;

  border-width: 2px;
  border-style: solid;
  border-color: $color-sub_modal-dark;
  border-radius: 100%;
  > svg {
    margin: 0 auto;
    display: table;
    height: 100%;
    font-size: 2.3rem;
    color: $color-sub_modal-dark;
  }

  &--on-cover {
    border-color: $color-sub_modal-light;
    > svg {
      color: $color-sub_modal-light;
    }
  }
}

footer {
  margin-top: 2rem;
  background: $color-dark;
  color: $color-light;
  text-align: center;
  padding: 1.5rem 0 1.5rem 0;
  border: #333 solid;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
