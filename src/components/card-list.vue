<template>
  <div class="card-list">
    <card/>
    <card/>
    <card/>
  </div>
</template>

<style lang="scss" scoped>
  .card-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
</style>

<script>
  import Card from './card.vue';

  export default {
    name: 'CardList',
    components: {
      Card,
    },
  };
</script>