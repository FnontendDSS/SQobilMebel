<template>
  <div class="swiper container">
    <splide :options="options" class="swiper-splide">
    <splide-slide>
      <div class="swiper-slides">
        <img src="../assets/images/akrilfur/acril1.jpg" alt="" class="swiper-slides__img">
        <div class="swiper-slides__info">
          <h3>Кухонная мебель из акрила</h3>
          <p>Коллекция мебели для кухни домохозяйки включает в себя удобные и функциональные предметы мебели, которые идеально подходят для домашней кухни. Набор включает компактный кухонный остров, шкафы для хранения и организации кухонных принадлежностей, а также удобные стулья с мягкой обивкой.</p>
        </div>
        <router-link to="/akril">
          <button class="swiper-slides__info--btn">
            <span>Посмотреть ещё</span>
          </button>
        </router-link>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-slides">
        <img src="../assets/images/classicfur/c1/class2.jpg" alt="" class="swiper-slides__img">
        <div class="swiper-slides__info">
          <h3>Классический стиль кухонной мебели</h3>
          <p>Коллекция мебели для кухни домохозяйки включает в себя удобные и функциональные предметы мебели, которые идеально подходят для домашней кухни. Набор включает компактный кухонный остров, шкафы для хранения и организации кухонных принадлежностей, а также удобные стулья с мягкой обивкой.</p>
        </div>
        <router-link to="/classic">
          <button class="swiper-slides__info--btn">
            <span>Посмотреть ещё</span>
          </button>
        </router-link>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-slides">
        <img src="../assets/images/bad/bad3.jpg" alt="" class="swiper-slides__img">
        <div class="swiper-slides__info">
          <h3 class="badtitle">Современные спальни</h3>
          <p>Наши современные спальни создают уютную и расслабляющую обстановку для вашего отдыха. Мы используем качественные материалы для создания комфортной и стильной спальни. Мы предлагаем различные размеры кроватей, от односпальной до семейных размеров, а также широкий выбор шкафов для хранения одежды.</p>
        </div>
        <router-link to="/bad">
          <button class="swiper-slides__info--btn">
            <span>Посмотреть ещё</span>
          </button>
        </router-link>
      </div>
    </splide-slide>
    <splide-slide>
      <div class="swiper-slides">
        <img src="../assets/images/furniture/fur1.jpg" alt="" class="swiper-slides__img">
        <div class="swiper-slides__info">
          <h3>Прихожие и спальные шкафы</h3>
          <p>Шкафы для прихожих и спален, предлагаемые нашей компанией, обладают качественным исполнением и эргономичным дизайном. Мы предлагаем различные модели, варианты отделки и типы конструкций, чтобы удовлетворить потребности каждого клиента. </p>
        </div>
        <router-link to="/fur">
          <button class="swiper-slides__info--btn">
            <span>Посмотреть ещё</span>
          </button>
        </router-link>
      </div>
    </splide-slide>
    
  </splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
export default {
    components: { Splide, SplideSlide,},
    data() {
      return {
        options:{
          rewind : true,
          gap    : '1rem',
        },
      }
    },
}
</script>

<style>

</style>