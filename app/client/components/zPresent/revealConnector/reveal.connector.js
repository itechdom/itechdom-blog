import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/sky.css';
import './reveal.custom.css';

class revealConnector {
	constructor(){
		this.initReveal();
	}
	initReveal(){
		Reveal.initialize({
			loop: false,
			center: true,
			minScale: 0.6,
			margin:0,
			transition: 'default'
		});
	}
	configureReveal(){

	}
	goToSlide(number){
		Reveal.slide(0);
	}
}

export default revealConnector;
