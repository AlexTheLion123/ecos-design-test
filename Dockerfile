FROM node:16.13.1-alpine3.14 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build && npm prune --production

FROM node:16.13.1-alpine3.14
WORKDIR /app
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json .
ENV PORT 5050
EXPOSE 5050
CMD ["node","build"]