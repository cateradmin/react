WebStrom下使用react笔记

1.检查下当前的webstorm是否支持JSX语法，如果不支持，请更新下插件或下载最新版的webstorm.
2.webstorm提供了对react编写的支持，我们可以用工具直接建立react项目，参考createReact文件夹下的图片。
3.创建完react项目后，webStorm会自动生成src和docs两个文件夹以及其他一些文件，README.MD文件介绍了关于demo运行的基本情况，
  docs文件夹下的文档介绍了关于如何配置项目以及react风格。
4.接下来以项目介绍，介绍要点：
  1）组织结构
  2）单个react组件结构
  3) 程序入口app.js,server.js
  4) 关于Flux（http://reactjs.cn/react/docs/flux-overview.html）
     Flux是Facebook用来构建用户端的web应用的应用程序体系架构，它通过利用数据的单向流动为React的可复用的视图组件提供了
     补充。主要包括三部分：dispatcher、store和views（React components），千万不要和MVC(model-View-Controller)搞混。
  5） AppActions,AppStore,View中事件的传递
      通过摸索，大致是这样走的一个路线：
      1)) 在AppStore.js里注册action(Dispatcher.register())
      2)) 在react component组件里，通过AppActions中定义的方法触发事件（Dispatcher.dispatch()） ,
          demo中的例子：AppActions.navigateTo(path);navigateTo中调用了Dispatcher.dispatch()方法.
  6) gulp 构建项目
