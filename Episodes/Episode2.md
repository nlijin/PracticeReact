# PracticeReact

# Episode 2: ignite our app

# what is npm?

npm: install package: npm install -D parcel
npx: execute package: npx parcel index.html

# package.json:

it is a configuration file for NPM.

# package-lock.json:

it keeps the record/track of the exact version of the package that is installed.

# what is a bundler?

we have many files in our project, before going to production we have to minify, clean, compress etc. bundler helps in doing that. it basically bundles our code to send it to production. ex: webpack, parcel, vite(latest)

npm install parcel
npm install -D parcel ( -D dev dependency): // when its only used in development phase, not in production.

# Using Caret (^):

If you specify "^1.2.3" as the version constraint for "example-package", it means you're allowing updates within the same major version (1.x), but you're not allowing a jump to version 2.0.0 (a breaking change). Here's how it works:

^1.2.3 allows any version from "1.2.3" to the latest "1.x.x" version.
It includes versions "1.2.3", "1.2.5" (if available), but not "1.3.0".

# Using Tilde (~):

If you specify "~1.2.3" as the version constraint for "example-package", it means you're allowing updates only within the same minor version (1.2.x). Here's how it works:

~1.2.3 allows any version from "1.2.3" to the latest "1.2.x" version.
It includes versions "1.2.3" and "1.2.5" (if available), but not "1.3.0" or "1.0.0".

# node modules:

node modules is where the packages are installed, with packages it also installs the dependencies packages which are required for the installed package. this is known as transitive dependencies. if you check parcel folder in node modules, it will have its own package.json with required dependencies listed in it.

# gitignore:

whatever files are not required in production we mention that in gitignore file. for ex: /node_modules /dist .parcel-cache

# Parcel : go through documentation for better understanding of below features: parceljs.org

- Dev Build
- Local server
- HMR(hot module replacement)
- File Watching alogorithm (written in c++)
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consitent Hashing
- Code splitting
- Differntial bundling - support older browsers
- Error handling
- https
- tree shaking: will remove unused code

npx parcel build index.html (remove main: App.js from package.json)

# browserslist:

it's a tool that's commonly used in web development to define the list of browsers and their versions that your project should support.

"browserslist": [
"last 2 versions"
]

> 1%
> last 2 versions
> not dead

In this example, you're targeting browsers used by more than 1% of global users, the last two versions of each browser, and excluding browsers that are considered "dead" (i.e., no longer receiving updates or widely used).
