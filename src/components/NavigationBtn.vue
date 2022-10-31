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
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  box-shadow: 0 9px #999;
}

button:hover {
  background-color: #3e8e41;
}

button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>