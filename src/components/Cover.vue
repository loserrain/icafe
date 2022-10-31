<template>
  <section class="cover">
    <div class="cover__showcase" :style="cssVars">
      <div class="cover__title">
        <slot name="title"> </slot>
      </div>
      <div class="cover__body">
        <slot> </slot>
      </div>
      <div class="cover__footer">
        <slot name="button"> </slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ICover',
  props: {
    'background-url': {
      type: String,
      default: '/cover/page/home.jpg',
    },
    height: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    cssVars() {
      return {
        '--background-url': `url(/img/${this.backgroundUrl})`,
        height: this.height,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'SetoFont';
  src: url('/font/cover/setofont.eot'); /* IE9 */
  src: url('/font/cover/setofont.eot?#iefix') format('embedded-opentype'),
    /* IE6-IE8 */ url('/font/cover/setofont.woff') format('woff'),
    /* chrome, firefox */ url('/font/cover/setofont.ttf') format('truetype'),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('/font/cover/setofont.svg#SetoFont') format('svg'); /* iOS 4.1- */
  font-style: normal;
  font-weight: normal;
}
.orangered {
  color: orangered;
}
.cover {
  overflow: hidden;
  &__title {
    font-family: 'SetoFont', 'Noto Sans', '微軟正黑體', Arial, Helvetica,
      sans-serif;
    font-size: 2rem;
    > {
      h1,
      h2,
      h3,
      h4,
      h5 {
        font-size: 3em;
        font-weight: normal;
      }
    }
    @include for-mobile {
      span {
        display: block;
        line-height: 0.5em;
      }
    }
  }

  &__body {
    font-size: 1.3rem;
  }

  &__showcase {
    min-height: 500px;
    line-height: 1.5;
    padding: 3rem;
    z-index: 0;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: $shadow-default;
    color: $color-light;

    &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;

      /* top, transparent black, faked with gradient */
      background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        var(--background-url);
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100%;

      // -webkit-filter: blur(5px);
      // -moz-filter: blur(5px);
      // -o-filter: blur(5px);
      // -ms-filter: blur(5px);
      // filter: blur(1px);
    }
    > div {
      padding: 0.5rem;
      text-align: center;
    }
  }
}
</style>
