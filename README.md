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

## Deployment

- Nothing to deploy

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
