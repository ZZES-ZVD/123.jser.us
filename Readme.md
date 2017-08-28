# 前端导航站
>fork自[123.jser.us](https://github.com/jserme/123.jser.us)

## 说明

    整合国内外的前端资源的网站， 面向中国前端工程师。

## 补充导航

  __不要__ 直接编辑HTML文件, 编辑 _jade_ 文件.
    
  可以使用下面的任意一种方式来补充资源
  
  1. 推荐使用自带的交互脚本来添加
  
     ```
     ./add.js
     ```
  

  2. 到[这里](https://github.com/ZZES-ZVD/ZZESFrontendSite/issues), 新建一个Issue, 格式如下

      >Issue标题：添加+“-”+网站名称
  
      ```
        网站名 : xxx
        140字内描述 ： xxx
        网址 ： xxx
        标签 ： xxx xxx
      ```
        标签请以逗号或者空格分隔， 参考目前已经有的类目

        

## 重新生成文件 

```shell
  node build.js
```
