var Rx = require('rx');
var actions = require('./admin.actions.js');

class adminModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
		//implement all the actions
		actions.addModule$.subscribe((data)=>{
			addModule(data);
		})
	}
	getModule(){
		return $.get("http://localhost:4000/admin");
	}
	insertModule(module){

	}
	updateModule(id){

	}
	deleteModule(id){

	}
}
module.exports = new adminModel();
