<template>
  <div class="header container">
    <div class="header-title">
      <div class="header-title__main">
      <h2> Почему именно <span>наша</span> компания <span>?</span></h2>
      </div>
      <div class="header-title__info">
        <div class="header-title__info--item">
          <span><fa :icon="['fas', 'truck-fast']" /></span>
          <p>Бесплатная доставка</p>
        </div>
        <div class="header-title__info--item">
          <span><fa :icon="['fas', 'screwdriver-wrench']" /></span>
          <p>Установка</p>
        </div>
        <div class="header-title__info--item">
          <span><fa :icon="['far', 'thumbs-up']" /></span>
          <p>Качество</p>
        </div>
        <div class="header-title__info--item">
          <span><fa :icon="['fas', 'wand-sparkles']" /></span>
          <p>стильный дизайн</p>
        </div>
      </div>
    </div>
  </div>
    <div class="header-content container">
      <div class="header-content__info">
        <h3>Создайте дом своей мечты с идеальной мебелью.</h3>
        <p>Мы упрощаем вам поиск идеального партнера.</p>
        <router-link to="/contacts">
        <button class="header-content__info--btn">
          <span>Cвязатся <fa :icon="['fas', 'phone']" /></span>
        </button>
        </router-link>
      </div>
      <div class="header-content__img">
        <img src="../assets/images/header1.png" alt="">
      </div>
    </div>
</template>

<script>
export default {

}
</script>

