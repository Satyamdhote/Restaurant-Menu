import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";
const Res = () => {
  const uniqueCategory = [
    ...new Set(
      Menu.map((curr) => {
        return curr.category;
      })
    ),
    "All",
  ];

  console.log(uniqueCategory);
  const [menuData, setmenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueCategory);

  const filterCategory = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const upDatedList = Menu.filter((curr) => {
      return category === curr.category;
    });
    setmenuData(upDatedList);
  };
  return (
    <div>
      <Navbar filterCategory={filterCategory} menuList={menuList} />
      <Menucard menuData={menuData} />
    </div>
  );
};

export default Res;
