# WaterMark 给网页添加水印

### 引入文件

```
<script src="watermark.min.js"></script>

const watermark = require('watermark.min.js');
```

### 使用

通过 `new WaterMark` 会返回一个 `WaterMark` 实例

```js
const watermarkInstance = new WaterMark({
    // 文字大小
    size: '48px',
    // 字体颜色
    color: '#e1e1e1',
    // 生成的 id
    id: 'watermark',
    // 指纹间距
    density: 200,
    // 不支持canvas的提示
    tip: '你的浏览器不支持Canvas'
});
```

#### 参数说明

| 参数 | 类型 | 说明 |
| ---- | ---- | ---- |
| size | String | 水印字体大小，`默认` 为 `30px` |
| color | String | 水印字体颜色，`默认` 为 `#e1e1e1` |
| id | String | 生成的水印 id `必选` |
| density | Number | 指纹间距，`默认` 为 `200` |
| tip | String | 不支持 canvas 提示 |

### API

均是已`WaterMark` 实例 `watermarkInstance` 开头调用

#### render

渲染水印

```js
watermarkInstance.render('水印');
```

#### clear

清除水印

```js
watermarkInstance.clear();
```