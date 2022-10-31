<template>
  <section class="page-about about">
    <i-cover class="about__cover" :background-url="cover_image">
      <template #title>
        <h1>
          聯絡資訊
        </h1>
      </template>
    </i-cover>
    <section class="about__shop-list">
      <div class="about-card" v-for="(shop, index) in shop_list" :key="index">
        <div class="about-card__content">
          <div class="text-area">
            <div class="text-area__shop-name">
              <h2>{{ shop.shop_name }}</h2>
            </div>
            <div class="text-area__shop-data shop-data">
              <h5 class="shop-data__shop-address">{{ shop.shop_address }}</h5>
              <h5 class="shop-data__phone-number">{{ shop.phone_number }}</h5>
              <h5 class="shop-data__contact-person">
                {{ shop.contact_person }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import about_data from '@/assets/js/about_data.js'
export default {
  data() {
    // console.log(about_data)
    return {
      cover_image: 'cover/page/about.jpg',
      shop_list: about_data,
    }
  },
}
</script>

<style lang="scss">
.about {
  &__shop-list {
    position: relative;
    padding: 2rem 10%;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: minmax(200px, 1fr);
  }
  @include for-desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

$area_line-height: 1.2rem;
.about-card {
  min-width: 200px;

  &__content {
    height: 100%;
    padding: 2rem;
    background-color: $color-light;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: darken($color-light, 10);
    overflow: hidden;
  }

  .text-area {
    &__shop-name,
    &__shop-data {
      margin-bottom: 8px;
      line-height: $area_line-height;
      letter-spacing: 2px;
    }
    &__shop-name {
      color: $color-primary;
      text-overflow: ellipsis;
      font-size: $area_line-height;
      line-height: $area_line-height * 1.5;
      // white-space: nowrap;
    }
    &__shop-data {
      line-height: $area_line-height * 1.2;
    }
  }
}
</style>
