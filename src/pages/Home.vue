<template>
  <Swiper/>
  <Header/>
  <Popular/>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Swiper from '@/components/Swiper.vue';
import Popular from '@/components/Popular.vue';

export default {
    components: { Swiper, Header, Footer, Popular }
}
</script>

<style>

</style>