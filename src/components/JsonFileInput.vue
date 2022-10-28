<template>
  <div class="large-12 medium-12 small-12 cell" id="app">
    <input type="file" accept="application/json" @change="onFileChange" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["set"]),
    onFileChange(e) {

      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.readFile(files[0]);
    },
    readFile(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log(e.target.result);
        let res = JSON.parse(e.target.result);
        this.setSlides(res.Slides);
      };
      reader.readAsText(file);
    },
  },
};
</script>

<style>
</style>