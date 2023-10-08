import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

import "../css/Nav.css";

function Nav(props) {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  return (
    <section className="nav">
      <nav>
        <ul className="nav__navlist">
          {categories.map((category) => (
            <li
              className={`nav__navlist__item ${
                currentCategory.name === category.name && " navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Nav;
