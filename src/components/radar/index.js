import 'echarts/lib/chart/radar'
import { radar } from './main'
import Core from '../core'
export default Object.assign({}, Core, {
  name: 'Radar',
  data () {
    this.chartHandler = radar
    return {}
  }
})
