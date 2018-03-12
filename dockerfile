FROM gregdaynes/hugo-sass:latest

COPY ./package.json /opt/package.json

RUN npm install

CMD npm start
