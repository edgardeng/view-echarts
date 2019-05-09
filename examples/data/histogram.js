import { COMMON_DATA, NUMBER_DATA } from './data'
export default {
  name: '柱状图',
  type: 'histogram',
  data: [
    {
      name: '简单柱状图',
      data: COMMON_DATA,
      settings: {}
    },
    {
      name: '数值轴柱状图',
      data: NUMBER_DATA,
      settings: {
        xAxisType: 'value'
      }
    },
    {
      name: '柱状图+折线图',
      data: COMMON_DATA,
      settings: {
        axisSite: {
          right: ['年龄']
        },
        stack: {
          'x': ['收入', '余额']
        },
        showLine: ['年龄'],
        area: true
      }
    },
    {
      name: '默认在柱子上显示数据',
      data: COMMON_DATA,
      settings: {
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        }
      }
    },
    {
      name: '设置指标维度名称',
      data: COMMON_DATA,
      settings: {
        labelMap: {
          date: '日期',
          resume: '余额',
          uplevel: '增长率'
        },
        yAxisType: ['KMB', 'percent'],
        axisSite: {
          right: ['uplevel']
        }
      }
    },
    {
      name: '坐标轴值域配置',
      data: COMMON_DATA,
      settings: {
        min: [1000]
      }
    },
    {
      name: '带有较小百分比数值',
      data: {
        columns: ['日期', '比率'],
        rows: [
          { '日期': '1-1', '余额': 123, '比率': 0.00001 },
          { '日期': '1-2', '余额': 1223, '比率': 0.00002 },
          { '日期': '1-3', '余额': 2123, '比率': 0.00003 },
          { '日期': '1-4', '余额': 4123, '比率': 0.00007 },
          { '日期': '1-5', '余额': 3123, '比率': 0.00001 },
          { '日期': '1-6', '余额': 7123, '比率': 0.00003 }
        ]
      },
      settings: {
        yAxisType: ['percent'],
        digit: 4
      }
    },
    {
      name: '坐标轴配置',
      data: COMMON_DATA,
      settings: {
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['余额', '年龄'],
        axisSite: {
          right: ['年龄']
        }
      }
    },
    {
      name: '复杂坐标轴配置',
      data: COMMON_DATA,
      settings: {
        axisSite: {
          left: [COMMON_DATA.columns[2]],
          right: [COMMON_DATA.columns[1]]
        }
      }
    },
    {
      name: '指标维度配置',
      data: COMMON_DATA,
      settings: {
        dimension: ['余额'],
        metrics: ['年龄']
      }
    },
    {
      name: '堆叠柱状图',
      data: COMMON_DATA,
      settings: {
        stack: {
          'xxx': ['余额', '年龄']
        }
      }
    }
  ]
}
