<template>
  <input name="inputBin" type="text" @input="addBit" />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      input: this.value,
    };
  },
  watch: {
    input() {
      this.$emit("input", this.input);
    },
  },
  methods: {
    addBit(e) {
      let error = false;
      for (const bit of e.target.value) {
        if (bit !== "1" && bit !== "0") {
          error = true;
          break;
        }
      }
      if (error) {
        e.target.value = this.input;
      }
      this.input = e.target.value;
    },
  },
};
</script>

<style>
</style>