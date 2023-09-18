<template>
  <nav class="navbar container">
    <div class="navbar-logo">
        <router-link to="/">
    <img src="../assets/images/logo_transparent.png" alt="">
        </router-link>
    </div>
    <div class="navbar-nav">
         <button class="navbar-nav__category" @click="catalogBtn">
             <span>
                <fa :icon="['fas', 'boxes-stacked']" /> Каталог
             </span>
         </button>
        <ul class="navbar-nav__list1">
            <router-link to="/">
            <li><fa :icon="['fas', 'house']" /><span>Домой</span></li>
            </router-link>
            <router-link to="/about">
            <li><fa :icon="['fas', 'address-card']" /><span>О нас</span></li>
            </router-link>
            <router-link to="/furniture">
            <li><fa :icon="['fas', 'couch']" /><span>Мебели</span></li>
            </router-link>
            <router-link to="/contacts">
            <li><fa :icon="['fas', 'phone']" /><span>Контакты</span></li>
            </router-link>
        </ul>
        <ul class="navbar-nav__list2" v-if="navList">
            <router-link to="/">
            <li><fa :icon="['fas', 'house']" /><span>Домой</span></li>
            </router-link>
            <router-link to="/about">
            <li><fa :icon="['fas', 'address-card']" /><span>О нас</span></li>
            </router-link>
            <router-link to="/furniture">
            <li><fa :icon="['fas', 'couch']" /><span>Мебели</span></li>
            </router-link>
            <router-link to="/contacts">
            <li><fa :icon="['fas', 'phone']" /><span>Контакты</span></li>
            </router-link>
            <div class="navbar-nav__list2--btn"  @click="closeList">
                <fa :icon="['fas', 'xmark']" />
            </div>
        </ul>
    </div>
    <div class="navbar-btn">
        <span @click="openList"><fa :icon="['fas', 'bars-staggered']" /></span>
    </div>
  </nav>
  <transition name="opencatalog">
    <div class="catalog container" v-if="catalog">
        <router-link to="/furniture">
        <div class="catalog-card">
            <span>Мебели</span>
        </div>
        </router-link>
        <router-link to="/cheep">
        <div class="catalog-card">
            <span>Крашенные Мебели</span>
        </div>
        </router-link>
        <router-link to="/classic">
        <div class="catalog-card">
            <span>Классические Мебели</span>
        </div>
        </router-link>
        <router-link to="/akril">
        <div class="catalog-card">
            <span>Акриловые Мебели</span>
        </div>
        </router-link>
        <router-link to="/fur">
        <div class="catalog-card">
            <span>Прихожие и спальные шкафы</span>
        </div>
        </router-link>
        <router-link to="/bad">
        <div class="catalog-card">
            <span>Спальные</span>
        </div>
        </router-link>
        <div class="catalog-card">
            <a href="https://eman.uz/category/kronospan-lmdf"><fa :icon="['fas', 'palette']" />Цвета</a>
        </div>
        <div class="catalog-card">
            <a href="https://kis.uz/collections/blum-cabinet-applications"><fa :icon="['fas', 'gears']" />Механизмы</a>
        </div>
    </div>
  </transition>
</template>

<script>
export default {
    data() {
        return {
            navList: false,
            catalog: false,
        }
    },
    methods: {
        catalogBtn(){
            this.catalog = !this.catalog
        },
        openList(){
            this.navList = true
        },
        closeList(){
            this.navList = false
        }
    },
}
</script>

<style>

</style>