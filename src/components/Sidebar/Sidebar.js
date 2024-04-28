import React from "react";
import { GenreList } from "../GenreList/GenreList";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.container}>
      <GenreList />
    </div>
  );
};

export { Sidebar };
