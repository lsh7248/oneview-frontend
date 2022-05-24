# oneview-frontend

- DEVELOP BRANCH 사용확인
- 허재 수정확인

# develop env

```
"node": v16.15.0
"npm": 8.5.5
"vuecli": 5.0.4
"core-js": "^3.8.3",
"vue": "^2.6.14",
"vue-router": "^3.5.1",
"vuetify": "^2.6.0",
"vuex": "^3.6.2"
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Docker + Nginx Deploy

```
1. docker build . -t test
2. docker run -d -p 8080:80 test
3. localhost:8080 접속확인
```
