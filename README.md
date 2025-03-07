


# cfworker-corsproxy





<div align="center">

[![English](https://img.shields.io/badge/Language-English-blue.svg?style=for-the-badge)](#english-version)
[![中文](https://img.shields.io/badge/语言-中文-red.svg?style=for-the-badge)](#中文版本)

</div>

<!-- 其它内容 -->

---
<!-- 占位符，用于跳转 -->
<a name="english-version"></a>

# English Version

## Description

This is an example code for a `Cloudflare Worker` with two main functions:

1.  Starts a proxy server that forwards HTTP requests on your behalf.
2.  Modifies the response headers to enable CORS (Cross-Origin Resource Sharing), bypassing cross-origin request restrictions.

Note: Currently, this project only supports the `GET` method. For `POST` or other HTTP methods, you'll need to implement the functionality yourself.

## Demo

Suppose we want to request the URL `https://jsonplaceholder.typicode.com/posts`.

We can use the Worker's address as a proxy. The new URL format is `WorkerURL/?target={yourURL}`.

Example: I have already created a worker on Cloudflare:

`https://cfworker-corsproxy.eniru2016.workers.dev/?target=https://jsonplaceholder.typicode.com/posts`

## Running Locally

1.  Run the command `npm run dev`.
2.  Test URL: `http://127.0.0.1:8787/?target=https://jsonplaceholder.typicode.com/posts`

## Deploying Your Own Cloudflare Worker

Method 1: Directly copy the code from `index.ts` into your Cloudflare Worker.

Method 2: Refer to the official Cloudflare Workers tutorial (`npm create cloudflare`). Clone the project and then use `npm run deploy`.

---
<a name="中文版本"></a>

# 中文版本

## 说明

这是一个`cloudflare worker`的示例代码, 作用有两个
1. 启动一个中转代理服务，代替你去请求一个Http接口
2. 修改response的header,  让这个接口支持CORS, 破除跨域请求的限制。

注意 目前这个项目只支持`Get`方法, 对于`Post`或者其他HTTP方法需要你自己接着写。


## 效果展示

假如现在我们想请求的URL `https://jsonplaceholder.typicode.com/posts`

我们可以请求Woker的地址来中转，新的URL的格式 `WorkerURL/?target={yourURL}` 

示例: 我在cloudflare上已经创建好了一个worker, 
  
`https://cfworker-corsproxy.eniru2016.workers.dev/?target=https://jsonplaceholder.typicode.com/posts`

## 在本地启动

1. 输入命令 `npm run dev`

2. 测试地址: `http://127.0.0.1:8787/?target=https://jsonplaceholder.typicode.com/posts`


## 部署你自己的 cloudflare worker

方式1: 直接把`index.ts`的代码复制到你在cloudflare的worker里去

方式2: 参考官方对worker的教程， `npm create cloudflare` 

`git clone`项目, 然后使用`npm run deploy`


