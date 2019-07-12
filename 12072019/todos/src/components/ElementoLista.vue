<template>
  <div>
    <h3><li v-for="tarea in tareas" v-bind:key='tarea'>{{tarea}}</li></h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tareas: [],
    };
  },
  props: {
  },
  methods: {
  },
  watch: {
  },
  computed: {
  },
  created() {
  },
};
</script>

<style>
</style>
