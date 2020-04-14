# tntd codemirror组件

## 安装

```
$ npm install @tntd/codemirror --save
```

## 使用
```jsx
import CodeMirror from "@tntd/codemirror";

// 导入对应的主题和mode文件
import 'codemirror/theme/3024-day.css';
import 'codemirror/mode/javascript/javascript.js';

<CodeMirror
	mode='javascript'
	theme='night'
	value="789"
	onChange={(value) => {
		console.log(value)
	}}
	lineNumbers={true}
	placeholder="请输入你的内容"
/>
```
## API
| 参数            | 说明           | 类型                     | 默认值    | 是否必须 |
| :-------------- | :------------- | :----------------------- | :-------- | :------- |
| mode            | 当前语言模式   | string                   | 无        | 否       |
| theme           | 主题           | String，预置了day、night | day       | 否       |
| value           | 内容           | string                   | 无        | 否       |
| autofocus       | 自动聚焦       | boolean                  | true      | 否       |
| tabSize         | 缩进           | int                      | 4         | 否       |
| height          | 编辑器高度     | int                      | 300       | 否       |
| placeholder     | 内容           | string                   | 请输入... | 否       |
| readOnly        | 是否只读       | boolean                  | false     | 否       |
| lineNumbers     | 是否显示行数字 | boolean                  | true      | 否       |
| firstLineNumber | 是否显示行数字 | int                      | 1         | 否       |
| indentWithTabs  | -              | boolean                  | true      | 否       |
| smartIndent     | -              | boolean                  | true      | 否       |

## 回调事件
| 参数       | 说明             | 类型           | 默认值 | 是否必须 |
| :--------- | :--------------- | :------------- | :----- | :------- |
| onChange   | 内容变化时的回调 | function(text) |        | 否       |
| onBlur     | 时区焦点时的回调 | function       |        | 否       |
| onScroll   | 滚动回调         | function       |        | 否       |
| onRefresh  | 刷新回调         | function       |        | 否       |
| onKeydown  | 按键回调         | function       |        | 否       |
| onKeypress | 按键回调         | function       |        | 否       |
| onKeyup    | 按键回调         | function       |        | 否       |
| onCut      | 剪切回调         | function       |        | 否       |
| onCopy     | 复制回调         | function       |        | 否       |
| onPaste    | 粘贴回调         | function       |        | 否       |
| onDblClick | 双击回调         | function       |        | 否       |


