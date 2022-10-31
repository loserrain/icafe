<template>
  <div class="about-card">
    <div class="about-card__content">
      <div class="text-area">
        <div class="text-area__shop-name">
          <h2>{{ shop_name }}</h2>
        </div>
        <div class="text-area__shop-data shop-data">
          <h5 class="shop-data__shop-address">{{ shop_address }}</h5>
          <h5 class="shop-data__phone-number">{{ phone_number }}</h5>
          <h5 class="shop-data__contact-person">{{ contact_person }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IAboutCard',
  props: ['shop_name', 'shop_address', 'phone_number', 'contact_person'],
}
</script>

<style lang="scss" scoped>
$area_line-height: 1.2rem;
$color-font: darken(#cde8df, 30);
// $color-link-background: darken(#cce5c7, 13);
.about-card {
  min-width: 200px;

  &__content {
    padding: 1rem;
    background-color: $color-light;
    border-width: 1px 1px 1px 1px;
    border-style: solid;
    border-color: darken($color-light, 10);
    overflow: hidden;
  }
}

.text-area {
  &__shop-name,
  &__shop-data {
    margin-bottom: 8px;
    line-height: $area_line-height;
    letter-spacing: 2px;
  }
  &__shop-name {
    color: $color-font;
    text-overflow: ellipsis;
    font-size: $area_line-height;
    line-height: $area_line-height * 1.5;
    // white-space: nowrap;
  }
  &__shop-data {
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
</style>
