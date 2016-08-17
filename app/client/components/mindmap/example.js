module.exports = [{
	"title": "Concepts",
	"key": 0,
	"id": 5,
	"level": 0,
	"ideas": {
		"1": {
			"title": "Differences with JavaScript",
			"content": "<div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;\"><h2 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Literals</h2><div class=\"comparison\" style=\"overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\"><table style=\"width: 798px;\"><tbody><tr><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">JavaScript</th><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">Elm</th></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">3</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">3</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">3.1415</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">3.1415</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\"Hello world!\"</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\"Hello world!\"</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><span style=\"color: rgb(203, 203, 203);\">Multiline strings not widely supported</span></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\"\"\"multiline string\"\"\"</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'Hello world!'</code></td><td style=\"padding: 6px; width: 400px;\"><span style=\"color: rgb(203, 203, 203);\">Cannot use single quotes for strings</span></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><span style=\"color: rgb(203, 203, 203);\">No distinction between characters and strings</span></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'a'</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">true</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">True</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">[1,2,3]</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">[1,2,3]</code></td></tr></tbody></table></div><br></div><div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;\"><h2 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Objects / Records</h2><div class=\"comparison\" style=\"overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\"><table style=\"width: 798px;\"><tbody><tr><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">JavaScript</th><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">Elm</th></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">{ x: 3, y: 4 }</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">{ x = 3, y = 4 }</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">point.x</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">point.x</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">point.x = 42</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">{ point | x &lt;- 42 }</code></td></tr></tbody></table></div><br></div><div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;\"><h2 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Functions</h2><div class=\"comparison\" style=\"overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\"><table style=\"width: 798px;\"><tbody><tr><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">JavaScript</th><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">Elm</th></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">function(x,y) { return x + y; }</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\\x y -&gt; x + y</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">Math.max(3, 4)</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">max 3 4</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">Math.min(1, Math.pow(2, 4))</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">min 1 (2^4)</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">numbers.map(Math.sqrt)</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">List.map sqrt numbers</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">points.map(function(p) { return p.x })</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">List.map .x points</code></td></tr></tbody></table></div><br></div><div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;\"><h2 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Control Flow</h2><div class=\"comparison\" style=\"overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\"><table style=\"width: 798px;\"><tbody><tr><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">JavaScript</th><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">Elm</th></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">3 &gt; 2 ? 'cat' : 'dog'</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">if 3 &gt; 2 then \"cat\" else \"dog\"</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">var x = 42; ...</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">let x = 42 in ...</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">return 42</code></td><td style=\"padding: 6px; width: 400px;\"><span style=\"color: rgb(203, 203, 203);\">Everything is an expression, no need for return</span></td></tr></tbody></table></div><br></div><div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 800px; margin: 0px auto;\"><h2 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Strings</h2><div class=\"comparison\" style=\"overflow: hidden; border: 1px solid rgb(140, 140, 140); border-radius: 3px; background-image: initial; background-attachment: initial; background-size: initial; background-origin: initial; background-clip: initial; background-position: initial; background-repeat: initial;\"><table style=\"width: 798px;\"><tbody><tr><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">JavaScript</th><th style=\"padding: 6px; width: 400px; background: rgb(221, 221, 221);\">Elm</th></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'abc' + '123'</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\"abc\" ++ \"123\"</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'abc'.length</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">String.length \"abc\"</code></td></tr><tr style=\"background: rgb(251, 251, 251);\"><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'abc'.toUpperCase()</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">String.toUpper \"abc\"</code></td></tr><tr><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">'abc' + 123</code></td><td style=\"padding: 6px; width: 400px;\"><code style=\"font-family: 'Source Code Mono', monospace;\">\"abc\" ++ toString 123</code></td></tr></tbody></table></div></div>",
			"key": 1,
			"id": 6,
			"level": 0
		},
		"2": {
			"title": "records",
			"content": "you can define a record like this:<div>bill = {name = \"gates\"}</div><div><br></div><div>access with:</div><div><br></div><div>bill.name</div><div><br></div><div>or</div><div><br></div><div>.name bill</div><div><br></div><div>to update</div><div><br></div><div><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">{ bill | name &lt;- </span><span class=\"hljs-string\" style=\"color: rgb(153, 204, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">\"Nye\"</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }</span><br></div><div><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"><br></span></div><div><span style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;\">It is important to notice that we do not make&nbsp;</span><em style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;\">destructive</em><span style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;\">&nbsp;updates. In other words, when we update some fields of&nbsp;</span><code style=\"font-family: 'Source Code Mono', monospace; color: rgb(41, 60, 75); font-size: medium; line-height: 24px; white-space: normal;\">bill</code><span style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: 24px;\">&nbsp;we actually create a new record rather than overwriting the existing one. Elm makes this efficient by sharing as much content as possible. If you update one of ten fields, the new record will share all of the nine unchanged values.</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"><br></span></div>",
			"key": 2,
			"id": 7,
			"level": 1,
			"ideas": {}
		},
		"3": {
			"title": "Contracts",
			"content": "<span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">fortyTwo</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> : </span><span class=\"hljs-type\" style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">Int</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n</span><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">fortyTwo</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> =\n  </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">42</span><div><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\"><br></span></div><div><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\"><br></span></div>",
			"key": 3,
			"id": 9,
			"level": 2,
			"ideas": {
				"1": {
					"title": "type annotation",
					"key": 1,
					"id": 10,
					"level": 0,
					"ideas": {
						"1": {
							"title": "to rule out runtime errors",
							"key": 1,
							"id": 11,
							"level": 0
						},
						"2": {
							"title": "you can define your own type?",
							"content": "<div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">view : Widget -&gt; Element</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">view widget =</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; case widget of</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; ScatterPlot points -&gt;</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; viewScatterPlot points</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\"><br></span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; LogData logs -&gt;</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; flow down (map viewLog logs)</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\"><br></span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; TimePlot occurances -&gt;</span></font></div><div><font color=\"#66cccc\" face=\"Source Code Mono, monospace\" size=\"3\"><span style=\"line-height: normal; white-space: pre;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; viewTimePlot occurances</span></font></div>",
							"key": 2,
							"id": 30,
							"level": 1
						}
					}
				}
			}
		},
		"4": {
			"title": "Immutability",
			"key": 4,
			"id": 37,
			"level": 3
		},
		"7": {
			"title": "Signals and Addresses",
			"key": 7,
			"id": 84,
			"level": 4,
			"ideas": {}
		},
		"8": {
			"title": "Functions",
			"content": "<div>import Graphics.Element exposing (..)</div><div>import Keyboard</div><div><br></div><div><br></div><div>main : Signal Element</div><div>main =</div><div>&nbsp; Signal.map show(Keyboard.arrows)</div><div><br></div><div>we omit the parentheses for the method nam</div><div>also show is actually under Graphics.Element.show</div>",
			"key": 8,
			"id": 93,
			"level": 5
		}
	}
}, {
	"title": "Packages",
	"key": 1,
	"id": 85,
	"level": 1,
	"ideas": {
		"1": {
			"title": "Signal",
			"key": 1,
			"id": 86,
			"level": 0,
			"ideas": {
				"1": {
					"title": "http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Signal",
					"key": 1,
					"id": 87,
					"level": 0
				}
			}
		},
		"2": {
			"title": "Website",
			"key": 2,
			"id": 88,
			"level": 1,
			"ideas": {
				"1": {
					"title": "http://package.elm-lang.org/packages/elm-lang/core/3.0.0",
					"key": 1,
					"id": 89,
					"level": 0
				}
			}
		}
	}
}, {
	"title": "Resources",
	"key": 2,
	"id": 2,
	"level": 2,
	"ideas": {
		"4": {
			"title": "Complete Guide",
			"content": "<h1 id=\"complete-guide\" style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal; color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; line-height: normal;\">Complete Guide</h1><ul class=\"guide content\" style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal;\"><li style=\"margin-bottom: 6px;\"><a href=\"http://elm-lang.org/guide/core-language\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Core Language</a><ul style=\"margin-top: 16px; margin-bottom: 16px; margin-left: 0px; padding-left: 24px;\"><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#values\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Values</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#functions\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Functions</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#if-expressions\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">If Expressions</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#lists\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Lists</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#tuples\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Tuples</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/core-language#records\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Records</a></li></ul></li><li style=\"margin-bottom: 6px;\"><a href=\"http://elm-lang.org/guide/model-the-problem\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Model The Problem</a><ul style=\"margin-top: 16px; margin-bottom: 16px; margin-left: 0px; padding-left: 24px;\"><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#contracts\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Contracts</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#enumerations\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Enumerations</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#state-machines\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">State Machines</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#tagged-unions\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Tagged Unions</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#banishing-null\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Banishing NULL</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/model-the-problem#recursive-data-structures\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Recursive Data Structures</a></li></ul></li><li style=\"margin-bottom: 6px;\"><a href=\"https://github.com/evancz/elm-architecture-tutorial/\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\"><b>Architecture</b></a><ul style=\"margin-top: 16px; margin-bottom: 16px; margin-left: 0px; padding-left: 24px;\"><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"https://github.com/evancz/elm-architecture-tutorial/#example-1-a-counter\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\"><b>Components</b></a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\"><b>Components with HTTP</b></a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"https://github.com/evancz/elm-architecture-tutorial/#example-8-animation\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\"><b>Components with Animation</b></a></li></ul></li><li style=\"margin-bottom: 6px;\"><a href=\"http://elm-lang.org/guide/reactivity\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Reactivity</a><ul style=\"margin-top: 16px; margin-bottom: 16px; margin-left: 0px; padding-left: 24px;\"><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/reactivity#signals\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Signals</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/reactivity#tasks\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Tasks</a></li></ul></li><li style=\"margin-bottom: 6px;\"><a href=\"http://elm-lang.org/guide/interop\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Interop</a><ul style=\"margin-top: 16px; margin-bottom: 16px; margin-left: 0px; padding-left: 24px;\"><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/interop#html-embedding\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">HTML Embedding</a></li><li style=\"margin-bottom: 6px; list-style-type: none;\"><a href=\"http://elm-lang.org/guide/interop#ports\" style=\"color: rgb(52, 73, 94);\" target=\"_blank\">Ports</a></li></ul></li></ul>",
			"key": 4,
			"id": 29,
			"level": 0
		},
		"5": {
			"title": "Examples",
			"content": "<div class=\"content\" style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 600px; margin: 0px auto;\"><h1 id=\"learn-by-example\" style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Learn by Example</h1><p style=\"line-height: 1.5em;\">Walk through a sequence of small examples, building skills one at a time by reading and modifying Elm code in the&nbsp;<a href=\"http://elm-lang.org/try\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">online editor</a>.</p><p style=\"line-height: 1.5em;\">Remember to check the&nbsp;<a href=\"http://elm-lang.org/docs/syntax\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">syntax reference</a>&nbsp;and&nbsp;<a href=\"http://elm-lang.org/docs\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">docs</a>&nbsp;when you see new syntax or features!</p></div><div style=\"color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium; line-height: normal; width: 600px; margin: 0px auto;\"><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Core</h3><ul><li style=\"margin-bottom: 4px;\">functions<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/functions\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">use them</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/infix\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">infixes</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/forward-apply\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">use fewer parens</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/define-functions\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">define your own</a></li></ul></li><li style=\"margin-bottom: 4px;\">recursion<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/length\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">list length</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/zip\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">zip</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/quick-sort\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">quick sort</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/merge-sort\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">merge sort</a></li></ul></li><li style=\"margin-bottom: 4px;\">union types<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/either\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">either</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/binary-tree\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">binary tree</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/boolean-expressions\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">boolean expressions</a></li></ul></li></ul></div><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">HTML</h3><ul><li style=\"margin-bottom: 4px;\">basics<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/hello-html\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">hello world!</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/unordered-list\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">unordered list</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/markdown\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">markdown</a></li></ul></li><li style=\"margin-bottom: 4px;\">user input<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/buttons\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">buttons</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/field\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">field</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/password\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">password</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/checkboxes\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">checkboxes</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/radio-buttons\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">radio buttons</a></li></ul></li><li style=\"margin-bottom: 4px;\">larger examples<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/evancz/elm-architecture-tutorial/\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">dynamic list</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/sign-up\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">sign up</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/evancz/elm-todomvc\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">todo list</a></li></ul></li></ul></div><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Visuals</h3><ul><li style=\"margin-bottom: 4px;\">2D graphics<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/lines\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">lines</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/shapes\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">shapes</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/collage-text\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">text</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/collage-element\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">elements</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/transforms\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">transforms</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/color\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">color</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/linear-gradient\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">linear gradient</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/radial-gradient\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">radial gradient</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/texture\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">texture</a></li></ul></li><li style=\"margin-bottom: 4px;\">layout<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/hello-element\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">hello world</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/layout-simple\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">simple layout</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/layout-fancy\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">fancier layout</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/centering\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">centering</a></li></ul></li></ul></div><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Signals</h3><ul><li style=\"margin-bottom: 4px;\">mouse<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/mouse-position\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">position</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/mouse-is-down\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">is down</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/mouse-clicks\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">clicks</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/resize-yogi\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">yogi</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/mouse-tracker\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">tracker</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/stamps\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">stamps</a></li></ul></li><li style=\"margin-bottom: 4px;\">window<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/resize-paint\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">size</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/window-centering\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">centering</a></li></ul></li><li style=\"margin-bottom: 4px;\">keyboard<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/arrows\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">arrows</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/wasd\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">wasd</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/keys\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">keys down</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/key-presses\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">key presses</a></li></ul></li><li style=\"margin-bottom: 4px;\">time<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/clock\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">clock</a></li></ul></li></ul></div><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Games</h3><ul><li style=\"margin-bottom: 4px;\">simple<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/mario\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">mario</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/adventure\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">adventure</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/pong\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">pong</a></li></ul></li><li style=\"margin-bottom: 4px;\">community<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/jcollard/elmtris\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Tetris</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/Dobiasd/Breakout#breakout--play-it\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Breakout</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/Dobiasd/Maze#maze--play-it\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Maze</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/Dobiasd/Demoscene-Concentration\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Concentration</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/thSoft/froggy\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Froggy</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"https://github.com/Gizra/elm-hedley\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">Hedley</a></li></ul></li></ul></div><div class=\"examples\" style=\"width: 300px; display: inline-block; vertical-align: top;\"><h3 style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal;\">Tasks</h3><ul><li style=\"margin-bottom: 4px;\">HTTP<ul style=\"margin-top: 6px; margin-bottom: 20px; padding-left: 1em;\"><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/zip-codes\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">zip codes</a></li><li style=\"margin-bottom: 4px; list-style-type: none;\"><a href=\"http://elm-lang.org/examples/flickr\" style=\"color: rgb(96, 181, 204);\" target=\"_blank\">flickr</a></li></ul></li></ul></div></div>",
			"key": 5,
			"id": 38,
			"level": 1,
			"ideas": {}
		},
		"6": {
			"title": "https://pragmaticstudio.com/blog/2014/12/19/getting-started-with-elm",
			"key": 6,
			"id": 90,
			"level": 2,
			"ideas": {
				"1": {
					"title": "third part tutorials",
					"key": 1,
					"id": 91,
					"level": 0
				}
			}
		}
	}
}, {
	"title": "Project Starters",
	"key": 3,
	"id": 95,
	"level": 3,
	"ideas": {
		"1": {
			"title": "https://github.com/evancz/elm-architecture-tutorial/",
			"key": 1,
			"id": 50,
			"level": 0,
			"ideas": {
				"2": {
					"title": "Archeticture",
					"content": "<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" style=\"box-sizing: border-box; tab-size: 8; font-family: Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 13px; line-height: 18.2000007629395px; background-color: rgb(255, 255, 255);\"><tbody style=\"box-sizing: border-box;\"><tr style=\"box-sizing: border-box;\"><td id=\"LC6\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  1. Model  - a full definition of the application's state</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L7\" class=\"blob-num js-line-number\" data-line-number=\"7\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC7\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  2. Update - a way to step the application state forward</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L8\" class=\"blob-num js-line-number\" data-line-number=\"8\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC8\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  3. View   - a way to visualize our application state with HTML</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L9\" class=\"blob-num js-line-number\" data-line-number=\"9\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC9\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  4. Inputs - the signals necessary to manage events</span></td></tr></tbody></table>",
					"key": 2,
					"id": 61,
					"level": 0,
					"ideas": {
						"5": {
							"title": "Application Skeleton",
							"content": "<pre style=\"box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- MODEL</span>\n\n<span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">type alias </span><span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span> { <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span> }\n\n\n<span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- UPDATE</span>\n\n<span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">type </span><span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Action</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span> <span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Reset</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">|</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">update</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">:</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Action</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span>\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">update </span>action model <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span>\n  <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">case </span>action <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">of</span>\n    <span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Reset</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n    <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n\n\n<span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- VIEW</span>\n\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">view</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">:</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Html</span>\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">view </span><span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span>\n  <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span></pre>",
							"key": 5,
							"id": 70,
							"level": 0
						},
						"6": {
							"title": "https://github.com/evancz/elm-architecture-tutorial/#example-5-random-gif-viewer",
							"key": 6,
							"id": 78,
							"level": 1,
							"ideas": {
								"1": {
									"title": "I stopped here",
									"key": 1,
									"id": 79,
									"level": 0
								}
							}
						},
						"7": {
							"title": "Pattern",
							"key": 7,
							"id": 80,
							"level": 2,
							"ideas": {
								"1": {
									"title": "Update",
									"key": 1,
									"id": 62,
									"level": 0,
									"ideas": {
										"1": {
											"title": "Moves our application forward",
											"key": 1,
											"id": 63,
											"level": 0
										}
									}
								},
								"2": {
									"title": "Model",
									"key": 2,
									"id": 64,
									"level": 1,
									"ideas": {
										"1": {
											"title": "Definition of application state",
											"key": 1,
											"id": 65,
											"level": 0
										}
									}
								},
								"3": {
									"title": "VIew",
									"key": 3,
									"id": 66,
									"level": 2,
									"ideas": {
										"1": {
											"title": "a way to visualize our application state with HTML\n",
											"key": 1,
											"id": 67,
											"level": 0
										}
									}
								},
								"4": {
									"title": "Inputs/Actions",
									"key": 4,
									"id": 68,
									"level": 3,
									"ideas": {
										"1": {
											"title": "Signals",
											"key": 1,
											"id": 69,
											"level": 0
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"2": {
			"title": "https://github.com/evancz/elm-todomvc",
			"key": 2,
			"id": 39,
			"level": 1,
			"ideas": {
				"1": {
					"title": "todo mvc",
					"content": "<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" style=\"box-sizing: border-box; tab-size: 8; font-family: Helvetica, arial, nimbussansl, liberationsans, freesans, clean, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol'; font-size: 13px; line-height: 18.2000007629395px; background-color: rgb(255, 255, 255);\"><tbody style=\"box-sizing: border-box;\"><tr style=\"box-sizing: border-box;\"><td id=\"LC6\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  1. Model  - a full definition of the application's state</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L7\" class=\"blob-num js-line-number\" data-line-number=\"7\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC7\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  2. Update - a way to step the application state forward</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L8\" class=\"blob-num js-line-number\" data-line-number=\"8\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC8\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  3. View   - a way to visualize our application state with HTML</span></td></tr><tr style=\"box-sizing: border-box;\"><td id=\"L9\" class=\"blob-num js-line-number\" data-line-number=\"9\" style=\"box-sizing: border-box; padding: 0px 10px; width: 50px; min-width: 50px; white-space: nowrap; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; line-height: 18px; color: rgba(0, 0, 0, 0.298039); vertical-align: top; text-align: right; border-style: solid; border-color: rgb(238, 238, 238); border-width: 0px 1px 0px 0px; cursor: pointer; -webkit-user-select: none;\"></td><td id=\"LC9\" class=\"blob-code blob-code-inner js-file-line\" style=\"box-sizing: border-box; padding: 0px 10px; position: relative; vertical-align: top; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 12px; white-space: pre; overflow: visible; word-wrap: normal;\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">  4. Inputs - the signals necessary to manage events</span></td></tr></tbody></table>",
					"key": 1,
					"id": 40,
					"level": 0,
					"ideas": {
						"1": {
							"title": "Update",
							"key": 1,
							"id": 41,
							"level": 0,
							"ideas": {
								"1": {
									"title": "Moves our application forward",
									"key": 1,
									"id": 47,
									"level": 0
								}
							}
						},
						"2": {
							"title": "Model",
							"key": 2,
							"id": 42,
							"level": 1,
							"ideas": {
								"1": {
									"title": "Definition of application state",
									"key": 1,
									"id": 48,
									"level": 0
								}
							}
						},
						"3": {
							"title": "VIew",
							"key": 3,
							"id": 43,
							"level": 2,
							"ideas": {
								"1": {
									"title": "a way to visualize our application state with HTML\n",
									"key": 1,
									"id": 49,
									"level": 0
								}
							}
						},
						"4": {
							"title": "Inputs",
							"key": 4,
							"id": 45,
							"level": 3,
							"ideas": {
								"1": {
									"title": "Signals",
									"key": 1,
									"id": 46,
									"level": 0
								}
							}
						},
						"5": {
							"title": "Application Skeleton",
							"content": "<pre style=\"box-sizing: border-box; overflow: auto; font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace; font-size: 13.6000003814697px; margin-bottom: 0px; font-stretch: normal; line-height: 1.45; padding: 16px; border-radius: 3px; word-wrap: normal; word-break: normal; background-color: rgb(247, 247, 247);\"><span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- MODEL</span>\n\n<span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">type alias </span><span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span> { <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span> }\n\n\n<span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- UPDATE</span>\n\n<span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">type </span><span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Action</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span> <span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Reset</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">|</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">update</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">:</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Action</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span>\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">update </span>action model <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span>\n  <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">case </span>action <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">of</span>\n    <span class=\"pl-c1\" style=\"box-sizing: border-box; color: rgb(0, 134, 179);\">Reset</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n    <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span>\n\n\n<span class=\"pl-c\" style=\"box-sizing: border-box; color: rgb(150, 152, 150);\">-- VIEW</span>\n\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">view</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">:</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Model</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">-&gt;</span> <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">Html</span>\n<span class=\"pl-en\" style=\"box-sizing: border-box; color: rgb(121, 93, 163);\">view </span><span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">=</span>\n  <span class=\"pl-k\" style=\"box-sizing: border-box; color: rgb(167, 29, 93);\">...</span></pre>",
							"key": 5,
							"id": 52,
							"level": 4
						}
					}
				}
			}
		}
	}
}, {
	"title": "Pain points",
	"key": 4,
	"id": 18,
	"level": 4,
	"ideas": {
		"1": {
			"title": "What the hell are all these arrows",
			"key": 1,
			"id": 19,
			"level": 0,
			"ideas": {
				"1": {
					"title": "Simple",
					"key": 1,
					"id": 20,
					"level": 0,
					"ideas": {
						"1": {
							"title": "a:List String -> int",
							"key": 1,
							"id": 22,
							"level": 0,
							"ideas": {
								"1": {
									"title": "this is a type annotation",
									"key": 1,
									"id": 23,
									"level": 0,
									"ideas": {
										"1": {
											"title": "prevents runtime errors",
											"key": 1,
											"id": 83,
											"level": 0
										}
									}
								},
								"2": {
									"title": "function a",
									"key": 2,
									"id": 24,
									"level": 1
								},
								"3": {
									"title": "takes a list of strings",
									"key": 3,
									"id": 25,
									"level": 2
								},
								"4": {
									"title": "returns an int",
									"key": 4,
									"id": 26,
									"level": 3
								}
							}
						},
						"2": {
							"title": "String -> Int -> Task",
							"key": 2,
							"id": 27,
							"level": 1,
							"ideas": {
								"1": {
									"title": "Takes String and Int and returns a task",
									"key": 1,
									"id": 28,
									"level": 0
								}
							}
						}
					}
				}
			}
		},
		"2": {
			"title": "Tagged Unions",
			"key": 2,
			"id": 31,
			"level": 1,
			"ideas": {
				"1": {
					"title": "putting a bunch of types together",
					"key": 1,
					"id": 32,
					"level": 0,
					"ideas": {
						"1": {
							"title": "http://elm-lang.org/guide/model-the-problem",
							"key": 1,
							"id": 33,
							"level": 0
						},
						"2": {
							"title": "http://elm-lang.org/examples/checkboxes",
							"key": 2,
							"id": 34,
							"level": 1,
							"ideas": {
								"1": {
									"title": "one of the examples",
									"key": 1,
									"id": 35,
									"level": 0
								},
								"2": {
									"title": "updating a record, shortcut? but what's Model here is it to specify the type?",
									"content": "<div>{ model | red &lt;- bool }</div><div><br></div><div>it will return a the whole object</div><div><br></div><div>this is not OR<br><div><br></div><div><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">point</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> = { x = </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">3</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">, y = </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">4</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }       </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- create a record</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n\n</span><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">point</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">.x                        </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- access field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n</span><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">map</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> .x [point,{x=</span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">0</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">,y=</span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">0</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">}]       </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- field access function</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n\n{ point - x }                  </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- remove field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n{ point | z = </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">12</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }             </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- add field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n{ point - x | z = point.x }    </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- rename field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n{ point - x | x = </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">6</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }          </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- update field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n\n{ point | x &lt;- </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">6</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }             </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- nicer way to update a field</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n{ point | x &lt;- point.x + </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">1</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n        , y &lt;- point.y + </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">1</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> }   </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- batch update fields</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n\n</span><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">dist</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> {x,y} = sqrt (x^</span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">2</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> + y^</span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">2</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">)  </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- pattern matching on fields</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n\\{x,y} -&gt; (x,y)\n\n</span><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">lib</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> = { id x = x }             </span><span class=\"hljs-comment\" style=\"color: rgb(153, 153, 153); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">-- polymorphic fields</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">\n(lib.id </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">42</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\"> == </span><span class=\"hljs-number\" style=\"color: rgb(249, 145, 87); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\">42</span><span style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre; background-color: rgb(45, 45, 45);\">)\n(lib.id [] == [])\n\n</span><span class=\"hljs-typedef\" style=\"color: rgb(204, 204, 204); font-family: 'Source Code Mono', monospace; font-size: medium; line-height: normal; white-space: pre;\"><span class=\"hljs-keyword\" style=\"color: rgb(204, 153, 204);\">type</span> <span class=\"hljs-keyword\" style=\"color: rgb(204, 153, 204);\">alias</span> <span class=\"hljs-type\">Location</span> = <span class=\"hljs-container\">{ <span class=\"hljs-title\" style=\"color: rgb(102, 204, 204);\">line</span>:<span class=\"hljs-type\">Int</span>, <span class=\"hljs-title\" style=\"color: rgb(102, 204, 204);\">column</span>:<span class=\"hljs-type\">Int</span> }</span></span></div></div>",
									"key": 2,
									"id": 36,
									"level": 1
								}
							}
						}
					}
				}
			}
		},
		"3": {
			"title": "Elm-Views",
			"key": 3,
			"id": 71,
			"level": 2,
			"ideas": {
				"1": {
					"title": "What's address",
					"key": 1,
					"id": 72,
					"level": 0,
					"ideas": {
						"1": {
							"title": "I know it's a signal",
							"key": 1,
							"id": 73,
							"level": 0
						},
						"2": {
							"title": "How is it routing to an action/update?",
							"key": 2,
							"id": 74,
							"level": 1
						}
					}
				}
			}
		},
		"4": {
			"title": "Let ... in syntax?",
			"content": "<h3 id=\"let-expressions\" style=\"margin-top: 1.2em; margin-bottom: 0.8em; font-weight: normal; color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; line-height: normal;\">Let Expressions</h3><pre style=\"color: rgb(41, 60, 75); line-height: normal;\"><code class=\"lang-elm\" style=\"font-family: 'Source Code Mono', monospace; display: block; overflow-x: auto; color: rgb(204, 204, 204); padding: 1em; border-radius: 6px; background: rgb(45, 45, 45);\"><span class=\"hljs-title\" style=\"color: rgb(102, 204, 204);\">let</span> n = <span class=\"hljs-number\" style=\"color: rgb(249, 145, 87);\">42</span>\n    (a,b) = (<span class=\"hljs-number\" style=\"color: rgb(249, 145, 87);\">3</span>,<span class=\"hljs-number\" style=\"color: rgb(249, 145, 87);\">4</span>)\n    {x,y} = { x=<span class=\"hljs-number\" style=\"color: rgb(249, 145, 87);\">3</span>, y=<span class=\"hljs-number\" style=\"color: rgb(249, 145, 87);\">4</span> }\n    square n = n * n\n<span class=\"hljs-title\" style=\"color: rgb(102, 204, 204);\">in</span>\n    square a + square b\n</code></pre><p style=\"line-height: 1.5em; color: rgb(41, 60, 75); font-family: 'Source Sans Pro', 'Trebuchet MS', 'Lucida Grande', 'Bitstream Vera Sans', 'Helvetica Neue', sans-serif; font-size: medium;\">Let-expressions are indentation sensitive. Each definition should align with the one above it.</p>",
			"key": 4,
			"id": 75,
			"level": 3
		},
		"5": {
			"title": "Signal.forwardTo",
			"key": 5,
			"id": 76,
			"level": 4,
			"ideas": {
				"1": {
					"title": "just to forward signals?",
					"key": 1,
					"id": 77,
					"level": 0
				}
			}
		},
		"6": {
			"title": "Is main: port: reserved?",
			"key": 6,
			"id": 92,
			"level": 5
		}
	}
}]
