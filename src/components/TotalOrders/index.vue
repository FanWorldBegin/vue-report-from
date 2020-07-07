<template>
  <div>
    <CommonCard
      title='累计订单量'
      value='¥12，3333'>
      <template>
        <!-- 直接使用echarts -->
        <div id="total-orders-chart" :style="{width:'100%', height: '100%'}" ref="totalOrdersChart">
          <!-- 使用v-chart简化 -->
          <v-chart :options="getOptions()"></v-chart>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">¥12，3333</span>
      </template>
    </CommonCard>
  </div>
</template>

<script>

import commonCardMixin from '@/utils/mixins/commonCardMixin.js'

export default {
  mixins: [commonCardMixin],
  mounted () {
    // // 直接使用echarts
    // const chartDom = this.$refs.totalOrdersChart
    // const chart = this.$echarts.init(chartDom, 'light')
    // chart.setOption()
  },
  methods: {
    getOptions () {
      return {
        xAxis: {
          type: 'category',
          show: false,
          boundaryGap: false
          // data: []
        },
        yAxis: {
          show: false
        },
        series: [
          {
            type: 'line',
            data: [174, 454, 556, 367, 443, 454, 556, 366],
            areaStyle: {
              color: 'purple'
            },
            smooth: true,
            lineStyle: { // 线样式
              width: 0
            },
            itemStyle: { // 点
              opacity: 0
            },
          },
        ],
        grid: {
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
