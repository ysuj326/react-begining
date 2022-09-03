import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 1. 영화 목록 아이템
const MovieItem = ({
  type = "list",
  id,
  title,
  summary,
  genres,
  image,
  year,
  onClickEvent,
}) => {
  return (
    <div key={id} onClick={onClickEvent}>
      <img src={image} alt="" />
      {type === "list" ? (
        <Link to={`/movie/${id}`}>
          <h3>{title}</h3>
        </Link>
      ) : (
        <h3>{title}</h3>
      )}
      {year ? <h5>{year}년 개봉</h5> : ""}

      <h5>{summary}</h5>

      {genres.length > 0 ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre}> {genre} </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.array,
  onClickEvent: PropTypes.func,
};

export default MovieItem;
