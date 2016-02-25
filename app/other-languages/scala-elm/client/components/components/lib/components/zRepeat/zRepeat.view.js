//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');

class zRepeatView{

	render(elements){

		//this works because of this: http://stackoverflow.com/questions/1047454/what-is-lexical-scope
		elements.map((element)=>{
			element.actions.subscribe((data)=>{
				var repeatedElement = this.findElement(element.view.template);
				repeatedElement.append(data[0]._id);
			})
		})

	}
	findElement(element){
		return $(element+">*[zrepeat]");
	}
	filterData(){

	}
	constructor() {
		this.template = "zrepeat";
	}
}


module.exports = new zRepeatView();
