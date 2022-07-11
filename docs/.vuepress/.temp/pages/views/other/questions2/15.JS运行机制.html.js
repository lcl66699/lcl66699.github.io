export const data = {
  "key": "v-4f31e1b1",
  "path": "/views/other/questions2/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.html",
  "title": "JS运行机制",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "区分进程和线程",
      "slug": "区分进程和线程",
      "children": []
    },
    {
      "level": 2,
      "title": "浏览器是多进程的",
      "slug": "浏览器是多进程的",
      "children": [
        {
          "level": 3,
          "title": "浏览器都包含哪些进程？",
          "slug": "浏览器都包含哪些进程",
          "children": []
        },
        {
          "level": 3,
          "title": "浏览器多进程的优势",
          "slug": "浏览器多进程的优势",
          "children": []
        },
        {
          "level": 3,
          "title": "重点是浏览器内核（渲染进程）",
          "slug": "重点是浏览器内核-渲染进程",
          "children": []
        },
        {
          "level": 3,
          "title": "Browser进程和浏览器内核（Renderer进程）的通信过程",
          "slug": "browser进程和浏览器内核-renderer进程-的通信过程",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "梳理浏览器内核中线程之间的关系",
      "slug": "梳理浏览器内核中线程之间的关系",
      "children": [
        {
          "level": 3,
          "title": "GUI渲染线程与JS引擎线程互斥",
          "slug": "gui渲染线程与js引擎线程互斥",
          "children": []
        },
        {
          "level": 3,
          "title": "JS阻塞页面加载",
          "slug": "js阻塞页面加载",
          "children": []
        },
        {
          "level": 3,
          "title": "WebWorker，JS的多线程？",
          "slug": "webworker-js的多线程",
          "children": []
        },
        {
          "level": 3,
          "title": "WebWorker与SharedWorker",
          "slug": "webworker与sharedworker",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "简单梳理下浏览器渲染流程",
      "slug": "简单梳理下浏览器渲染流程",
      "children": [
        {
          "level": 3,
          "title": "load事件与DOMContentLoaded事件的先后",
          "slug": "load事件与domcontentloaded事件的先后",
          "children": []
        },
        {
          "level": 3,
          "title": "css加载是否会阻塞dom树渲染？",
          "slug": "css加载是否会阻塞dom树渲染",
          "children": []
        },
        {
          "level": 3,
          "title": "普通图层和复合图层",
          "slug": "普通图层和复合图层",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "从Event Loop谈JS的运行机制",
      "slug": "从event-loop谈js的运行机制",
      "children": [
        {
          "level": 3,
          "title": "事件循环机制进一步补充",
          "slug": "事件循环机制进一步补充",
          "children": []
        },
        {
          "level": 3,
          "title": "单独说说定时器",
          "slug": "单独说说定时器",
          "children": []
        },
        {
          "level": 3,
          "title": "setTimeout而不是setInterval",
          "slug": "settimeout而不是setinterval",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "事件循环进阶：macrotask与microtask",
      "slug": "事件循环进阶-macrotask与microtask",
      "children": []
    },
    {
      "level": 2,
      "title": "写在最后的话",
      "slug": "写在最后的话",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 1646297184000,
    "contributors": [
      {
        "name": "liuchenglong",
        "email": "768206581@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "views/other/questions2/15.JS运行机制.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
