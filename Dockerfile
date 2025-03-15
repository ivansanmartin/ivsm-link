FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY index.html ./

RUN npm ci

COPY src ./src
COPY public ./public

RUN npm run build


FROM cgr.dev/chainguard/nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080