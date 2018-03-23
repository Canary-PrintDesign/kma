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

[Jekyll](https://jekyllrb.com)

[Ruby](https://ruby-lang.org)

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

4. Install Ruby Gems through Bundler

```sh
gem install bundler
```

```sh
bundle install
```

5. Run local development servers

```sh
npm start
```

note this will run `Jekyll Server` with `watch` and `livereload`

## Build Pipeline

The pipeline for working with KMA is done through NPM scripts, which are more easily composed and customized than common build tools like Webpack, Gulp, Grunt, Broccoli, etc.

They can be found reading through the [package.json](package.json) file in the scripts section.

Sass/SCSS is built through Jekyll during development and production

### Development

For most development work, you can run the following command in your console

```sh
npm start
```

Which will kick off all the `dev:` pipelines as a single process. Use `Ctrl+c` to end the process when you're done.

Alternative to `npm start` you can run each script independently using `npm run`

```sh
eg:
npm run dev:jekyll
```

### Piplines

#### dev:jekyll

`npm run dev:jekyll` will start up the full Jekyll Server outputting the build to the `/output` directory, while also continuing to watch for changes in the `/src` directory

1. Transpiling `.scss` files from `/src/assets/scss/`
2. Using `autoprefixer` to create any vendor-preixed CSS properties in the declarations that do not yet have public release
3. SourceMaps
4. Live page reloads through `livereload` provided by Jekyll

#### dev:js

`npm run dev:js` not implemented

### Build Pipelines

#### build

`npm run build` will run all of the `build:` pipelines.

#### build:hugo

`npm run build:jekyll` not implemented

#### build:css

`npm run build:css` not implemented

#### build:js

`npm run build:js` not implemented

## Deployment

TBD - Nothing to deploy yet

`npm run deploy` not implemented

## Built With

[Docker](https://docker.com)
[Jekyll](https://jekyllrb.com)
[SASS](https://sass-lang.com)
[NPMJS](https://npmjs.com)

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
    





https://jekyll-pug.dougie.io/docs#configuration
https://github.com/wildlyinaccurate/jekyll-responsive-image
https://github.com/KrzysiekJ/jekyll-i18n_tags
https://github.com/matthodan/jekyll-asset-pipeline
https://github.com/tkareine/jekyll-minibundle
https://github.com/jekyll/jekyll-feed
