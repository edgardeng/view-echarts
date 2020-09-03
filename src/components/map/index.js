import 'echarts/lib/chart/map'
import 'echarts/lib/component/geo'
import { map } from './main'
import Core from '../core'
export default Object.assign({}, Core, {
  name: 'Map',
  data () {
    this.chartHandler = map
    return {}
  }
})
