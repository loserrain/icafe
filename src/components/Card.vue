<template>
  <div class="card">
    <div class="card__thumb">
      <slot name="thumbnail">
        <img :src="img" alt="card_thumb" />
      </slot>
    </div>

    <div class="card__content card">
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
        <a v-for="(tag, index) in tags" :key="index"> #{{ tag }} </a>
      </div>
    </div>

    <div class="card__link-box" v-if="link">
      <!-- <a :href="link">
        <p>深入瞭解</p>
      </a> -->
      <router-link :to="link">
        <p>深入瞭解</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ICard',
  props: ['img', 'title', 'description', 'tags', 'link'],
}
</script>

<style lang="scss" scoped>
$area_line-height: 1.2rem;
.card {
  min-width: 200px;
  position: relative;

  &__thumb {
    position: relative;
    width: 100%;
    min-height: 200px;
    height: 30vh;
    overflow: hidden;
    > img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: none;
      height: (100% * 1.2);
    }
  }

  &__content {
    padding: 1rem;
    background-color: $color-light;
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
        -webkit-line-clamp: $describe_max-line; /* number of lines to show */
        // line-height: X; /* fallback */
        // max-height: $area_line-height * $describe_max-line; /* fallback */
        height: $area_line-height * $describe_max-line; /* fallback */
      }
    }
    .tag-area {
      @include tag-group();
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
    @include for-desktop() {
      > a:hover {
        background: $color-primary;
        > p {
          color: $color-light;
        }
        &::after {
          border-color: transparent $color-light;
        }
      }
    }
  }
}
</style>
