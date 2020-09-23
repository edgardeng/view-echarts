import 'echarts/lib/chart/gauge'
import { gauge } from './main'
import Core from '../core'
export default Object.assign({}, Core, {
  name: 'Gauge',
  data () {
    this.chartHandler = gauge
    return {}
  }
})
