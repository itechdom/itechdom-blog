//dockerfile-guru
//have a master dockerfile that's shared through a simple templating system (es6 string interopelation)
//when you run dockerfile-guru in the proeject will go through the template file (Dockerfile.template.json). this file will be in charge of importing the master Dockerfile (or multiple files) and add appropriate configurations
//future improvements: make dockerfile-guru reveal all the ports that are being used in a nested structure (use globs)

//configuration json
//you can provide multiple parents
let config = {
    "master":"../Dockerfile.master",
    "template":"./Dockerfile.template"
}

// Usage
// dockerfile-guru: gen cerates a Dockerfile given a parent, child and port
// dockerfile-guru ports: searches through current directory structure and reveal all the ports that are exposed (useful when you want to know which ports are exposed)

//options
// --all: will go through the current directory structure and generate all the Dockerfiles given a Dockerfile.template
fs = require('fs');
const IMPORT_STATEMENT_NAME = "IMPORT";
function run(){
    //read config file
    let child = fs.readFileSync('./Dockerfile.template');
    let lines = child.toString().split('\n');
    let importPaths = lines.map((line)=>{
        if(line.split(' ')[0] === IMPORT_STATEMENT_NAME){
            return line.split(' ')[1];
        }
    }).filter(path => path)

    //join files
    let joinedFiles = importPaths.map((path)=>{
       return fs.readFileSync(path).toString();
    })
    //remove import statements from template file
    let formattedChild = child.toString().split('\n').filter((line) => {
        return line.split(' ')[0] !== IMPORT_STATEMENT_NAME;
    }).join('\n');
    joinedFiles.push(formattedChild);

    let dockerfile = "";
    joinedFiles.forEach((file)=>{
        dockerfile += file;
    })
    fs.writeFileSync('./Dockerfile',dockerfile);
}
function traverseFolders(){
} 
run();
