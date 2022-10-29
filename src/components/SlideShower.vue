<template>
  <div class="container">
    <div
      class="main"
      :style="{
        backgroundColor:
          currentSlide.backgroundImage !== ''
            ? 'none'
            : currentSlide.backgroundColor,
        'background-image':
          'url(' + currentSlide.backgroundImage && currentSlide.backgroundImage
            ? currentSlide.backgroundImage
            : '' + ')',
      }"
      @click="click(currentSlide.onClick)"
    >
      <div class="prime" v-if="isPrimeNum">
        This Slide Number is Prime Number
      </div>
      <div class="warper">
        <div
          class="box"
          v-for="box in currentSlide.Boxes"
          :key="box"
          :style="{}"
        >
          <div class="text">
            {{ box.content }}
          </div>
        </div>
      </div>
    </div>
    <!-- box component -->
    <div class="nav">
      <NavigationBtn
        :isDisableNext="isDisableNext"
        :isDisablePrev="isDisablePrev"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NavigationBtn from "./NavigationBtn.vue";

export default {
  data() {
    return {
      isDisableNext: false,
      isDisablePrev: false,
      isPrimeNum: false,
    };
  },
  components: { NavigationBtn },
  computed: {
    ...mapGetters(["activeSlide", "currentSlide", "getLength"]),
  },
  methods: {
    ...mapActions(["setCurrentSlide"]),
    click(data) {
      window.open(data, "_blank");
      console.log(data);
    },
    isPrimeNumber(num) {
      for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
      return num > 1;
    },
  },
  watch: {
    currentSlide: {
      handler(nv) {
        console.log(nv);
        this.isPrimeNum = this.isPrimeNumber(nv.Seq);
      },
      immediate: true,
    },
    activeSlide: {
      handler(nv) {
        console.log(this.activeSlide, "active");
        if (this.activeSlide === 0) this.isDisablePrev = true;
        if (this.activeSlide !== 0) this.isDisablePrev = false;
        if (nv === this.getLength - 1) this.isDisableNext = true;
        if (nv !== this.getLength - 1) this.isDisableNext = false;
        this.setCurrentSlide();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.prime {
  font: 10px;
  position: absolute;
  right: 0;
  top: 0;
}
.warper {
  height: 100%;
  width: 100%;
  background-color: grey;
}
.text {
  width: 100%;
}
.box {
  border: 1px solid yellow;
  width: 100%;
  color: white;
}
.nav {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  /* border: 2px solid red; */
}
.container {
  /* height: 60vh; */
  display: flex;
  flex-direction: column;
  height: 400px;
  position: relative;
  /* border: 2px solid yellow; */
}
</style>