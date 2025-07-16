import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import style from "../assets/css/Movie.module.css";

function Movie( { id, coverImg, title, year} ) {
      return (
        <Link
          to = {`/movie/${id}`}
          style = {{textDecoration : "none"}}
        >
          <div className= {style.movie_div}>
            <img className = {style.img} src = {coverImg} alt = {title}/>
            <h2 className = {style.title}>{title}</h2>
            <span className= {style.year}>{year}</span>
          </div>
        </Link>
  );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    year : PropTypes.number.isRequired,
};

export default Movie; 