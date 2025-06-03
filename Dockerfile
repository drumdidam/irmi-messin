FROM node:20

# Arbeitsverzeichnis
WORKDIR /app

# package.json & lockfile
COPY package*.json ./

# Dependencies installieren
RUN npm install

# Projektdateien kopieren
COPY . .

# Port für Vite
EXPOSE 5173

# Start Dev-Server
CMD ["npm", "run", "dev", "--", "--host"]
