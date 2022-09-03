import { useEffect, useState, useCallback, memo } from "react";
import { useParams } from "react-router-dom";
import MovieItem from "../../components/Movie";

// 1. 영화 상세 정보
function Detail() {
  // 페이지 로딩 여부
  const [loading, setLoading] = useState(false);
  // 영화 상세 정보
  const [movieInfo, setMovieInfo] = useState(null);
  const { id } = useParams();

  // 영화 정보 가지고 오는 API
  const getMovie = useCallback(async () => {
    const { data } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(data.movie ?? null);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    getMovie();
  }, [getMovie, id]);

  const MemoMovieItem = memo(MovieItem);

  return (
    <div>
      <h1>영화 상세 페이지</h1>
      {loading ? (
        "Lodings..."
      ) : movieInfo ? (
        <MemoMovieItem
          key={movieInfo.id}
          id={movieInfo.id}
          title={movieInfo.title_long}
          summary={movieInfo.description_full}
          image={movieInfo.medium_cover_image}
          genres={movieInfo.genres}
          type="detail"
          year={movieInfo.year}
        />
      ) : (
        "영화 정보가 존재하지 않습니다."
      )}
    </div>
  );
}

export default Detail;
