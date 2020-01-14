###############################################################################
# Builder
###############################################################################
FROM node:12.10.0-alpine AS builder

COPY . /app
WORKDIR /app
RUN npm install && npm run build

###############################################################################
# Artifact
###############################################################################
FROM nginx:1.17.4-alpine AS app

EXPOSE 80
RUN rm /etc/nginx/conf.d/default.conf
COPY .docker/etc/nginx/conf /etc/nginx
COPY --from=builder /app/dist /usr/share/nginx/html
