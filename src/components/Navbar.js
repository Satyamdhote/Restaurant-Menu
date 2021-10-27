import React from "react";
const Navbar = ({ filterCategory, menuList }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterCategory(currElem)}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
