FROM node:23-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

FROM nginx:1.27.3-alpine
COPY --from=builder /usr/src/app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]