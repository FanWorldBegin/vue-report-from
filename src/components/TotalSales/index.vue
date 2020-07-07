<template>
  <div>
    <CommonCard title="累计销售额" value='¥12，333，222'>
      <div class='compare-wrapper'>
        <template>
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase" />
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">7.33%</span>
            <div class="decrease" />
          </div>
        </template>
      </div>
      <template v-slot:footer>
        <span>昨日销售额</span>
        <span class="emphasis">¥12232323</span>
      </template>
    </CommonCard>

  </div>

</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
  .money {
    margin-left: 5px;
    color: #333;
    font-weight: 700;
  }
  .compare-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .compare {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-top: 3px;
      color: #666;
    }
  }
</style>
