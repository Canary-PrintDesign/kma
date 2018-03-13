KMA Chartered Professional Accountants Ltd.
===========================================

A team of experienced Chartered Professional Accountants can help you and your business with all of your reporting requirements. Dealing in a broad range of businesses, including not-for-profit organizations, and can meet just about any reporting need.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites

This project can be developed in 2 ways, one using docker to maintain a container without polluting your project directory with build-time files, or manually using NPM scripts and Hugo binary.

With either option you will need Git installed to begin.

[Git](https://git-scm.org)

### Option A: Docker

Download the docker application that matches your operating system.

[MacOS](https://store.docker.com/editions/community/docker-ce-desktop-mac) -
[Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows) -
[Linux/Ubuntu](https://store.docker.com/editions/community/docker-ce-server-ubuntu) -
[Other OS](https://store.docker.com/search?offering=community&type=edition)

### Option B: Local

You will need the following to work on the project.

[Node](https://nodejs.org)

[NPMJS](https://npmjs.org)

[Hugo](https://gohugo.io)

## Installing/Running Development

### Option A: Docker

1. Clone the project repository from github

```sh
git clone https://github.com/Canary-PrintDesign/kma
```

2. navigate into cloned directory

```sh
cd kma
```

3. Run Docker-Compose

```sh
docker-compose up
```

### Option B: Local

1. Clone the project repository from github

```sh
git clone https://github.com/Canary-PrintDesign/kma
```

2. navigate into cloned directory

```sh
cd kma
```

3. Install required node modules

```sh
npm install
```

4. Run local development servers

```sh
npm start
```

note this will run `Hugo Server` and the `Sass/CSS Pipeline` side-by-side.

## Build Pipeline

The pipeline for working with KMA are done through NPM scripts, which are more easily composed and customized than common build tools like Webpack, Gulp, Grunt, Broccoli, etc.

They can be found reading through the [package.json](package.json) file in the scripts section.

### Development

For most development work, you can run the following command in your console

```sh
npm start
```

Which will kick off all the `dev:` pipelines as a single process. Use `Ctrl+c` to end the process when you're done.

Alternative to `npm start` you can run each script independently using `npm run`

```sh
eg:
npm run dev:hugo
```

### Piplines

#### dev:hugo

`npm run dev:hugo` will start up a simple Hugo server instance outputting the build to the `/output` directory, while also continuing to watch for changes in the `/src` directory

#### dev:css

`npm run dev:css` will run both `dev:post-css:watch` and `dev:livereload`

#### dev:post-css & dev:post-css:watch

`npm run dev:post-css` & `npm run dev:post-css:watch` are responsible for:

1. Transpiling `.scss` files from `/src/assets/scss/` via `Node-Sass & LibSass`
2. Using `autoprefixer` to create any vendor-preixed CSS properties in the declarations that do not yet have public release
3. Minification using `cssnano`
4. SourceMaps
5. Source file change detection (only for `dev:post-css:watch`)

#### dev:livereload

`npm run dev:livereload` runs a small asset server for the `css` files, that allow the browser to automatically refresh on change to the ouput css from the css piplines.

The Chrome [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en) extension is recommended for this pipeline because it does not modify the document.

Alternatively the following script tag can be added to any page you want to use LiveReload on.

```html
<script>
  document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>')
</script>
```

#### dev:js

`npm run dev:js` not implemented

### Build Pipelines

#### build

`npm run build` will run all of the `build:` pipelines.

#### build:hugo

`npm run build:hugo` not implemented

#### build:css

`npm run build:css` not implemented

#### build:js

`npm run build:js` not implemented

## Deployment

TBD - Nothing to deploy yet

`npm run deploy` not implemented

## Built With

[Docker](https://docker.com)
[Hugo](https://gohugo.io)
[SASS](https://sass-lang.com)
[NPMJS](https://npmjs.com)
[PostCSS](https://github.com/postcss/postcss)

## Authors

- Adam Piechnik
- Kirsten Dodd
- Bryony Anderson
- Jessica Bruce
- Gregory Daynes

## License

This project is licensed under the GNU GPL V3 - see the [LICENSE](LICENSE) file for details

## TODO

- Build Pipeline
- [ ] - JS
- [ ] - - Minification [UglifyJS](https://github.com/mishoo/UglifyJS2)
- [ ] - Images
- [ ] - - Optimization [imagemin](https://github.com/imagemin/imagemin-cli)
- [ ] - - SVG [svgo](https://www.npmjs.com/package/svgo)
- Deploy Script
