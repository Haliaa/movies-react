import { Link } from "react-router-dom";
import { Row, Col, Image, Card } from "react-bootstrap";
import { urls } from "../../constants";
import css from "./MovieListCard.module.css";

const MovieListCard = ({
  movie,
  movie: { id, title, original_title, backdrop_path },
}) => {
  return (
    <Card className={css.card}>
      <Link to={`/movie/${id}`} state={movie}>
        <Card.Body>
          <Card.Img
            src={`${urls.imageSmall}/${backdrop_path}`}
            variant="top"
            style={{ objectFit: "scale-down", width: "100%", borderRadius:"10px 10px 0 0 " }}
          />
          <Card.Title
            as="div"
            className={css.sto_title}
          >
            {original_title}
          </Card.Title>
        </Card.Body>
      </Link>
    </Card>
  );
};

export { MovieListCard };
