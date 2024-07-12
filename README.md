# Blog Server API
使用nestjs搭建的博客服务器API, 主要分为用户模块和博客模块

 使用技术栈
- nestjs
- typeorm
- mysql
- jwt

## 用户模块
- 用户登陆 ，` POST /api/user/login`
- 用户个人信息, `GET /api/user/profile`

## 博客模块
- 博客列表, `GET /api/blog`
- 博客详情, `GET /api/blog/:id`
- 创建博客, `POST /api/blog`
- 更新博客, `PATCH /api/blog/:id`
- 删除博客, `DELETE /api/blog/:id`
  


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

