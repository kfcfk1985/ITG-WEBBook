//!ok1
import React from "react";
import List from "@/component/list";
import Pagation from "@/component/pagation"; //! useParams 是从react-router-dom导出的
import { useParams } from "react-router-dom";
import data from "@/data/data";
const pageLength = Math.ceil(data.length / 3); //! 计算有多小个页面。ceil() 方法可对一个数进行上舍入。
export default function ListView() {
  //!page要考虑没有传值的情况
  let { page = 1 } = useParams(); //! 调用该Hook会返回match对象中的params（也就是动态路由传递过来的参数）
  return (
    <div>
      <h1>列表视图</h1>
      <List activePage={page} />
      <Pagation activePage={page} pageLength={pageLength} />
    </div>
  );
}
