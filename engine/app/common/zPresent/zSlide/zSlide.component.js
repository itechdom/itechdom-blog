import template from './zSlide.html';
import controller from './zSlide.controller.js';

let zSlideComponent = function(){
  var dir =  {
    template,
    controller,
    link: function(scope, element, attrs) {
    },
    transclude:true,
    restrict: 'E',
    replace:true,
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
  return dir;
};

export default zSlideComponent;