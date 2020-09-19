FROM nginx:1.17.1-alpine

COPY ./dist/weasylearn-fe /usr/share/nginx/html
