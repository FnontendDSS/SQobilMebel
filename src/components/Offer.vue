<template>
  <div class="offer">
    <div class="offer-main">
        <div class="offer-main__l">
            <h3>Заказать мебель</h3>
            <div class="offer-main__l--info">
                <p><span><fa :icon="['fas', 'hand-point-up']" /></span> Мебель производится исключительно на заказ. Обычно время изготовления занимает от 15 до 30 дней, но это зависит от сложности проекта и загруженности производства. Перед заказом уточните все детали и особенности изготовления мебели, а также обсудите стоимость и сроки выполнения заказа.</p>
            <router-link to="/contacts">
            <button class="bounce-top">
                <span>Связаться</span>
            </button>
            </router-link>
            </div>
        </div>
        <div class="offer-main__r">
            <img src="../assets/images/offer.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>