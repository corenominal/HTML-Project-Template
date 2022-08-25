# utils directory

To be used for Grunt, Sass and JS source files. 

## Using Grunt: The JavaScript Task Runner

Using Grunt is optional.

### Prerequisites

You should have [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) and [grunt-cli](https://gruntjs.com/using-the-cli) installed. I've also included my ESLint config, feel free to use it, or not. 

#### Update npm project

Move into the `utils` directory and run the following command to get the required node modules. 

```
npm update
```

### Run grunt

The provided Gruntfile.js is configured to:

 * Run dart-sass on `src/sass/main.scss` and output to `/assets/css/main.css`
 * Concat `src/js/main*.js` and ouput to `/assets/js/main.js`
 * Watch for changes in `src/` SCSS and JS files to repeat the above steps

Run with the following command:

```
grunt
```
