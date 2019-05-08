import { bar, histogram } from '../bar/main'
import { line } from '../line/main'
import { pie, ring } from '../pie/main'
import { scatter } from '../scatter/main'
import { radar } from '../radar/main'
// import { waterfall } from '../waterfall/main'
import { gauge } from '../gauge/main'
import Core from '../../core'

export default Object.assign({}, Core, {
  name: 'ViChart',
  data () {
    this.chartLib = {
      bar,
      histogram,
      line,
      pie,
      ring,
      scatter,
      radar,
      gauge
    }
    this.chartHandler = this.chartLib[this.settings.type]
    return {}
  }
})
