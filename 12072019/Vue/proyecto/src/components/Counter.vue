<template>
  <div>
    <h1>{{nombre}}</h1>
    <h3>{{numero}}</h3>
    <input v-model="numero" type="number" :max="max" :min="min" :class="{'menorque33':comprueba33,'menorque66':comprueba66}"/>
    <button v-on:click="incrementar"
    :disabled="IncrementIsDisabled"
    :class="{'disabled':IncrementIsDisabled}">
      Incrementar</button>
    <button v-on:click="decrementar"
    :disabled="DecrementIsDisabled">
      Decrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero: 0,
    };
  },
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 10,
    },
    initValue: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    incrementar() {
      this.numero += 1;
    },
    decrementar() {
      this.numero -= 1;
    },
    comprueba33() {
      if (((this.numero - this.min) * 100 / (this.max - this.min)) <= 33) {
        return true;
      }
      return false;
    },
    comprueba66() {
      if (((this.numero - this.min) * 100 / (this.max - this.min)) > 33 && ((this.numero - this.min) * 100 / (this.max - this.min)) <= 66) {
        return true;
      }
      return false;
    },
  },
  watch: {
    numero(val, oldvalue) {
      if (val > this.max) {
        this.numero = this.max;
      }
      if (val < this.min) {
        this.numero = this.min;
      }
    },
  },
  computed: {
    IncrementIsDisabled() {
      return this.numero >= this.max;
    },
    DecrementIsDisabled() {
      return this.numero <= this.min;
    },
  },
  created() {
    this.numero = this.initValue;
    console.log('He sido creado', this.initValue);
  },
};
</script>

<style>
  .disabled{
    background-color: red;
  }
  .menorque33{
    background-color: green;
  }
  .menorque66{
    background-color: orange;
  }
  .menorque100{
    background-color: red;
  }
</style>
