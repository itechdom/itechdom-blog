/**
 * Created by osamaalghanmi on 6/4/15.
 */

let homeService = function($http){
    this.getSlides = function(){
        return $http.get('/slides.json');
    };
};
export default homeService;