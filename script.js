var fs = require('fs');
const pages = {
    './pages/':['about.html','contact.html','home.html','case-studies.html'],
    './pages/case-studies/':['meetup.html','landdox.html','tx.html']
}

let mainPages = Object.keys(pages).map((key)=>{
    let arr = pages[key];
    return arr.map((page)=>{
        return String(fs.readFileSync(key+page));
    })
})
console.log(mainPages);
