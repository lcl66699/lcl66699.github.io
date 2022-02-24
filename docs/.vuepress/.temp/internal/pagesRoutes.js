import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3fb5c60c","/views/Algorithm/",{"title":"数据结构与算法"},["/views/Algorithm/index.html","/views/Algorithm/readme.md"]],
  ["v-b75cd794","/views/engineering/",{"title":"webpack"},["/views/engineering/index.html","/views/engineering/readme.md"]],
  ["v-3292d5e6","/views/Http/",{"title":"网络和并发"},["/views/Http/index.html","/views/Http/readme.md"]],
  ["v-eb100d76","/views/js/BOM.html",{"title":"BOM"},["/views/js/BOM","/views/js/BOM.md"]],
  ["v-0b3c5ebd","/views/js/Es6.html",{"title":"ES6"},["/views/js/Es6","/views/js/Es6.md"]],
  ["v-6b103f5b","/views/js/jsBridge.html",{"title":"jsBridge"},["/views/js/jsBridge","/views/js/jsBridge.md"]],
  ["v-548f55c0","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96.html",{"title":"js模块化"},["/views/js/js模块化.html","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96","/views/js/js模块化.md","/views/js/js%E6%A8%A1%E5%9D%97%E5%8C%96.md"]],
  ["v-074f24ca","/views/js/Promise.html",{"title":"Promise"},["/views/js/Promise","/views/js/Promise.md"]],
  ["v-bca6fbe8","/views/js/",{"title":"事件循环"},["/views/js/index.html","/views/js/readme.md"]],
  ["v-783d2c5c","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F.html",{"title":"this指针-闭包-作用域"},["/views/js/this指针-闭包-作用域.html","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F","/views/js/this指针-闭包-作用域.md","/views/js/this%E6%8C%87%E9%92%88-%E9%97%AD%E5%8C%85-%E4%BD%9C%E7%94%A8%E5%9F%9F.md"]],
  ["v-c66d7ba6","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE.html",{"title":"面向对象及原型和原型链"},["/views/js/面向对象与原型,原型链.html","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE","/views/js/面向对象与原型,原型链.md","/views/js/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E5%8E%9F%E5%9E%8B,%E5%8E%9F%E5%9E%8B%E9%93%BE.md"]],
  ["v-37b6ec6c","/views/nodejs/",{"title":"nodejs"},["/views/nodejs/index.html","/views/nodejs/readme.md"]],
  ["v-d2a54114","/views/other/guide.html",{"title":"vuepress-theme-reco"},["/views/other/guide","/views/other/guide.md"]],
  ["v-32a37759","/views/other/",{"title":""},["/views/other/index.html","/views/other/readme.md"]],
  ["v-683d3365","/views/other/webpack.html",{"title":"webpack 基础知识整理"},["/views/other/webpack","/views/other/webpack.md"]],
  ["v-2b4f018d","/views/Principle/",{"title":"原理篇"},["/views/Principle/index.html","/views/Principle/readme.md"]],
  ["v-7e784326","/views/React/easy.html",{"title":""},["/views/React/easy","/views/React/easy.md"]],
  ["v-005056ea","/views/React/",{"title":"React"},["/views/React/index.html","/views/React/README.md"]],
  ["v-1c8689ea","/views/Algorithm/js-algorithm/",{"title":"js-algorithm"},["/views/Algorithm/js-algorithm/index.html","/views/Algorithm/js-algorithm/README.md"]],
  ["v-25a3c47f","/views/category1/2018/121501.html",{"title":"first page in category1"},["/views/category1/2018/121501","/views/category1/2018/121501.md"]],
  ["v-2203eb9d","/views/category1/2019/092101.html",{"title":"sidebar test1111"},["/views/category1/2019/092101","/views/category1/2019/092101.md"]],
  ["v-89cffcd4","/views/other/Git/",{"title":"git"},["/views/other/Git/index.html","/views/other/Git/readme.md"]],
  ["v-38ec0e46","/views/other/micro-web/",{"title":"微前端"},["/views/other/micro-web/index.html","/views/other/micro-web/readme.md"]],
  ["v-5511ab51","/views/other/typescript/",{"title":"TypeScript"},["/views/other/typescript/index.html","/views/other/typescript/readme.md"]],
  ["v-1d3caeb7","/views/other/web%E5%AE%89%E5%85%A8/",{"title":"前端安全"},["/views/other/web安全/","/views/other/web%E5%AE%89%E5%85%A8/index.html","/views/other/web安全/README.md","/views/other/web%E5%AE%89%E5%85%A8/README.md"]],
  ["v-46c01e76","/views/other/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/",{"title":"性能优化"},["/views/other/性能优化/","/views/other/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/index.html","/views/other/性能优化/readme.md","/views/other/%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/readme.md"]],
  ["v-02d70116","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/1.HTML%E7%AF%87.html",{"title":"HTML篇"},["/views/other/网络面试题/1.HTML篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/1.HTML%E7%AF%87","/views/other/网络面试题/1.HTML篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/1.HTML%E7%AF%87.md"]],
  ["v-08747162","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87.html",{"title":"浏览器原理篇"},["/views/other/网络面试题/10.浏览器原理篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87","/views/other/网络面试题/10.浏览器原理篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/10.%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8E%9F%E7%90%86%E7%AF%87.md"]],
  ["v-79a96468","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87.html",{"title":"前端性能优化篇"},["/views/other/网络面试题/11.前端性能优化篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87","/views/other/网络面试题/11.前端性能优化篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/11.%E5%89%8D%E7%AB%AF%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96%E7%AF%87.md"]],
  ["v-33d1357a","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87.html",{"title":"手写代码篇"},["/views/other/网络面试题/12.手写代码篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87","/views/other/网络面试题/12.手写代码篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/12.%E6%89%8B%E5%86%99%E4%BB%A3%E7%A0%81%E7%AF%87.md"]],
  ["v-5bfa9813","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87.html",{"title":"代码输出结果篇"},["/views/other/网络面试题/13.代码输出结果篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87","/views/other/网络面试题/13.代码输出结果篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/13.%E4%BB%A3%E7%A0%81%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E7%AF%87.md"]],
  ["v-1b8b5e3a","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.html",{"title":"从输入URL到页面加载的过程"},["/views/other/网络面试题/14.从输入URL到页面加载的过程.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B","/views/other/网络面试题/14.从输入URL到页面加载的过程.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/14.%E4%BB%8E%E8%BE%93%E5%85%A5URL%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%8A%A0%E8%BD%BD%E7%9A%84%E8%BF%87%E7%A8%8B.md"]],
  ["v-c0667136","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.html",{"title":"JS运行机制"},["/views/other/网络面试题/15.JS运行机制.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6","/views/other/网络面试题/15.JS运行机制.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/15.JS%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.md"]],
  ["v-76d7286a","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/2.CSS%E7%AF%87.html",{"title":"CSS"},["/views/other/网络面试题/2.CSS篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/2.CSS%E7%AF%87","/views/other/网络面试题/2.CSS篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/2.CSS%E7%AF%87.md"]],
  ["v-1efb368e","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"JavaScript篇（上）"},["/views/other/网络面试题/3.JavaScript篇（上）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/网络面试题/3.JavaScript篇（上）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/3.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-50ceff0a","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"JavaScript篇（下）"},["/views/other/网络面试题/4.JavaScript篇（下）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/网络面试题/4.JavaScript篇（下）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/4.JavaScript%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-e639eac4","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"Vue篇（上）"},["/views/other/网络面试题/5.Vue篇（上）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/网络面试题/5.Vue篇（上）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/5.Vue%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-bf93fb04","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"Vue篇（下）"},["/views/other/网络面试题/6.Vue篇（下）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/网络面试题/6.Vue篇（下）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/6.Vue%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-6b49a303","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.html",{"title":"React篇（上）"},["/views/other/网络面试题/7.React篇（上）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89","/views/other/网络面试题/7.React篇（上）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/7.React%E7%AF%87%EF%BC%88%E4%B8%8A%EF%BC%89.md"]],
  ["v-0220a1ba","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.html",{"title":"React篇（下）"},["/views/other/网络面试题/8.React篇（下）.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89","/views/other/网络面试题/8.React篇（下）.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/8.React%E7%AF%87%EF%BC%88%E4%B8%8B%EF%BC%89.md"]],
  ["v-5d7c8b80","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87.html",{"title":"计算机网络篇"},["/views/other/网络面试题/9.计算机网络篇.html","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87","/views/other/网络面试题/9.计算机网络篇.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/9.%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E7%AF%87.md"]],
  ["v-e75e5ff6","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/",{"title":"网络上的面试题整理"},["/views/other/网络面试题/","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/index.html","/views/other/网络面试题/readme.md","/views/other/%E7%BD%91%E7%BB%9C%E9%9D%A2%E8%AF%95%E9%A2%98/readme.md"]],
  ["v-9f19ff5e","/views/other/%E9%9D%A2%E8%AF%95%E9%A2%98/",{"title":"面试题"},["/views/other/面试题/","/views/other/%E9%9D%A2%E8%AF%95%E9%A2%98/index.html","/views/other/面试题/readme.md","/views/other/%E9%9D%A2%E8%AF%95%E9%A2%98/readme.md"]],
  ["v-4cb3c239","/views/Vue/vue-cli/",{"title":"vue-cli"},["/views/Vue/vue-cli/index.html","/views/Vue/vue-cli/readme.md"]],
  ["v-4a0622ba","/views/Vue/vue-hard/",{"title":"原理篇"},["/views/Vue/vue-hard/index.html","/views/Vue/vue-hard/readme.md"]],
  ["v-ca7f5562","/views/Vue/vue2-easy/",{"title":"vue2 基础"},["/views/Vue/vue2-easy/index.html","/views/Vue/vue2-easy/readme.md"]],
  ["v-4f5445c5","/views/Vue/vue2-mid/",{"title":"vue进阶用法"},["/views/Vue/vue2-mid/index.html","/views/Vue/vue2-mid/readme.md"]],
  ["v-3acf3a4c","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/",{"title":"部署"},["/views/Http/课程/Deploy/","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/index.html","/views/Http/课程/Deploy/index.md","/views/Http/%E8%AF%BE%E7%A8%8B/Deploy/index.md"]],
  ["v-1bce1980","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/",{"title":"网络"},["/views/Http/课程/Internet/","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/index.html","/views/Http/课程/Internet/index.md","/views/Http/%E8%AF%BE%E7%A8%8B/Internet/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
