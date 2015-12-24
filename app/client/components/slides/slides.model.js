'use strict';
class slidesModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getSlides(){
		return $.get("http://localhost:4000/slides");
	}
	insertSlides(slides){

	}
	updateSlides(id){

	}
	deleteSlides(id){

	}
}
module.exports = new slidesModel();
