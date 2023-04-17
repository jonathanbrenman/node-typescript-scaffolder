FROM node:16.13.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.6.4
RUN npm install
COPY . .
CMD ["npm", "start"]
