# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:20-alpine AS deploy
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install --loglevel verbose
COPY . .
RUN npm run build --loglevel verbose

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:alpine AS prod
COPY --from=deploy /app/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
