import 'echarts/lib/chart/line'
import { line } from './main'
import Core from '../core'
export default Object.assign({}, Core, {
  name: 'Line',
  data () {
    this.chartHandler = line
    return {}
  }
})
