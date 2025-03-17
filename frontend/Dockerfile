FROM node:20-alpine AS build

WORKDIR /app

COPY frontend/package*.json ./
COPY frontend/tsconfig*.json ./
COPY frontend/vite.config.ts ./
COPY frontend/index.html ./

RUN npm ci

COPY frontend/src ./src
COPY frontend/public ./public

RUN npm run build


FROM cgr.dev/chainguard/nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

COPY frontend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080