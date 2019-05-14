import { COMMON_DATA, PERCENT_DATA, SIMPLE_DATA } from './data'

export default {
  name: '折线图',
  type: 'line',
  data: [
    {
      name: '简单折线图',
      data: SIMPLE_DATA,
      settings: {}
    },
    {
      name: '时间轴折线图',
      data: {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': new Date(1512097200000), '余额': 123, '年龄': 3 },
          { '日期': new Date(1512097220000), '余额': 1223, '年龄': 6 },
          { '日期': new Date(1512097230000), '余额': 2123, '年龄': 9 },
          { '日期': new Date(1512097240000), '余额': 4123, '年龄': 12 },
          { '日期': new Date(1512097260000), '余额': 3123, '年龄': 15 },
          { '日期': new Date(1512097280000), '余额': 7123, '年龄': 20 }
        ]
      },
      settings: {
        xAxisType: 'time'
      }
    },
    {
      name: 'label 属性配置',
      data: COMMON_DATA,
      settings: {
        label: {
          normal: {
            show: true
          }
        }
      }
    },
    {
      name: '设置指标名称',
      data: COMMON_DATA,
      settings: {
        labelMap: {
          date: '新-日期',
          balance: '新-余额'
        }
      }
    },
    {
      name: '设置legend名称',
      data: COMMON_DATA,
      settings: {
        legendName: {
          '余额': 'remain'
        }
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
      data: PERCENT_DATA,
      settings: {
        axisSite: {
          right: ['比率']
        },
        yAxisType: ['KMB', 'percent']
      }
    },
    {
      name: '指标维度配置',
      data: PERCENT_DATA,
      settings: {
        dimension: ['日期'],
        metrics: ['余额']
      }
    },
    {
      name: '坐标轴缩放配置',
      data: PERCENT_DATA,
      settings: {
        dimension: ['日期'],
        metrics: ['余额'],
        scale: [true, true]
      }
    },
    {
      name: '坐标轴值域配置',
      data: PERCENT_DATA,
      settings: {
        dimension: ['比率'],
        metrics: ['余额'],
        min: [1000],
        max: [5000]
      }
    },
    {
      name: '面积图',
      data: PERCENT_DATA,
      settings: {
        area: true
      }
    },
    {
      name: '堆叠折线图',
      data: {
        columns: ['日期', '2015', '2016'],
        rows: [
          { '日期': '1-1', '2015': 100, '2016': 40 },
          { '日期': '1-2', '2015': 110, '2016': 60 },
          { '日期': '1-3', '2015': 140, '2016': 10 },
          { '日期': '1-4', '2015': 260, '2016': 30 },
          { '日期': '1-5', '2015': 300, '2016': 20 },
          { '日期': '1-6', '2015': 380, '2016': 70 }
        ]
      },
      settings: {
        stack: {
          '年份': ['2015', '2016']
        }
      }
    }
  ]
}
