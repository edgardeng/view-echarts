import { COMMON_DATA } from './data'
export default {
  name: '条形图',
  type: 'bar',
  data: [
    {
      name: '简单条形图',
      data: COMMON_DATA,
      settings: {}
    },
    {
      name: '排序条形图',
      data: COMMON_DATA,
      settings: {
        metrics: ['年龄'],
        dataOrder: {
          label: '年龄',
          order: 'desc'
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
        xAxisType: ['percent'],
        digit: 4
      }
    },
    {
      name: '坐标轴配置',
      data: COMMON_DATA,
      settings: {
        xAxisType: ['KMB', 'percent'],
        xAxisName: ['余额', '年龄'],
        axisSite: {
          top: ['年龄']
        }
      }
    },
    {
      name: '复杂坐标轴配置',
      data: COMMON_DATA,
      settings: {
        axisSite: {
          top: [COMMON_DATA.columns[2]],
          bottom: [COMMON_DATA.columns[1]]
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
      name: '堆叠条形图',
      data: COMMON_DATA,
      settings: {
        stack: {
          'xxx': COMMON_DATA.columns
        }
      }
    }
  ]
}
