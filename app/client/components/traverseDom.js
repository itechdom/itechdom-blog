document.body.onload = init;
const LEVEL_LIMIT = 5;

function init(){
  let level = 0;
  let rootElement = createDivElement("root element");
  rootElement.level = 0;
  fillTree(rootElement, level);
  document.body.appendChild(rootElement);
  traverseDom(rootElement);
}

function createDivElement(text){
  let element = document.createElement("div");
  let textElement = document.createTextNode(text);
  element.appendChild(textElement);
  return element;
}

function fillTree(parentElement, level){
  let newLevel = level + 1;
  if(newLevel === LEVEL_LIMIT){
    return;
  }
  for(let i=0;i<2;i++){
    let newElement = createDivElement(`hello ${i}`);
    parentElement.appendChild(newElement);
    fillTree(newElement, newLevel);
  }
}

function traverseDom(parentElement){
  var elementChildren = parentElement.children;
  if(elementChildren.length === 0){
    return;
  }
  for (var i = 0; i < elementChildren.length; i++) {
    console.log(elementChildren[i]);
    traverseDom(elementChildren[i]);
  }
}
