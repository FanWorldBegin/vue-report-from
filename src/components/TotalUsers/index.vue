<template>
  <div>
    <CommonCard
      title='累计用户数'
      value='¥81,049'>
      <template>
        <div ref="totalUsersChart" :style="{ width: '100%', height: '100%'}"/>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">8.73%</span>
          <div class="increase" />
          <span class="month">月同比</span>
          <span class="emphasis">35.91%</span>
          <div class="decrease" />
        </div>
      </template>
    </CommonCard>
  </div>

</template>

<script>
import commonCardMixin from '@/utils/mixins/commonCardMixin.js'
export default {
  mixins: [commonCardMixin],
  mounted () {
    const chartDom = this.$refs.totalUsersChart
    const chart = this.$echarts.init(chartDom, 'light')
    chart.setOption({
      grid: {
        // 位置
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: [{
        type: 'bar',
        stack: '总量', // 合并相同系列数据
        data: [200],
        barWidth: 10,
        itemStyle: {
          color: '#45c946'
        }
      },
      {
        type: 'bar',
        stack: '总量', // 合并相同系列数据
        data: [250],
        barWidth: 10,
        itemStyle: {
          color: '#eee'
        }
      },
      // 绘制三角形自定义绘图，
      {
        type: 'custom',
        stack: '总量',
        data: [200], // 和绿色数据一样
        renderItem: (params, api) => {
          console.log(params, api)
          const value = api.value(0) // 获取data中第一个元素 200
          const endPoint = api.coord([value, 0]) // 拿到坐标系与数据关联的值
          console.log(endPoint)
          return {
            position: endPoint,
            type: 'group', // 变为分组
            children: [{
              type: 'path',
              shape: {
                // svg 的d属性
                d: 'M286.935,197.286L159.028,69.379c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.286C1.807,200.9,0,205.184,0,210.132s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.428,12.85,5.428h255.813c4.949,0,9.233-1.811,12.848-5.428c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.9,286.935,197.286z',
                x: -5,
                y: 12,
                width: 10,
                height: 10,
                layout: 'cover' // 缩放
              },
              style: {
                fill: 'red'
              }
            },
            {
              type: 'path',
              shape: {
                // svg 的d属性
                d: 'M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z',
                x: -5,
                y: -22,
                width: 10,
                height: 10,
                layout: 'cover'
              },
              style: {
                fill: '#45c946'
              }
            }
            ]
          }
        }
      }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
  .total-users-footer {
    display: flex;
    align-items: center;

    .month {
      margin-left: 10px;
    }
  }
</style>
