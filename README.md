# Catalog 3000

## Running

Generate self signed certificate:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout packages/server/crt/selfsigned.key -out packages/server/crt/selfsigned.crt
```

Build docker image:

```bash
docker build -t catalog-3000:latest .
```

Run application:

```bash
docker run -p 8443:8443 catalog-3000:latest
```

```bash
openssl genrsa -out  packages/server/crt/token.key 4096
openssl rsa -in  packages/server/crt/token.key -pubout -out  packages/server/crt/token.crt
```

## Developing

### Prerequisites

- npm - follow [instructions](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- nvm - follow [instructions](https://github.com/nvm-sh/nvm)

- direnv - follow [instructions](https://direnv.net/)

### Running project in dev mode

```bash
  yarn install
  yarn start:dev
```

> self signed certificate is required

### Scripts

The following [npm scripts](https://docs.npmjs.com/misc/scripts) are made
available to you in the project root. You can run each of them with
`yarn run <script-name>`.

If you want to limit the scope of a script to a particular package, add the
`--scope` option to the command (e.g.,
`yarn run clean -- --scope=@catalog/client`). See [run options][].

#### clean

Removes `node_modules` and `build` directories by running `yarn clean` for each
package.

#### build

_Supports [run options][]._

Runs the `build` scripts for each package.

#### start:dev

_Supports [run options][]._

Runs the `start:dev` scripts for each package.

#### lint

_Supports [run options][]._

Runs the `lint` scripts for each package.
