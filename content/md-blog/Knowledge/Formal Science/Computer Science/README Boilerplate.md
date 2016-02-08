# EUI
### Digital Standards Guide Boilerplate
<div>A template of README best practices to make your README simple to understand and easy to use.<br></div>
### Installation
<div>```sh</div><div>npm install</div><div>gulp</div><div>```</div><div>See gulp/ for more tasks</div>
### Usage
<div>## Javascript Organization</div><div><br></div>You can use the different modules under either **app/client/components** or **app/server/components**. Inside each component folder, for example **todo/**, you can see these file extensions:<div>* todo.js : That&apos;s the main file which will load all the other files.</div><div>* todo.view.js: Any view rendering is done here. This also includes modules on the server as well (any ```response.write( )``` ).</div><div>* todo.model.js: Any data storage and manipulation.</div><div>* todo.spec.js: test file.</div><div>* todo.scss: sass file to style todo only (See section below on Sass organization).</div><div><br></div><div>## Sass organization</div>
### Philosphy
### Support
<div>* Please [open an issue](https://github.com/fraction/readme-boilerplate/issues/new) for support.<br></div>
### Contribution
<div>* Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fraction/readme-boilerplate/compare/).<br></div>
