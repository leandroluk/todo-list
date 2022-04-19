FROM node
WORKDIR /app
ENV SCRIPT="serve" \
    NODE_ENV="production" \
    MYSQL_URI="mysql://root:root@127.0.0.1:3306/todos"
COPY . .
CMD npm run ${SCRIPT}
