# NPM package boilerplate for publishing ES6 modules

## Introduction
This repo holds the basics needed for publishing packages to the NPM network. By default this is setup for publishing ES6 modules but you can do what you like with it. I made this so I can easily publish packages without going through all the required setup. I found myself copy and pasting files from previous projects I made so I thought I'd just make a repo that I can pull from what I wanted to publish something.

I also think this will be usefull for people new to publishing packages. I personally found it to be quite a challenge to get it all running properly the first time. I hope this helps!


## Contents

- [Installation](#installation)
- [Changelog](#changelog)
- [License](#license)


## Installation & Usage

Clone this package into you projects folder:
```sh
$ git clone https://github.com/JonathanPort/npm-package-boilerplate.git package-name
```

You will then need to add in your source code into the `src` folder. The init file name will need to corrospond to what you set in the package.json.

You can go through the `package.json` and `webpack.config.js` and replace vars where needed that match up to your intended package name.

You can delete this readme.md and rename `PackageReadme.md` to `Readme.md` and go through the readme and ammend how you see fit for your package. Make sure to read the readme thouroughly as there are lots of things that need replacing for your own details. A changlog file is included also so you can use or delete that to fit your circumstances.


#### To compile your code
By default, this package uses Babel and can compile ES6 code into regular ES5. To do this, first have your code in place in the `src` folder, make sure your webpack.config is set and points to the correct file and function and then run:

```sh
$ npm run develop
```

This will compile your code down to ES5 and create a file inside of `dist`. Make sure to set your `"main"` in `package.json` to point to `dist/filename.js` so that when people pull the package and require or import it, the compiled code is recieved.

#### Publishing code
When your ready and set, run:

```sh
$ npm run build
```

This will run extra steps to minify and optimize your code for distribution and production.


When ready and compiled, make sure you set the correct version number in your `package.json` and run:

```sh
$ npm update
```

Then finally:

```sh
$ npm publish
```

Your code should be pushed to the NPM network! Fire up a new project and test!

```sh
$ npm install your-package-name
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## License

- `package-name` package is open-sourced software licensed under the [MIT license](LICENSE) by Jonathan Port.