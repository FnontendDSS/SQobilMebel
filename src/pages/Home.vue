<template>
  <Swiper/>
  <Header/>
  <Popular/>
  <Offer/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Swiper from '@/components/Swiper.vue';
import Popular from '@/components/Popular.vue';
import Offer from '@/components/Offer.vue';

export default {
    components: { Swiper, Header, Footer, Popular, Offer }
}
</script>

<style>

</style>