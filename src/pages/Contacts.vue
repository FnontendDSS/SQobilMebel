<template>
  <div class="contacts">
    <div class="about-nav">
      <router-link to="/">
      <h3><fa :icon="['fas', 'house']" /></h3>
      </router-link>
       <p>/</p>
       <router-link to="/contacts">
       <h3>Контакты</h3>
       </router-link>
    </div>
    <div class="contacts-title">
      <h1></h1>
    </div>
    <div class="contacts-main">
      <div class="contacts-main__l">
        <div class="contacts-main__l--adress">
          <h3>Адрес:</h3>
          <p>Город Ташкент, улица Гвардейская, строительный рынок</p>
        </div>
        <div class="contacts-main__l--contact">
          <div class="contacts-main__l--contact___l">
            <h3>Телефон:</h3>
            <p>+998(97)-727-58-67</p>
            <p>+998(98)-809-01-41</p>
          </div>
          <div class="contacts-main__l--contact___r">
            <h3>имя:</h3>
            <a href="№!">Qobil</a>
          </div>
        </div>
        <div class="contacts-main__l--links">
          <ul>
            <li>
              <a href="https://instagram.com/sodiqov.qobil?igshid=YTQwZjQ0NmI0OA=="><fa :icon="['fab', 'instagram']" /></a>
            </li>
            <li>
              <a href="https://t.me/S_Qobil_mebil"><fa :icon="['fab', 'telegram']" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/qobil.sodiqov.7?mibextid=ZbWKwL"><fa :icon="['fab', 'facebook']" /></a>
            </li>
          </ul>
        </div>
        <div class="contacts-main__l--work">
          <h3>Рабочие дни:</h3>
          <p> Вт-Ср-Чт-Сб-Вс: 10:00 - 18:00</p>
          <h3>Выходные:</h3>
          <p> Пн-Пт</p>
        </div>
      </div>
      <div class="contacts-main__r">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.13167039027255!2d69.32367377479936!3d41.371765899999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef372a21498d1%3A0xd20dae6ca4b276f2!2z0JHQsNC30LDRgCDQk9Cy0LDRgNC00LXQudGB0LrQsNGP!5e0!3m2!1sru!2s!4v1694263884388!5m2!1sru!2s" width="600" height="450" style="border-radius:30px; border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="contacts-main__r--map"></iframe>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: { Footer },

}
</script>

<style>

</style>