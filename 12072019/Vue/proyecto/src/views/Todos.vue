<template>
  <div>
    <h1>{{nombre}}</h1>
    <h3>{{numero}}</h3>
    <button v-on:click="incrementar">Incrementar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'mundo',
      numero: 0,
    };
  },
  methods: {
    incrementar() {
      this.numero = this.numero + 1;
    },
  },
};
</script>

<style>

</style>
