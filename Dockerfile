FROM node:lts-slim

WORKDIR /usr/src/app/
USER root
COPY package.json ./
RUN npm install

COPY ./ ./

# RUN npm run test:all

# RUN npm run fetch:blocks
CMD ["npm", "run","build"]
