import React from "react";
import { GenreList } from "../GenreList/GenreList";
// import { DropdownSimple } from "../Dropdown/DropdownSimple";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <GenreList />
      {/* <DropdownSimple /> */}
    </div>
  );
};

export { Sidebar };
