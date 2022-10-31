<template>
  <div class="video-card" ref="videoCard">
    <div class="video-card__thumb">
      <slot name="thumbnail">
        <img :src="img" alt="video-card__thumb" />
      </slot>
    </div>

    <div class="video-card__content">
      <div class="text-area">
        <div class="text-area__title">
          <slot name="title">
            <h4>{{ title }}</h4>
          </slot>
        </div>
        <div class="text-area__description">
          <slot name="description">
            <h5>{{ description }}</h5>
          </slot>
        </div>
      </div>
      <div class="tag-area">
        <a href="" v-for="(tag, index) in tags" :key="index"> #{{ tag }} </a>
      </div>
    </div>

    <div class="video-card__link-box">
      <a href="" @click.prevent="openVideo">
        <p>觀看影片</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IVideoCard',
  props: ['title', 'description', 'tags', 'videoid', 'id', 'img'],
  mounted() {
    let videoCard = this.$refs.videoCard
    if (this.id % 2 === 0) {
      videoCard.classList.add('video-card--even')
    } else {
      videoCard.classList.add('video-card--odd')
    }
  },
  methods: {
    openVideo: function() {
      this.$emit('open', this.videoid)
    },
  },
  computed: {
    thumbnailURL: function() {
      return `//img.youtube.com/vi/${this.videoid}/0.jpg`
    },
  },
}
</script>

<style lang="scss" scoped>
$area_line-height: 1.2rem;
$color-link-border: darken(#cde8df, 16);
$color-link-background: darken(#cce5c7, 13);
.video-card {
  min-width: 200px;
  position: relative;

  &__thumb {
    width: 100%;
    img {
      width: inherit;
    }
  }

  &__content {
    padding: 1rem;
    border-width: 0 1px 1px 1px;
    border-style: solid;
    border-color: lightgray;
    overflow: hidden;
    .text-area {
      &__title,
      &__description {
        margin-bottom: 8px;
        line-height: $area_line-height;
        letter-spacing: 2px;
      }
      &__title {
        color: darken($color-primary, 10);
        text-overflow: ellipsis;
        font-size: $area_line-height;
        white-space: nowrap;
      }
      &__description {
        $describe_max-line: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: $describe_max-line;
        height: $area_line-height * $describe_max-line;
      }
    }
    .tag-area {
      display: flex;
      flex-flow: row wrap;
      > a {
        position: relative;
        z-index: 0;
        font-size: 0.8rem;
        font-weight: bold;
        line-height: $area_line-height;
        height: $area_line-height;
        overflow: hidden;
        margin: 0.5rem 0.5rem 0 0;
        padding: 0 6px;
        text-decoration: none;
        letter-spacing: 1px;
        color: $color-dark;
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          right: 0;
          background: rgb(219, 219, 219);
          z-index: -1;
        }
        &::after {
          content: '';
          width: 0;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          background: darken($color-primary, 10);
          z-index: -1;
        }
      }
    }
  }

  &__link-box {
    $link-box_height: 42px;
    text-align: right;
    > a {
      height: $link-box_height;
      display: inline-block;
      padding: 0 1rem;
      border-width: 0 1px 1px;
      border-style: solid;
      border-color: darken($color-primary, 20);
      text-decoration: none;
      text-align: center;
      transition: 0.4s;
      > p {
        display: inline-block;
        vertical-align: middle;
        color: $color-dark;
        font-weight: bold;
        line-height: $link-box_height;
      }
      &::after {
        content: '';
        width: 0;
        height: 0;
        border-width: 6px 0 6px 10px;
        border-style: solid;
        border-color: transparent $color-primary;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 8px;
        transition: 0.4s;
      }
    }
  }
}

@media screen and (min-width: 1023.98px) {
  $area_line-height: 2rem;
  .video-card {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    &__thumb {
      grid-row: 1 / 6;
      z-index: 1;
      align-self: center;
      > img {
        border-radius: 16px;
      }
    }
    &__content {
      grid-row: 4 / 6;
      border: none;
      z-index: 2;
      .text-area {
        background: rgba($color-dark, 0.7);
        // height: 100%
        border-radius: 10px;
        padding: 1rem;
        &__title,
        &__description {
          line-height: $area_line-height;
        }
        &__title {
          font-size: $area_line-height;
          color: #cce5c7;
          text-align: center;
          position: relative;
          &::after,
          &::before {
            content: '';
            background-color: $color-light;
            position: absolute;
            top: 50%;
            height: 2px;
            width: 20%;
          }
          &::before {
            left: 0;
          }
          &::after {
            right: 0;
          }
        }
        &__description {
          font-size: $area_line-height * 0.8;
          -webkit-line-clamp: initial;
          height: auto;
          color: #cde8df;
        }
      }
    }
    &__link-box {
      grid-row: 3 / 4;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      > a {
        border: 1px solid $color-link-border;
        border-radius: 100%;
        height: auto;
        padding: 0;
        &::after {
          margin: 22px 21px 22px 29px;
          border-width: 21px 0 21px 36px;
          border-color: transparent $color-link-background;
        }
        &:hover {
          background-color: $color-link-background;
          &::after {
            border-color: transparent $color-light;
          }
        }
        > p {
          display: none;
        }
      }
    }
    &--odd > & {
      &__thumb {
        grid-column: 1 / 6;
      }
      &__content {
        grid-column: 5 / 8;
      }
      &__link-box {
        grid-column: 5 / 8;
      }
    }
    &--even > & {
      &__thumb {
        grid-column: 3 / 8;
      }
      &__content {
        grid-column: 1 / 4;
      }
      &__link-box {
        grid-column: 1 / 4;
      }
    }
    .tag-area {
      display: none;
    }
  }
}
</style>
