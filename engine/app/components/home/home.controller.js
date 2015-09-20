class HomeController {
	constructor($scope,$timeout,homeService){
		this.name = 'home';

	homeService.getSlides().success(function(slides){
		$scope.slides = slides;
	})
	}
}

export default HomeController;