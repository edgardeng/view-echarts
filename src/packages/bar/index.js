import 'echarts/lib/chart/bar'
import { bar } from './main'
import Core from '../../core'
export default Object.assign({}, Core, {
  name: 'Bar',
  data () {
    this.chartHandler = bar
    return {}
  }
})
