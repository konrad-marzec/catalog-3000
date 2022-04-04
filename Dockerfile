FROM node:14.17-alpine as build

COPY . /app

WORKDIR /app

RUN rm -rf packages/server

RUN yarn install --frozen-lockfile

# RUN yarn test

ENV NODE_ENV production

RUN yarn build



FROM node:14.17-alpine as server

COPY . /app

WORKDIR /app

RUN rm -rf packages/client
RUN rm -rf packages/ui-toolkit

RUN yarn install --frozen-lockfile

ENV NODE_ENV production

# RUN yarn test

RUN yarn build



FROM node:14.17-alpine

WORKDIR /app

COPY --from=client /app/packages/client/build public

COPY --from=server /app/packages/server/build .
COPY --from=server /app/node_modules node_modules

COPY ./packages/server/crt crt

COPY catalog catalog

ENV SERVER_PORT 8443

CMD ["node", "index.js"]
