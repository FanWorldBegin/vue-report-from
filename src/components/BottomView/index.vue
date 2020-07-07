<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">93,345</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">93,345</div>
                <v-chart :options="searchUserOption"></v-chart>
              </div>
            </div>

            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank" label="排名" />
                  <el-table-column prop="keyword" label="关键词" />
                  <el-table-column prop="count" label="总搜索量" />
                  <el-table-column prop="users" label="搜索用户数" />
                  <el-table-column prop="range" label="搜索占比" />
              </el-table>
              <el-pagination
                  layout="prev, pager, next"
                  :total="total"
                  :page-size="pageSize"
                  background
                  @current-change="onPageChange"
                />
          </div>
          </div>
        </template>
      </el-card>

    </div>

    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small" @change="onCategoryChange">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options='categoryOptions'></v-chart>
          </div>
        </template>
      </el-card>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchUserOption: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
        },
        yAxis: {
          show: false,
          // 定义y轴数据范围
          min: 0,
          max: 300
        },
        grid: {
          // 绘制图形位置
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series: [{
          type: 'line',
          data: [100, 150, 200, 100, 200, 250, 200, 100, 50, 10],
          areaStyle: {
            color: 'rgba(95,187,255,.5)'
          },
          lineStyle: {
            color: 'rgb(95,187,255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true,
        }]
      },
      searchNmuberOption: {},
      tableData: [
        { id: 1, rank: 1, keyword: '北京L', count: 100, users: 90, range: '90%' }
      ],
      radioSelect: '品类',
      categoryOptions: {},
      total: 100,
      pageSize: 10,

    }
  },
  mounted() {
    this.renderPieChart()
  },
  methods: {
    onCategoryChange() {

    },
    onPageChange(page) {

    },
    renderPieChart() {
      const mockData = [
        {
          legendname: '粉面粥店',
          value: 67,
          percent: '15.40%',
          // 饼图颜色
          itemStyle: {
            color: '#8d7fec'
          },
          // legened 侧边
          name: '粉面粥店 | 15.40%'
        },
        {
          legendname: '便当',
          value: 100,
          percent: '18.40%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '便当 | 18.40%'
        }
      ]
      this.categoryOptions = {
        title: [
          {
            text: '品类分布',
            textStyle: {
              fontSize: 14,
              color: '#666'
            },
            left: 20,
            top: 20
          },
          {
            text: '累计订单量',
            subtext: '320',
            // x y 轴位置
            x: '34.5%',
            y: '42.5%',
            textStyle: {
              fontSize: 14,
              color: '#999'
            },
            subtextStyle: {
              fontSize: 28,
              color: '#333'
            },
            textAlign: 'center'
          },

        ],
        series: [{
          type: 'pie',
          data: mockData,
          name: '品类分布',
          label: {
            normal: {
              show: true,
              position: 'outter', // inner
              formatter: function (params) {
                // 分类名字
                return params.data.legendname
              }
            },
          },
          center: ['35%', '50%'], // 圆心位置，让图左移
          radius: ['45%', '60%'], // 设置为空心[内半径, 外半径] 默认最大75%
          labelLine: {
            normal: {
              // 线段分为2段 -、
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockwise: false, // 是否顺时针
          itemStyle: {
            //
            borderWidth: 4,
            borderColor: '#fff'
          }
        }],
        // 侧边快速选择
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str = params.seriesName + '<br />' +
              params.marker + params.data.legendname + '<br />' + // marker为小圆点
              '数量：' + params.data.value + '<br />' +
              '占比：' + params.data.percent + '%'
            return str
          }
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;

    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;

      &:first-child {
        padding: 0 10px 0 0;
      }

      &:last-child {
        padding: 0 0 0 10px;
      }

      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;

        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }

      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;

        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;

          .chart {
            flex: 1;
            padding: 0 10px;

            .chart-title {
              color: #999;
              font-size: 14px;
            }

            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }

            .echarts {
              height: 50px;
            }
          }
        }

        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;

          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
