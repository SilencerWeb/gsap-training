<template>
  <a-card
      class="card"
      ref="card"
      hoverable
  >
    <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        slot="cover"
    />
    <template class="ant-card-actions" slot="actions">
      <a-icon type="setting"/>
      <a-icon type="edit"/>
      <a-icon type="ellipsis"/>
    </template>
    <a-card-meta
        title="Card title"
        description="This is the description">
      <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
    </a-card-meta>
  </a-card>
</template>

<style lang="scss" scoped>
  .card {
  }
</style>

<script>
  import { TimelineLite } from 'gsap';

  export default {
    name: 'Card',
    mounted: function () {
      const { card } = this.$refs;

      const timeline = new TimelineLite();

      timeline.fromTo(
        card.$el,
        10,
        { opacity: 0.5, y: -100 },
        { opacity: 1, y: 0 },
      );
    },
  };
</script>