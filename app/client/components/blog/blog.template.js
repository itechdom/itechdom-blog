var h = require('virtual-dom/h');
module.exports = function(count){
	return h('div', {
		style: {
	       textAlign: 'center',
	       lineHeight: (100 + count) + 'px',
	       border: '1px solid red',
	       width: (100 + count) + 'px',
	       height: (100 + count) + 'px'
		       }
	}, [String(count)]);

}
