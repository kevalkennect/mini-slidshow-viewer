<template>
  <div
    class="box-container"
    :style="{
      fontWeight: BoxData.Formatting.Bold ? 'bold' : 'normal',
      fontSize: BoxData.Formatting.textSize
        ? `${+BoxData.Formatting.textSize}px`
        : '',
      fontFamily: BoxData.Formatting.font ? BoxData.Formatting.font : '',
      ...css,
    }"
  >
    {{ BoxData.content }}
  </div>
</template>

<script>
export default {
  props: ["BoxData"],
  data() {
    return {
      css: {},
    };
  },
  created() {
    let a = this.getPosition(
      this.BoxData.X.toLowerCase(),
      this.BoxData.Y.toLowerCase()
    );
    console.log("a ==>", a);
    this.css = a;
  },

  methods: {
    getPosition(x, y) {
      if (x === "left" && y === "top") {
        return {
          top: "0",
          left: "0",
        };
      }
      if (x === "left" && y === "center") {
        return {
          left: "0",
          top: "50%",
          bottom: "50%",
        };
      }
      if (x === "left" && y === "bottom") {
        return {
          left: "0",
          bottom: "0",
        };
      }
      if (x === "center" && y === "top") {
        console.log("yes ==>", x, y);
        return {
          right: "50%",
          left: "50%",
          top: "0",
        };
      }
      if (x === "center" && y === "center") {
        return {
          right: "50%",
          left: "50%",
          top: "50%",
          bottom: "50%",
        };
      }
      if (x === "center" && y === "bottom") {
        return {
          right: "50%",
          left: "50%",
          bottom: "0",
        };
      }
      if (x === "right" && y === "top") {
        return {
          right: "0",
          top: "0",
        };
      }
      if (x === "right" && y === "center") {
        return {
          right: "0",
          top: "50%",
          bottom: "50%",
        };
      }
      if (x === "right" && y === "bottom") {
        return {
          right: "0",
          bottom: "0",
        };
      }
    },
  },
};
</script>

<style scoped>
.box-container {
  color: white;
  position: absolute;
}
</style>