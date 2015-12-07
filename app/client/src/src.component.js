import template from './src.html';


let srcComponent = function(){
	return {
		template, // because we have a variable name template we can use the shorcut here
		restrict: 'E'
	};
};

export default srcComponent;
