# Estágio 1: Build da aplicação
FROM node:20-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Executa o build da aplicação (Vite)
RUN npm run build

# Estágio 2: Servir os arquivos estáticos com Nginx
FROM nginx:alpine

# Copia os arquivos buildados do estágio anterior para a pasta padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia um arquivo de configuração customizado do Nginx (opcional, mas recomendado para SPAs)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
