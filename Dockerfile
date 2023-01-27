FROM node:13.8.0-alpine3.10
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN npm install
RUN npm run build
CMD ["npm", "start"]
