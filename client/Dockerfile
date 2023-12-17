FROM node:18.19.0-alpine3.19

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev"]