<template>
  <div class="main-square">
    <div class="dataInput">
      <label for="inputBin">Binary input</label>
      <input-bin id="inputBin" v-model="input" />
    </div>
    <button class="btnConverter" @click="convert">Convert</button>
    <div class="output">
      <label for="outputDec">Decimal output</label>
      <input
        id="outputDec"
        name="outputDec"
        type="text"
        v-model="output"
        disabled
      />
    </div>
  </div>
</template>

<script>
import InputBin from "./InputBin.vue";
import { bin2dec } from "@/utils/bin2dec";
export default {
  name: "Converter",
  components: { InputBin },
  data() {
    return {
      input: "",
      output: "",
    };
  },
  methods: {
    convert() {
      this.output = bin2dec(this.input);
    },
  },
};
</script>

<style scoped>
</style>
