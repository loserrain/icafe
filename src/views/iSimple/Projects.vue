<template>
  <article class="page__projects">
    <i-cover class="projects__cover" :background-url="cover_image">
      <template #title>
        <h1>
          影片區
        </h1>
      </template>
    </i-cover>

    <section
      class="projects__video-grid cards"
      :class="{ showing: cards.isShowing }"
    >
      <div class="card" v-for="video in video_list" :key="video.id">
        <div class="card__thumb">
          <img :src="video.thumbnail" alt="" />
        </div>
        <div class="card__title">
          <a class="btn toggler-info" @click="showVideo(video.id)">
            <span class="left"></span>
            <span class="right"></span>
          </a>
          <h2>
            {{ video.vtitle }}
            <small>{{ video.created }}</small>
          </h2>
        </div>
      </div>
    </section>

    <i-modal v-if="showModal" @close="showModal = false">
      <template #body>
        <div class="video-wrapper">
          <iframe
            :src="current_video.url"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            width="640"
            height="360"
            style="width:100%; height:100%; position: absolute;"
          ></iframe>
        </div>
      </template>
    </i-modal>
  </article>
</template>

<script>
import { iModal } from '@/components'
export default {
  data() {
    return {
      showModal: false,
      card: {
        hasShow: false,
        isShowing: false,
      },
      cards: {
        hasShow: false,
        isShowing: false,
      },
      cover_image: '/cover/page/video.jpg',
      video_list: [
        { vid: 'fBYHoZhatRM', vtitle: '古坑咖啡' },
        { vid: 's4zTr2BswYk', vtitle: '黑豆將軍' },
        { vid: 'xFEgSmlKIIo', vtitle: '皇蛾蛻變' },
        { vid: '26T9FjdFcWk', vtitle: '咖啡豆解說' },
      ],
      current_video: '',
    }
  },
  created() {
    let id = 0
    // TODO: maybe refactoring from created to computed
    for (let video of this.video_list) {
      video.id = id++
      video.url = `//www.youtube.com/embed/${video.vid}`
      // thumnail(0~4) setting
      // 1. maxresdefault  1500x900  no black-strip
      // 2. mqdefault      320x180   no black-strip
      // 3. hqdefault(0)   480x360   with balck-strip
      video.thumbnail = `//img.youtube.com/vi/${video.vid}/0.jpg`
      // console.log(video)
    }

    this.current_video = this.video_list[0]
  },
  mounted() {
    const cards = document.getElementsByClassName('card')
    const vm = this
    for (let card of cards) {
      card.addEventListener('click', () => {
        vm.cardShowing(card)
      })
    }
  },
  methods: {
    cardShowing(e) {
      if (this.cards.isShowing) {
        // save this card's showing state
        const thisCardwasShowing = e.classList.contains('show')
        // a card is already in view
        const showingCard = document.querySelector('.card.show')
        showingCard.classList.remove('class', 'show')

        if (thisCardwasShowing) {
          // this card was showing - reset the grid
          this.cards.isShowing = false
        } else {
          // this card isn't showing - get in with it
          e.classList.add('show')
        }
      } else {
        // no cards in view
        this.cards.isShowing = true
        e.classList.add('show')
      }
    },
    showVideo(id) {
      this.current_video = this.video_list[id]
      this.showModal = true
    },
  },
  components: {
    'i-modal': iModal,
  },
}
</script>

<style lang="scss">
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; //16:9
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.projects {
  &__cover {
    p,
    h1 {
      text-shadow: $shadow-default;
    }
    p {
      font-weight: 600;
    }
  }

  &__video-grid {
    padding: 2rem 3rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: minmax(200px, auto);
    .btn {
      $color-button: teal;
      background: $color-button;
      border-radius: 4px;
      box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.25);
      color: white;
      display: inline-block;
      padding: 6px 30px 8px;
      position: relative;
      text-decoration: none;
      transition: all 0.1s 0s ease-out;
      &:hover {
        background: lighten($color-button, 2.5);
        box-shadow: 0px 8px 2px 0 rgba(0, 0, 0, 0.075);
        transform: translateY(-2px);
        transition: all 0.25s 0s ease-out;
      }
      &:active {
        background: darken($color-button, 2.5);
        box-shadow: 0 1px 0px 0 rgba(255, 255, 255, 0.25);
        transform: translate3d(0, 1px, 0);
        transition: all 0.025s 0s ease-out;
      }
    }
  }
}

// TODO: css refactoring is needed

.projects__video-grid .card {
  border: burlywood solid 2px;
  background: white;
  display: inline-block;
  // margin: 8px;
  // max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  z-index: 1;

  @include for-mobile() {
    padding: 2rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  &__title {
    background: white;
    padding: 6px 15px 10px;
    position: relative;
    z-index: 0;
    h2 {
      font-size: 1.5em;
      font-weight: 700;
      letter-spacing: -0.05em;
      margin: 0;
      padding: 0;
      small {
        display: block;
        font-weight: 600;
        letter-spacing: -0.025em;
      }
    }
  }

  .toggler-info {
    border-radius: 32px;
    height: 32px;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 10px;
    width: 32px;
    span {
      background: white;
      display: block;
      height: 2px;
      position: absolute;
      top: 16px;
      transition: all 0.15s 0s ease-out;
      width: 12px;
      &.left {
        right: 14px;
        transform: rotate(45deg);
      }
      &.right {
        left: 14px;
        transform: rotate(-45deg);
      }
    }
  }

  &__thumb {
    overflow: hidden;
    width: 100%;
    img {
      margin: -10% 0;
      width: 100%;
    }
  }

  &.show {
    opacity: 1 !important;
    transform: scale(1) !important;
  }
}

.cards {
  &.showing {
    > .card {
      cursor: pointer;
      opacity: 0.6;
      transform: scale(0.88);
      &:hover {
        opacity: 0.94;
        transform: scale(0.92);
      }
    }
  }
}
</style>
