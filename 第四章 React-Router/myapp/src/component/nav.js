//! ok2
import React, { Fragment } from "react";
import { navs } from "@/route/router";
import { NavLink, useLocation } from "react-router-dom";
export default function Nav() {
  let { pathname } = useLocation(); //! 获取URL的路径。hook函数一般都是要调用的

  return (
    //! <nav>是 HTML 5 中的新标签。定义导航链接的部分。(常用于 <a></a>的容器)
    <nav>
      <span> | </span>

      {navs.map((item) => {
        return (
          //! Fragment作为容器，可以带有key，而<></> 不能带有key
          <Fragment key={item.to}>
            <NavLink
              to={item.to}
              exact={item.exact}
              isActive={
                item.isActive
                  ? () => {
                      return item.isActive(pathname);
                    }
                  : null
              }
              //!The styles to apply to the element when it is active.
              //! 激活的样式，直接写样式就行
              activeStyle={{
                color: "red",
              }}
            >
              {item.title}
            </NavLink>
            <span> | </span>
          </Fragment>
        );
      })}
    </nav>
  );
}
