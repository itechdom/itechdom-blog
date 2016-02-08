# EUI
### Digital Standards Guide Boilerplate
A template of README best practices to make your README simple to understand and easy to use.
### Installation
```shnpm installgulp```See gulp/ for more tasks
### Usage
## Javascript OrganizationYou can use the different modules under either **app/client/components** or **app/server/components**. Inside each component folder, for example **todo/**, you can see these file extensions:* todo.js : That's the main file which will load all the other files.* todo.view.js: Any view rendering is done here. This also includes modules on the server as well (any ```response.write( )``` ).* todo.model.js: Any data storage and manipulation.* todo.spec.js: test file.* todo.scss: sass file to style todo only (See section below on Sass organization).## Sass organization
### Philosphy
### Support
* Please [open an issue](https://github.com/fraction/readme-boilerplate/issues/new) for support.
### Contribution
* Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/fraction/readme-boilerplate/compare/).
