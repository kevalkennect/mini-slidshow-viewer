<template>
  <div class="wraper">
    <button @click="prevSlide" :disabled="isDisablePrev">Previous</button>
    <button @click="nextSlide" :disabled="isDisableNext">Next</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["isDisablePrev", "isDisableNext"],
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getLength", "activeSlide"]),
  },
  methods: {
    ...mapActions(["nextSlide", "prevSlide", "setSlides", "setCurrentSlide"]),
  },
};
</script>

<style scoped>
.wraper {
  width: 200px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}

button {
  height: 30px;
  /* border-radius: 4px; */
  /* border: none; */
  width: 100px;
  cursor: pointer;
}
</style>