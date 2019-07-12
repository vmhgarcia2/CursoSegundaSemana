<template>
  <div>
    <h1>Hay algo</h1>
    <Counter :initValue = "200" :max="201" :min="199"/>
    <Counter :initValue = "3"/>
    <Counter/>
    <Counter/>
    <Counter/>
  </div>
</template>

<script>

import Counter from '../components/Counter.vue';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      nombre: 'mundo',
    };
  },
};
</script>
