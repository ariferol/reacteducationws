# ------------------------------------------------------
# App Deploy
# ------------------------------------------------------
FROM node:20-alpine AS deploy
WORKDIR /reacteducationws/todo-app-router
ENV PATH /reacteducationws/todo-app-router/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --loglevel verbose

# ------------------------------------------------------
# Production Deploy
# ------------------------------------------------------
FROM nginx:alpine AS prod
COPY --from=deploy /reacteducationws/todo-app-router/dist /usr/share/nginx/html
RUN rm -rf /etc/nginx/conf.d
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]