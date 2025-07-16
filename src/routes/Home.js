import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import {Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [loading, setLodaing] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
          `https://nomad-movies.nomadcoders.workers.dev/movies`
        )
      ).json();
    setMovies(json);
    setLodaing(false);
   };
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(movies);
  return (
  <div>
    {loading ? 
      (<Loading />) :
      <div>
        <Header />
        <main>
          <section id = "section1">
            <div className = "slider-container">
              <Carousel>
                {movies.map((movie) => (
                  <Carousel.Item key ={movie.id}>
                    <img 
                      className="slide-img"
                      src = {movie.poster_path}
                      alt = {movie.title}
                    />
                    <div className="slide-content">
                      <h2>{movie.title}</h2>
                      <p>{movie.overview}</p>
                      <Link 
                        to = {`/movie/${movie.id}`}
                        style = {{textDecoration : "none"}}
                      >
                        <span className="detailBtn">GO Detail</span>
                      </Link>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </section>

          <section id = "section2">
                <div className = "wrap">
                  <h2 className="sec2_mainTitle">Movie List</h2>
                  <div className="sec2_line"></div>
                  <div className="sec2_movieList">
                    {movies.map((movie) => (
                      <Movie 
                        key = {movie.id}
                        id = {movie.id}
                        coverImg = {movie.poster_path}
                        title = {movie.title}
                        year = {movie.release_date}
                      />
                    ))}
                  </div>
                </div>
          </section>
        </main>
        <Footer />
      </div>
     }
  </div>
  );
}

export default Home;