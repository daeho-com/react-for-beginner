import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import style from "../assets/css/Detail.module.css";



function Detail() {
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie = async() => {
        const json = await (await fetch(`https://nomad-movies.nomadcoders.workers.dev/movies`)).json();
        const foundMovie = json.find((movie)=> String(movie.id) === id);
        setMovie(foundMovie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[]);
    console.log(movie);
    return (
        <div>
            {loading ? 
                (<Loading />)
                :
                (
                <div>
                    <Header />
                    <main>
                        <section
                            className = {style.section}
                            style = {{
                                backgroundImage : `url(${movie.backdrop_path})`,
                                backgroundSize : "cover",
                                backgroundPosition : "center",
                            }}
                        >
                            <div className = {style.wrap}>
                                <div className = {style.content}>
                                    <div className = {style.content_img}>
                                        <img src = {movie.poster_path} />
                                    </div>
                                    <div className= {style.content_intro}>
                                        <h2>{movie.title}</h2>
                                        <h3>{movie.release_date}</h3>
                                        <span>Popularity :  "{movie.popularity}" </span>
                                        <p>{movie.overview}</p>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </main>

                </div>
                )
            }
        </div>
    );
}

export default Detail;