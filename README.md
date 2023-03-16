### A tool for calculating the scale range of a chart

#### Install

```Bash
npm install chart-scale
```

#### Import

```javascript
import getChartScale from 'chart-scale'
```

```javascript
import { getChartScale } from 'chart-scale'
```

#### Use

```javascript
const { max, min, interval } = getChartScale(5.3, -0.9, 7)
console.log(max, min, interval)
// {max: 6, min: -1, interval: 1}
```
