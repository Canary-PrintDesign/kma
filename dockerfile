FROM gregdaynes/jekyll:latest

COPY ./Gemfile /opt/Gemfile
RUN bundle install 

COPY ./package.json /opt/package.json
RUN npm install

CMD npm start
