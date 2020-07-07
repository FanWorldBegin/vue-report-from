<template>
  <div>
    <CommonCard
      title='今日交易用户数'
      value='¥81,049'
    >
    <template>
      <!-- 直接使用echarts -->
      <!-- <div id="today-users-chart" ref="todayUsersChart" :style="{ width: '100%', height: '100%'}"></div> -->
      <v-chart :options="getOption()">

      </v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.14%</span>
    </template>
    </CommonCard>
  </div>

</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [commonCardMixin],
  mounted () {
    // 使用echarts
    // const chartDom = this.$refs.todayUsersChart
    // const chart = this.$echarts.init(chartDom, 'light')
    // chart.setOption({})
  },
  methods: {
    getOption () {
      return {
        color: ['#3398DB'], // 柱状图颜色
        series: [{
          type: 'bar',
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          barWidth: '60%' // 柱状图柱形宽度
        }],
        xAxis: {
          type: 'category',
          data: ['00.00', '00.01', '11.22', '20.00', '12.20', '00.02', '15.33', '00.00', '00.01', '11.22', '20.00', '12.20', '00.02', '15.33'],
          show: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          // 位置
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
