# builder
FROM node AS builder
WORKDIR /app
ENV API_URI="http://localhost:3001" \
    REACT_APP_API_URI=${API_URI}
COPY . .
RUN yarn install && yarn build
# runner
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
