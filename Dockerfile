# Étape de construction pour Angular
FROM node:latest AS angular-build
WORKDIR /app-angular

# Copie des fichiers du projet Angular dans le conteneur
COPY ./consumer/. ./consumer
COPY ./calendar-workspace/. ./calendar-workspace

RUN npm install -g @angular/cli@latest

# Installation des dépendances et construction de l'application Angular
WORKDIR ./calendar-workspace
RUN npm install
RUN npm link
RUN ng build
WORKDIR ../consumer
RUN npm install
RUN npm link
RUN npm install "../calendar-workspace/dist/calendar-library"

RUN npm run build --prod

# Utilisation d'une image légère basée sur Nginx pour servir l'application Angular
FROM nginx:latest AS angular-runtime
WORKDIR /usr/share/nginx/html
COPY --from=angular-build /app-angular/consumer/dist/consumer .

# Exposition du port 80 pour accéder à l'application Angular
EXPOSE 80

# Commande pour démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]