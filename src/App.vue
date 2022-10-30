<template>
  <div class="main">
    <json-file-input />
    <div v-if="Object.keys(currentSlide).length !== 0">
      <!-- slider -->
      <SlideShower />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import JsonFileInput from "./components/JsonFileInput.vue";
import SlideShower from "./components/SlideShower.vue";

export default {
  components: {
    JsonFileInput,
    SlideShower,
  },
  computed: { ...mapGetters(["activeSlide", "currentSlide"]) },
  methods: {
    ...mapActions(["nextSlide", "prevSlide", "setSlides", "setCurrentSlide"]),
  },
};
</script>

<style>
#app {
  width: 100%;
}
</style>
