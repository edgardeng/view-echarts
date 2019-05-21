import { line } from '../line/main'
// import { bar, histogram } from '../bar/main'
// import { pie, ring } from '../pie/main'
// import { scatter } from '../scatter/main'
// import { radar } from '../radar/main'
// import { gauge } from '../gauge/main'
import Core from '../core'

export default Object.assign({}, Core, {
  name: 'Chart',
  data () {
    this.chartLib = {
      line
      // bar,
      // histogram,
      // pie,
      // ring,
      // scatter,
      // radar,
      // gauge
    }
    this.chartHandler = this.chartLib[this.settings.type]
    return {}
  }
})
