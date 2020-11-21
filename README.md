# structure

```
tree -I node_modules


├── build                       # js-output from "npm run build"
├── docker-compose.yml          # mariadb + adminer (STOP VPN!!!)
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── index.ts                # app
│   ├── models
│   │   ├── event-model.ts
│   │   └── index.ts            # database config
│   └── types
│       └── models
│           └── index.d.ts      # types for every db-table model
├── tests                       # mocha + chai
│   └── *.test.ts
├── tsconfig.json               # typescript conf
└── tsconfig.testing.json       # typescript conf for mocha "npm run test"

```

# notes to self

## docs

### docker

https://docs.docker.com/engine/install/ubuntu/

https://docs.docker.com/compose/install/

https://hub.docker.com/_/mariadb


```bash
sudo docker-compose up -d
```
### nvm

https://github.com/nvm-sh/nvm#installing-and-updating

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

### express + typescript

https://blog.logrocket.com/typescript-with-node-js-and-express/ Using TypeScript with Node.js and Express

https://markpollmann.com/typescript-node Using NodeJS with TypeScript in 2020

```bash
npm init
npx tsc init

npm run start
npm run build
```

### sequelize and typescript

https://medium.com/@enetoOlveda/use-sequelize-and-typescript-like-a-pro-with-out-the-legacy-decorators-fbaabed09472 Use Sequelize and Typescript like a pro! With/out the LEGACY decorators

https://sequelize.org/master/manual/typescript.html#installation

## conventional commits

https://www.conventionalcommits.org/en/v1.0.0/#summary

```
<type>[optional scope]: <description>

# Commit message with description 
feat: allow provided config object to extend other configs

# Commit message with scope
feat(lang): add polish language

# Commit message with ! to draw attention to breaking change
refactor!: drop support for Node 6

# types other than fix: and feat: 
build:, chore:, ci:, docs:, style:, refactor:, perf:, test:, and others.

* fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
* feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
* BREAKING CHANGE: appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.
```
