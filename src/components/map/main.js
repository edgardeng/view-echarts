import echarts from 'echarts/lib/echarts'
import { itemPoint } from '../constants'
import { getMapJSON, getFormated } from '../utils'

function getTooltip (dataType, digit, dataStore, metrics, color, labelMap) {
  return {
    formatter (item) {
      const tpl = []
      if (!item.name) return ''
      tpl.push(`${item.name}<br>`)
      metrics.forEach((label, index) => {
        const title = labelMap[label] != null ? labelMap[label] : label
        tpl.push(`${itemPoint(color[index])} ${title} : `)
        if (dataStore[item.name]) {
          tpl.push(getFormated(dataStore[item.name][label], dataType[label], digit))
        } else {
          tpl.push('-')
        }
        tpl.push('<br>')
      })
      return tpl.join(' ')
    }
  }
}

function setGeoLabel (value, target, label) {
  if (typeof value === 'object') {
    target[label] = value
  } else if (value) {
    target[label] = {
      normal: { show: true },
      emphasis: { show: true }
    }
  }
}

function getSeries (args) {
  const {
    position,
    selectData,
    dimension,
    metrics,
    rows,
    label,
    itemStyle,
    selectedMode,
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    labelMap,
    scaleLimit,
    mapGrid,
    mapGeoCoord
  } = args
  const result = []

  const mapBase = {
    type: 'map',
    map: position,
    itemStyle: {
      normal: {
        areaColor: '#C9E6FF',
        borderColor: '#fff',
        borderWidth: 1,
        shadowColor: '#5AB2FE',
        shadowBlur: 5
      },
      emphasis: {
        areaColor: '#5AB2FE',
        shadowColor: '#2264d0',
        shadowBlur: 10
      }
    }
  }
  if (mapGeoCoord) {
    mapBase.showLegendSymbol = false
  }

  const scatterPoint = {
    type: 'scatter',
    coordinateSystem: 'geo',
    symbol: 'pin',
    symbolSize: 50,
    label: {
      normal: {
        show: true,
        formatter: function (value) {
          return value.value[2]
        },
        textStyle: { color: '#f0f0f0', fontSize: 9 }
      }
    }
  }

  metrics.forEach(itemName => {
    const itemResult = Object.assign({
      name: labelMap[itemName] != null ? labelMap[itemName] : itemName,
      data: [],
      selectedMode,
      roam,
      center,
      aspectScale,
      boundingCoords,
      zoom,
      scaleLimit
    }, mapBase)
    if (itemResult.scaleLimit === undefined) delete itemResult.scaleLimit
    if (itemResult.aspectScale === undefined) delete itemResult.aspectScale

    if (mapGrid) {
      Object.keys(mapGrid).forEach(key => {
        itemResult[key] = mapGrid[key]
      })
    }

    setGeoLabel(itemStyle, itemResult, 'itemStyle')
    setGeoLabel(label, itemResult, 'label')

    rows.forEach(row => {
      itemResult.data.push({
        name: row[dimension],
        value: row[itemName],
        selected: selectData
      })
    })
    result.push(itemResult)
  })

  if (mapGeoCoord) {
    // scatter
    metrics.forEach(itemName => {
      const itemResult = Object.assign({
        name: labelMap[itemName] != null ? labelMap[itemName] : itemName,
        data: []
      }, scatterPoint)

      rows.forEach(row => {
        const name = row[dimension]
        const coord = JSON.parse(JSON.stringify(mapGeoCoord[name]))
        coord.push(row[itemName])
        itemResult.data.push({
          name,
          value: coord
        })
      })
      result.push(itemResult)
    })
  }

  return result
}

function getLegendMap (args) {
  const { metrics, legendName, labelMap } = args
  if (!legendName && !labelMap) return { data: metrics }
  const data = labelMap
    ? metrics.map(item => (labelMap[item] == null ? item : labelMap[item]))
    : metrics
  return {
    data,
    formatter (name) {
      return legendName[name] != null ? legendName[name] : name
    }
  }
}

function registerMap (args, mapOrigin) {
  const {
    _once,
    registerSign,
    beforeRegisterMap,
    beforeRegisterMapOnce,
    registerSignOnce,
    position,
    specialAreas
  } = args
  if (!_once[registerSign]) {
    if (beforeRegisterMap) mapOrigin = beforeRegisterMap(mapOrigin)
    if (beforeRegisterMapOnce && !_once[registerSignOnce]) {
      _once[registerSignOnce] = true
      mapOrigin = beforeRegisterMapOnce(mapOrigin)
    }
    _once[registerSign] = true
    echarts.registerMap(position, mapOrigin, specialAreas)
  }
}

export const map = (columns, rows, settings, extra) => {
  const {
    position = 'china',
    selectData = false,
    selectedMode,
    label = true,
    dataType = {},
    digit = 2,
    dimension = columns[0],
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    scaleLimit,
    legendName = {},
    labelMap = {},
    mapGrid,
    itemStyle,
    positionJsonLink,
    beforeRegisterMap,
    beforeRegisterMapOnce,
    mapURLProfix = 'https://unpkg.com/echarts@3.6.2/map/json/',
    specialAreas = {},
    mapGeoCoord
  } = settings
  const mapOrigin = settings.mapOrigin
  let metrics = columns.slice()
  if (settings.metrics) {
    metrics = settings.metrics
  } else {
    metrics.splice(columns.indexOf(dimension), 1)
  }
  const { tooltipVisible, legendVisible, color, _once } = extra
  const dataStore = {}
  rows.forEach(row => { dataStore[row[dimension]] = row })
  const tooltip = tooltipVisible && getTooltip(dataType, digit, dataStore, metrics, color, labelMap)
  const legend = legendVisible && getLegendMap({ metrics, legendName, labelMap })
  const seriesParams = {
    position,
    selectData,
    label,
    itemStyle,
    dimension,
    metrics,
    rows,
    selectedMode,
    roam,
    center,
    aspectScale,
    boundingCoords,
    zoom,
    labelMap,
    scaleLimit,
    mapGrid,
    mapGeoCoord
  }
  const series = getSeries(seriesParams)
  const registerOptions = {
    _once,
    beforeRegisterMap,
    beforeRegisterMapOnce,
    registerSign: `MAP_REGISTER_${position}`,
    registerSignOnce: `ONCE_MAP_REGISTER_${position}`,
    position,
    specialAreas
  }
  if (mapOrigin) {
    registerMap(registerOptions, mapOrigin)
    return { series, tooltip, legend }
  } else {
    return getMapJSON({
      position,
      positionJsonLink,
      beforeRegisterMapOnce,
      mapURLProfix
    }).then(json => {
      registerMap(registerOptions, json)
      const options = { series, tooltip, legend }
      if (mapGeoCoord) {
        options.geo = {
          map: position,
          show: true
        }
        console.log(options)
      }
      return options
    })
  }
}
