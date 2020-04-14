import React, { Fragment } from "react";
import CodeMirror from "../lib";

import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import "codemirror/mode/sql/sql";
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript.js';

const App = () => (
	<div style={{ width: 1200, margin: "15px auto" }}>
		<h1>logo图标</h1>
		<CodeMirror
			mode='htmlmixed'
			theme='night'
			defaultValue="124"
			value="789"
			onChange={(value) => {
				console.log(value)
			}}
			height={500}
			lineNumbers={true}
			placeholder="请输入你的内容"
			lineNumberFormatter={(num) => {
				return "第" + num.toString() + '行'
			}}
		/>
	</div>
);

export default App;
