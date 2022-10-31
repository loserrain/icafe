<template>
  <nav class="nav-menu" ref="navMenu">
    <ul class="nav-menu__list">
      <li
        class="nav-menu__item"
        v-for="(item, index) in links"
        :key="index"
        @click="onLinkClicked"
      >
        <router-link :to="item.route">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: ['links', 'open'],
  watch: {
    open(isOpen) {
      // let menu = this.$refs.navMenu
      if (isOpen === true) {
        this.openNavMenu()
      } else {
        this.closeNavMenu()
      }
    },
  },
  methods: {
    onLinkClicked() {
      this.closeNavMenu()
    },
    closeNavMenu() {
      // menu.classList.remove('nav--opened')
      this.$refs.navMenu.classList.remove('nav-menu--opened')
    },
    openNavMenu() {
      // menu.classList.add('nav--opened')
      this.$refs.navMenu.classList.add('nav-menu--opened')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-menu {
  transform: translateY(0%);

  @include for-mobile {
    transform: translateY(-150%);
    transition: ease 5s;
  }

  &--opened {
    transition: ease 0.01s;
    transform: translateY(0%);

    > ul {
      transition: ease 0.3s;
      transform: translateY(0%);
    }
  }

  &__list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    @include for-mobile {
      flex-flow: column wrap;
      background-color: lighten($color-light, 1);
      transition: ease 0.3s;
      transform: translateY(-100%);
    }
  }

  &__item {
    list-style: none;
    > a {
      color: $color-dark;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.5rem;
      transition: 0.3s;
      &:hover {
        color: $color-light;
        background: $color-dark;
      }
    }
  }
}
</style>
