//! ok1
import React from "react";
import IndexView from "@/view/index";
import AboutView from "@/view/about";
import ListView from "@/view/list";
import UndefinedView from "@/view/404";

let routes = [
  {
    path: "/",
    exact: true,

    //! 优先级 children > component > render
    render(props) {
      //!render方式的路由渲染，要手动传递参数给组件，才能收到history，location，match等对象。
      return <IndexView {...props} />;
    },
  },
  {
    path: "/about",
    exact: true,
    render(props) {
      return <AboutView {...props} />;
    },
  },
  {
    path: ["/list", "/list/:page"], //!动态路由，建议这样写： path: ["/list", "/list/:page"] ，这样就可以兼容不带参数的情况。

    exact: true,
    render(props) {
      let { page = 1 } = props.match.params; //! 动态路由的参数通过：math.params的对象获取到
      //! 解构页码，如果没有传递页面设置默认值为 1。
      if (page >= 1) {
        //! 判断页面是否为 > 1 的数字，如 /list/a 等不是数字的情况下，则显示 404 视图
        return <ListView {...props} />;
      }
      return <UndefinedView {...props} />;
    },
  },
  {
    path: "",
    exact: false, //!   404页面不需要精确匹配
    render(props) {
      return <UndefinedView {...props} />;
    },
  },
];

let navs = [
  {
    to: "/",
    exact: true,
    title: "首页",
  },
  {
    to: "/about",
    exact: true,
    title: "关于",
  },
  {
    to: "/list",
    title: "课程列表",
    isActive(url) {
      let urlData = url.split("/");

      //! 判断 URL 为 "/list" 或 "/list/大于1的数字" 时，选中当前项，否则不选中
      if (
        url === "/list" ||
        (urlData.length === 3 && urlData[1] === "list" && urlData[2] > 0)
      ) {
        return true;
      }
      return false;
    },
  },
];
export { routes, navs };
