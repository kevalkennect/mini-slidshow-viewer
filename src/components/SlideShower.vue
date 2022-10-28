<template>
  <div class="container">
    {{ currentSlide.Seq }}
    <div
      class="main"
      :style="{
        'background-image': 'url(' + currentSlide.backgroundImage + ')',
      }"
      @click="click(currentSlide.onClick)"
    >
      <div
        class="box"
        v-for="box in currentSlide.Boxes"
        :key="box"
        :style="{
          display: 'flex',
        }"
      >
        {{ box.content }}
      </div>
    </div>
    <!-- box component -->
    <div class="nav">
      <NavigationBtn />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavigationBtn from "./NavigationBtn.vue";

export default {
  components: { NavigationBtn },
  computed: { ...mapGetters(["activeSlide", "currentSlide"]) },
  methods: {
    ...mapActions(["nextSlide", "prevSlide", "setSlides", "setCurrentSlide"]),
    click(data) {
      console.log(data);
    },
  },
  watch: {
    activeSlide: {
      handler(nv) {
        console.log(nv, "active");
        this.setCurrentSlide();
      },
    },
  },
};
</script>

<style scoped>
.box {
  position: relative;
  color: white;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
}
.main {
  width: 100%;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* border: 2px solid red; */
}
.container {
  height: 60vh;

  position: relative;
  /* border: 2px solid yellow; */
}
</style>