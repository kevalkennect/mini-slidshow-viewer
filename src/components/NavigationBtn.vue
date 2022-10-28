<template>
  <div class="wraper">
    <button @click="prevSlide">Previous</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
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
  border-radius: 4px;
  border: none;
  width: 100px;
  cursor: pointer;
}
</style>