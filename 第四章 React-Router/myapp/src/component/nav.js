//! ok1
import React, { Fragment } from "react";
import { navs } from "@/route/router";
import { NavLink, useLocation } from "react-router-dom";
export default function Nav() {
  let { pathname } = useLocation(); //! 获取URL的路径

  return (
    //   ! <nav>是 HTML 5 中的新标签。定义导航链接的部分。(常用于 <a></a>的容器)
    <nav>
      <span> | </span>

      {navs.map((item) => {
        return (
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
              //   !The styles to apply to the element when it is active.
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
