<template>
  <div>
    <h1>{{nombre}}</h1>
    <h3>{{numero}}</h3>
    <input v-model="numero"/>
    <button v-on:click="incrementar" v-bind:disabled="IncrementIsDisabled">Incrementar</button>
    <button v-on:click="decrementar" v-bind:disabled="DecrementIsDisabled">Decrementar</button>
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
  },
  watch: {
    numero(val, oldvalue) {
      console.log(val, oldvalue);
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
