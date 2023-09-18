<template>
  <div class="footer container">
    <img src="../assets/images/footer.png" alt="" class="footer-img">
    <div class="footer-logo">
        <img src="../assets/images/logo_transparent.png" alt="">
    </div>
    <ul class="footer-list">
        <h4>Меню</h4>
        <router-link to="/"  >
        <li>Домой</li>
        </router-link>
        <router-link to="/about" >
        <li>О нас</li>
        </router-link>
        <router-link to="/furniture">
        <li>Мебели</li>
        </router-link>
        <router-link to="/contacts">
        <li>Контакты</li>
        </router-link>
    </ul>
    <div class="footer-link">
        <h3>Если нужен <span>сайт</span>  можете заказать тут</h3>
        <button class="footer-link__btn" @click="opm">
            <span>Заказать</span>
        </button>
    </div>
  </div>
  <div class="footmodal" v-if="footmadal">
    <div class="footmodal-card">
        <h1>Frontend developer</h1>
        <h2>Cвязаться</h2>
        <div class="footmodal-card__list">
        <ul>
            <li><fa :icon="['fab', 'telegram']" shake /><a href="https://t.me/frontendDevSSD/">Телеграм</a></li>
            <li><fa :icon="['fab', 'github']" shake /><a href="https://github.com/fnontenddss">GitHub</a></li>
            <li><fa :icon="['fas', 'at']" shake /><a href="mailto:frontenddeveloperss22@gmail.com">Почта</a></li>
        </ul>
        <span><fa :icon="['fas', 'code']" /></span>
        </div>
    <button class="footmodal-card__btn" @click="clom">
        <span><fa :icon="['fas', 'xmark']" /></span>
    </button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            footmadal: false,
        }
    },
    methods: {
        opm(){
            this.footmadal = true
        },
        clom(){
            this.footmadal = false
        },
    },
}
</script>

<style>

</style>