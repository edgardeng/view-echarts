import 'echarts/lib/chart/funnel'
import { funnel } from './main'
import Core from '../core'
export default Object.assign({}, Core, {
  name: 'Funnel',
  data () {
    this.chartHandler = funnel
    return {}
  }
})
