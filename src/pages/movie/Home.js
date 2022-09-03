import { useEffect, useState, memo } from "react";
import MovieItem from "../../components/Movie";

// 1. 영화 목록 조회
function Home() {
  // 페이지 로딩 여부
  const [loading, setLoading] = useState(false);
  // 영화 목록
  const [movies, setMovies] = useState([]);

  // 영화 목록 가지고 오는 API
  const getMovies = async () => {
    const res = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5@sort_by=year"
      )
    ).json();
    const { movies: list } = res.data;
    setMovies(list ?? []);
    setLoading(false);
  };

  // 최초 한번만 영화 목록 조회
  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);
  const MemoMovieItem = memo(MovieItem);
  return (
    <div>
      <h1>영화 목록</h1>
      <div>
        {loading
          ? "Lodings..."
          : movies.length > 0
          ? // 영화 목록의 갯수가 있으면
            movies.map((movie, index) => (
              <MemoMovieItem
                key={movie.id}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                image={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))
          : // 영화 목록의 갯수가 없으면
            "조회된 영화가 없습니다."}
      </div>
    </div>
  );
}

export default Home;
