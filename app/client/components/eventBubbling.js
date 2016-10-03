/*notice that I am passing the addEventListener() a boolean parameter of true so capture events fire, not just bubbling events*/
document.body.onload = addElement;

function addElement () {
  // create a new div element
  // and give it some content
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.id = "test";
  newDiv.appendChild(newContent); //add the text node to the newly created div.
  document.body.appendChild(newDiv);
  newDiv.addEventListener('click',function(){console.log('add element div')});
  eventProps();
}

function eventProps(){
  document.querySelector('#test').addEventListener('click',function(event){
    //this is the element
    console.log(this);
    console.log(event);
  });
}

function removeEventListeners(){
  var sayHi = function(){console.log('hi')};
  //adding event listener using anonymous function
  document.body.addEventListener('click',function(){console.log('dude');},false);
  //adding event listener using function reference
  document.querySelector('div').addEventListener('click',sayHi,false);
  //attempt to remove both event listeners, but only the listener added with a funtions reference is removed
  document.querySelector('div').removeEventListener('click',sayHi,false);
  //this of course does not work as the function passed to removeEventListener is a new and different function
  document.body.removeEventListener('click',function(){console.log('dude');},false);
}

function bubblingPhases(){
  //1 capture phase
  window.addEventListener('click',function(){console.log(1);},true);

  //2 capture phase
  document.addEventListener('click',function(){console.log(2);},true);

  //3 capture phase
  document.documentElement.addEventListener('click',function(){console.log(3);},true);

  //4 capture phase
  document.body.addEventListener('click',function(){console.log(4);},true);

  //5 target phase occurs during capture phase
  document.querySelector('div').addEventListener('click',function(){console.log(5);},true);

  //6 target phase occurs during bubbling phase
  document.querySelector('div').addEventListener('click',function(){console.log(6);},false);

  //7 bubbling phase
  document.body.addEventListener('click',function(){console.log(7);},false);

  //8 bubbling phase
  document.documentElement.addEventListener('click',function(){console.log(8);},false);

  //9 bubbling phase
  document.addEventListener('click',function(){console.log(9);},false);

  //10 bubbling phase
  window.addEventListener('click',function(){console.log(10)},false);
}
