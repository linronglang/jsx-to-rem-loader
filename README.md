- webpack loader
    - 在jsx代码中的style 可以使用 RPX 单位，会自动转换rem

- 下载

```s
npm install jsx-to-rem-loader -D
```

- webpack.config.js

```js
{
    test: /\.(js|tsx|jsx|ts)$/,
    loader: require('jsx-to-rem-loader'),
    options: {
    remUnit: 37.5,
    // 计算后取多少位的小数
    remFixed: 8
    }
},
```

- 使用

```jsx
<div style={{ width: "30RPX" }}>demo</div>
```
