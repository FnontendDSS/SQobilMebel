<template>
  <div class="classic container">
    <div class="about-nav">
      <router-link to="/">
      <h3><fa :icon="['fas', 'house']" /></h3>
      </router-link>
       <p>/</p>
       <router-link to="/furniture">
       <h3>Мебели</h3>
       </router-link>
       <p>/</p>
       <router-link to="/cheep">
       <h3>Крашенные Мебели</h3>
       </router-link>
    </div>
    <div class="furniture-title">
      <h1>Крашенные Мебели</h1>
      <div class="furniture-title__clouds">
        <router-link to="/cheep">
        <div class="furniture-title__clouds--item">
          <p>Крашенные Мебели</p>
        </div>
        </router-link>
      </div>
    </div>
    <div class="classic-main">
        <div class="classic-main__1">
            <img src="../assets/images/cheepcolor/1/krash1.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash2.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash3.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash4.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash5.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash6.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash7.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash8.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash9.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash10.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash11.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash12.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash13.jpg" alt="">
            <img src="../assets/images/cheepcolor/1/krash14.jpg" alt="">
        </div>
        <div class="classic-main__2">
          <img src="../assets/images/cheepcolor/2/krash15.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash16.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash17.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash18.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash19.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash20.jpg" alt="">
          <img src="../assets/images/cheepcolor/2/krash21.jpg" alt="">
          <img src="../assets/images/cheepcolor/kra4.jpg" alt="">
          <img src="../assets/images/cheepcolor/kta1.jpg" alt="">
        </div>
    </div>
  </div>
  <Footer/>
  <div class="uphome">
    <span>
      <fa @click="goBack" :icon="['far', 'circle-left']" />
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

