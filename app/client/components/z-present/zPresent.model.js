class zPresentModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getBlog(){
		return $.get("http://localhost:4000/zPresent");
	}
	insertBlog(zPresent){

	}
	updateBlog(id){

	}
	deleteBlog(id){

	}
}
module.exports = new zPresentModel();
