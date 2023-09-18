<template>
  <div class="about container">
    <div class="about-nav">
      <router-link to="/">
      <h3><fa :icon="['fas', 'house']" /></h3>
      </router-link>
       <p>/</p>
       <router-link to="/about">
       <h3>О нас</h3>
       </router-link>
    </div>
    <div class="about-title">
      <h1>О нас</h1>
    </div>
    <div class="about-main">
      <div class="about-main__card">
        <div class="about-main__card--info">
          <p>Наша компания занимается изготовлением мебели на заказ. Мы предлагаем мебель для спален, кухонь, прихожих и шкафов, дизайн которой будет соответствовать вашим требованиям и вкусам.</p>
          <p>Мы заботимся о наших клиентах и всегда готовы помочь с выбором дизайна и материалов, чтобы удовлетворить их потребности. У нас есть большой выбор качественных материалов для мебели, чтобы подобрать идеальный вариант для каждого заказа.</p>
          <router-link to="/furniture">
          <button class="about-main__card--info___btn">
            <span>Посмотреть каталог</span>
          </button>
          
          </router-link>
        </div>
        <div class="about-main__card--img">
          <img src="../assets/images/akrilfur/ac27.jpg" alt="">
        </div>
      </div>
      <div class="about-main__card">
        <div class="about-main__card--img">
          <img src="../assets/images/classicfur/c3/classic35.jpg" alt="">
        </div>
        <div class="about-main__card--info">
          <p>Мы оригинально подходим к каждому проекту и создаем уникальный дизайн, отражающий индивидуальность и вкус каждого заказчика. Наша мебель создается на заказ, поэтому вы можете быть уверены, что она будет абсолютно уникальной и соответствовать всем вашим желаниям.</p>
          <p>Кроме того, мы предлагаем помощь в выборе мебели для ваших домов, чтобы обеспечить полное удовлетворение клиента по всем аспектам. Мы стремимся создать красивую и функциональную мебель, которая будет не только украшением для вашего дома, но и повышать комфортность жизни в нем.</p>
          <router-link to="/furniture">
          <button class="about-main__card--info___btn">
            <span>Посмотреть каталог</span>
          </button>
          </router-link>
          </div>
      </div>
      <div class="about-main__card">
        <div class="about-main__card--info">
          <p>В наших категориях спален, кухонь, прихожих и шкафов клиенты могут заказать любую мебель, которую они пожелают, от классической до современной. Мы готовы изготовить любой вид мебели, начиная от простых полок и заканчивая сложными кухонными гарнитурами.</p>
          <p>Надежность и высокое качество являются нашей главной целью, поэтому наша мебель всегда изготавливается из лучших материалов и с использованием самых передовых технологий. Мы гарантируем, что каждое изделие проходит контроль качества, прежде чем попасть к клиенту.</p>
          <p>Мебель, изготовленная нашей компанией, прекрасно подходит для домов и квартир любой площади и дизайна. Мы уверены, что наши уникальные изделия не оставят вас равнодушными и будут служить вам долгие годы.</p>
        </div>
        <div class="about-main__card--img">
          <img src="../assets/images/classicfur/c3/classic67.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
  <Footer/>
<div class="uphome">
    <span>
      <fa @click="goBack" :icon="['fas', 'circle-left']" />
    </span>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    components: { Footer },
     methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>