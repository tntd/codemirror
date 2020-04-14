import React, { Fragment } from "react";
import CodeMirror from "../lib";

import 'codemirror/theme/3024-day.css';
import 'codemirror/theme/3024-night.css';
import "codemirror/mode/sql/sql";
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';
import 'codemirror/mode/javascript/javascript.js';

const App = () => {
	const text = `
	function findSequence(goal) {
		function find(start, history) {
		  if (start == goal)
			return history;
		  else if (start > goal)
			return null;
		  else
			return find(start + 5, "(" + history + " + 5)") ||
				   find(start * 3, "(" + history + " * 3)");
		}
		return find(1, "1");
	  }
	`
	return (
		<div style={{ width: 1200, margin: "15px auto" }}>
			<h1>logo图标</h1>
			<CodeMirror
				mode='javascript'
				theme='day'
				value={text}
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
	)
};

export default App;
