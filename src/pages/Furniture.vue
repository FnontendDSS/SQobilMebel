<template>
  <div class="furniture container">
    <div class="about-nav">
      <router-link to="/">
      <h3><fa :icon="['fas', 'house']" /></h3>
      </router-link>
       <p>/</p>
       <router-link to="/furniture">
       <h3>Мебели</h3>
       </router-link>
    </div>
    <div class="furniture-title">
      <h1>Мебели</h1>
      <div class="furniture-title__clouds">
        <router-link to="/cheep">
        <div class="furniture-title__clouds--item">
          <p>Крашенные Мебели</p>
        </div>
        </router-link>
        <router-link to="/classic">
        <div class="furniture-title__clouds--item">
          <p>Классические Мебели</p>
        </div>
        </router-link>
        <router-link to="/akril">
        <div class="furniture-title__clouds--item">
          <p>Акриловые Мебели</p>
        </div>
        </router-link>
        <router-link to="/fur">
        <div class="furniture-title__clouds--item">
          <p>Прихожие и спальные шкафы</p>
        </div>
        </router-link>
        <router-link to="/bad">
        <div class="furniture-title__clouds--item">
          <p>Спальные</p>
        </div>
        </router-link>
      </div>
    </div>
    <div class="furniture-main">
      <div class="furniture-main__card">
        <div class="furniture-main__card--img">
          <img src="../assets/images/cheepcolor/kta1.jpg" alt="" class="furniture-main__card--img___1">
          <img src="../assets/images/cheepcolor/kra2.jpg" alt="" class="furniture-main__card--img___2">
          <img src="../assets/images/cheepcolor/1/krash1.jpg" alt="" class="furniture-main__card--img___3">
        </div>
        <div class="furniture-main__card--info">
          <h3>Крашенные Мебели</h3>
          <p>Мебель, изготовленная из дерева, является классической и прочной и если еще и красится в любой цвет, то получается красивый и необычный дизайн. Краска позволяет создавать самые разные оттенки, от ярких и контрастных до нежных и пастельных. Красится мебель как общего назначения, так и для конкретных помещений, в зависимости от требований заказчика.</p>
          <p>Краска, используемая для мебели, обладает высокой стойкостью к внешним воздействиям, что обеспечивает безупречное состояние мебели в течение многих лет. Правильное нанесение краски позволяет сохранить текстуру дерева и создать эстетически приятный вид мебели.</p>
          <p>Краска позволяет создавать не только яркий дизайн, но и улучшить функциональность мебели. Например, крашенные шкафы и комоды могут обеспечить место хранения идеально подходящее для любого интерьера. Красиво покрашенные стулья и столы будут служить не только утилитарной цели, но и служить элементом декора комнаты.</p>
          <button>
            <span>Посмотреть все <fa :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
      </div>
      <div class="furniture-main__card">
        <div class="furniture-main__card--img">
          <img src="../assets/images/classicfur/c2/classic13.jpg" alt="" class="furniture-main__card--img___1">
          <img src="../assets/images/classicfur/c2/classic14.jpg" alt="" class="furniture-main__card--img___2">
          <img src="../assets/images/classicfur/c1/classic26.jpg" alt="" class="furniture-main__card--img___3">
        </div>
        <div class="furniture-main__card--info">
          <h3>Классические Мебели</h3>
          <p>Классическая кухонная мебель - это красивая, элегантная и функциональная мебель, которая подходит для любого дома. Она обладает высоким качеством, стилем и удобством, гармонично вписываясь в любой интерьер. </p>
          <p>Классический стиль кухонной мебели характеризуется простотой и элегантностью формы, используемых материалов и цветовой палитры. Это обычно деревянная мебель, которая может быть покрыта лаком или окрашена в натуральный цвет дерева или белый, кремовый, бежевый или серый оттенок.</p>
          <p>Классическая кухонная мебель обычно является высококачественной. Она изготавливается из дерева, которое обработано многократными процессами, чтобы обеспечить прочность и долговечность. Она также имеет плавные линии конструкции, которые сочетаются с традиционными элементами, такими как орнаменты и украшения.</p>
          <button>
            <span>Посмотреть все <fa :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
      </div>
      <div class="furniture-main__card">
        <div class="furniture-main__card--img">
          <img src="../assets/images/akrilfur/ac10.jpg" alt="" class="furniture-main__card--img___1">
          <img src="../assets/images/akrilfur/ac11.jpg" alt="" class="furniture-main__card--img___2">
          <img src="../assets/images/akrilfur/1/ac16.jpg" alt="" class="furniture-main__card--img___3">
        </div>
        <div class="furniture-main__card--info">
          <h3>Акриловые Мебели</h3>
          <p>Акриловая мебель - это мебель, изготовленная из прозрачного или цветного акрила. Эта мебель современна и стильна, она выглядит легкой и элегантной, но при этом очень прочной и устойчивой к механическим повреждениям.</p>
          <p>Акриловая мебель имеет еще одно преимущество - она не имеет швов или стыков, так как она формируется в едином блоке. Это делает ее очень удобной в использовании, и мебель может служить долгое время без каких-либо проблем.</p>
          <p>Акриловая мебель очень удобна в использовании, так как она очень легко поддаётся чистке и обслуживанию. Она не теряет свой блеск и не царапается даже при долгом использовании. При необходимости, ее можно легко ремонтировать - достаточно нанести специальный состав, который восстановит поверхность материала.</p>
          <button>
            <span>Посмотреть все <fa :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
      </div>
      <div class="furniture-main__card">
        <div class="furniture-main__card--img">
          <img src="../assets/images/furniture/pri1.jpg" alt="" class="furniture-main__card--img___1">
          <img src="../assets/images/furniture/pri2.jpg" alt="" class="furniture-main__card--img___2">
          <img src="../assets/images/furniture/1/fur3.jpg" alt="" class="furniture-main__card--img___3">
        </div>
        <div class="furniture-main__card--info">
          <h3>Прихожие и спальные шкафы</h3>
          <p>Шкафы могут иметь различные размеры и формы, что делает их удобным решением для любого помещения. Они могут быть простыми и функциональными, иметь комплексную систему хранения и ящики, полки для разных вещей.</p>
          <p>Шкафы также могут быть изготовлены из различных материалов, таких как дерево, МДФ, прессованная древесина (дсп), стекло, металл и пластик. Каждый материал имеет свои преимущества и недостатки, но в целом мебель из дерева считается лучшим выбором для шкафов</p>
          <p>Выбор шкафов - это долгосрочное решение, нужно обратить внимание на каждую деталь, чтобы получить мебель, которая не только будет хранить вещи, но также будет радовать глаз. Некоторые фирмы предлагают индивидуальный проект для каждого клиента, что позволяет создать идеальный шкаф для конкретного помещения.</p>
          <button>
            <span>Посмотреть все <fa :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
      </div>
      <div class="furniture-main__card">
        <div class="furniture-main__card--img">
          <img src="../assets/images/bad/bad13.jpg" alt="" class="furniture-main__card--img___1">
          <img src="../assets/images/bad/bad11.jpg" alt="" class="furniture-main__card--img___2">
          <img src="../assets/images/bad/1/bad15.jpg" alt="" class="furniture-main__card--img___3">
        </div>
        <div class="furniture-main__card--info">
          <h3>Спальные</h3>
          <p>Спальная мебель - это набор мебели, который служит для обеспечения комфортного и функционального пространства для сна. Она состоит из кровати, шкафов, тумбочек и других предметов мебели, которые могут помочь создать уютную атмосферу в спальне.</p>
          <p>Кровать - это главный элемент спальной мебели. Она может иметь различные размеры (односпальная, двуспальная, полуторка) и формы (например, с изголовьем). Кровати могут быть различных стилей - от классического до современного, что позволяет каждому выбрать тот вариант, который подходит именно для его интерьера.</p>
          <p>Спальная мебель может быть выполнена из различных материалов, таких как дерево, металл, кожа, ткань и др. Дерево и металл - это наиболее популярные материалы для спальной мебели, так как они прочны и долговечны.</p>
          <button>
            <span>Посмотреть все <fa :icon="['fas', 'arrow-right']" /></span>
          </button>
        </div>
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

<style>

</style>