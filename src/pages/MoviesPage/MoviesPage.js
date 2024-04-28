import { MovieListCards } from "../../components";
import { Outlet } from "react-router-dom";

const MoviesPage = () => {

  return (
    <div>
      <MovieListCards />
      <Outlet />
    </div>
  );
};

export { MoviesPage };
