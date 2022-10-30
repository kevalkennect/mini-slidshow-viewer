<template>
  <div
    class="box-container"
    :style="{
      fontWeight: data.Formatting.Bold ? 'bold' : 'normal',
      fontSize: data.Formatting.textSize
        ? `${+data.Formatting.textSize}px`
        : '',
      fontFamily: data.Formatting.font ? data.Formatting.font : '',
    }"
  >
    {{ data.content }}
  </div>
</template>

<script>
export default {
  props: ["data"],

  computed: {
    // calcXandY() {
    //   let obj = {};
    //   const { X, Y } = this.data;
    //   if(X == 'center')
    // },
  },
};
</script>

<style scoped>
.box-container {
  color: white;
}
</style>