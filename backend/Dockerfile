FROM node
WORKDIR /app
ENV API_PORT=3001 \
    MYSQL_URI="mysql://root:root@localhost:3306/todos"
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]
