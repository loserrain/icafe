<template>
  <div class="page__detail">
    <i-cover class="detail__cover" :background-url="cover_background">
    </i-cover>
    <article class="post detail__post">
      <!-- 標題 -->
      <div class="post__title">
        <h1>{{ post.post_title }}</h1>
      </div>

      <!-- 標籤 -->
      <div class="post__tags">
        <a href="" v-for="(tag, index) in post.tags" :key="index">
          #{{ tag }}
        </a>
      </div>

      <!-- 內文 -->
      <div class="post__content">
        <component :is="post_component" ref="postContent"></component>
      </div>

      <!-- 分享區 -->
      <div class="post__share-box">
        <slot name="share-box"></slot>
      </div>
    </article>
  </div>
</template>

<script>
import posts from '@/assets/js/details_data.js'
export default {
  name: 'IDetail',
  data() {
    return {
      cover_background: 'cover/page/home.jpg',
      post: {},
      post_component: null,
    }
  },
  created() {
    this.fetchPostData()
    const target_component = `${this.post.post_name}.vue`
    this.post_component = () => ({
      // The component to load (should be a Promise)
      component: import(`@/components/Details/${target_component}`),
      delay: 200,
      timeout: 3000,
    })
    this.cover_background = `/detail/${this.post.img_folder}/cover.jpg`
  },
  methods: {
    fetchPostData() {
      let params = this.$route.params
      let target_post = posts.find(function(post) {
        return post.id == params.id
      })
      if (target_post) {
        this.post = target_post
      }
    },
  },
}
</script>

<style lang="scss">
.page__detail .post {
  img {
    &.--size {
      $base-size: 25%;
      &-s {
        max-width: ($base-size * 1.5);
      }
      &-m {
        max-width: ($base-size * 2);
      }
      &-l {
        max-width: ($base-size * 3);
      }
    }
    &.--inline {
      display: inline;
      &-block {
        display: inline-block;
      }
    }
  }
  section > img {
    &.--center {
      margin: 0 auto;
    }
    &.--right {
      margin: 0 0 0 auto;
    }
  }
}

.post {
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  &__title {
    font-size: 1.5rem;
  }
  &__content {
    section > p {
      text-indent: 2rem;
      margin-bottom: 1rem;
      line-height: 1.3rem;
    }
    img + p {
      margin-top: 1rem;
    }
    section + section {
      padding-top: 1rem;
    }
  }
  &__tags {
    @include tag-group();
  }
}
</style>
