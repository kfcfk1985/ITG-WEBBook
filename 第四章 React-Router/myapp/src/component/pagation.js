//!ok1
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Pagation(props) {
  //! activePage: 当前第几页，
  //! pageLength: 总共多少页
  let { activePage, pageLength } = props;
  console.log("activePage", activePage);
  console.log(`[...".".repeat(3)]`, [...".".repeat(3)]); //! 结果:[".", ".", "."]
  return (
    //! <nav>是 HTML 5 中的新标签。定义导航链接的部分。(常用于 <a></a>的容器)
    <nav>
      {/* //! repeat() 方法：将字符串复制指定次数。 */}
      {[...".".repeat(pageLength)].map((item, index) => {
        index++;
        return (
          <Fragment key={index}>
            <span> | </span>
            <Link
              to={"/list/" + index}
              style={{
                color: Number(activePage) === index ? "red" : "#000",
              }}
            >
              {index}
            </Link>
          </Fragment>
        );
      })}
      <span> | </span>
    </nav>
  );
}
