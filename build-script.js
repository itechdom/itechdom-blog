var fs = require('fs');
const pages = {
    './components/':['about.html','contact.html','home.html','case-studies.html'],
    './components/case-studies/':['meetup.html','landdox.html','tx.html']
}
const buildDir = './build/'
const index = String(fs.readFileSync('./index.html'));
console.log("one");
let mainPages = Object.keys(pages).map((key)=>{
    let arr = pages[key];
    arr.map((page)=>{
        let replacedPage = index.replace('{content}',String(fs.readFileSync(key+page)));
        fs.writeFileSync(buildDir+'pages/'+page,replacedPage);
    })
})
console.log("two");
fs.createReadStream('index.html').pipe(fs.createWriteStream(buildDir+'index.html'));
