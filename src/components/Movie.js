import Proptypes from "prop-types";
import {
    Link,
} from "react-router-dom";

function Movie({id, medium_cover_image, title, genres, summary}) {
    console.log("id: "+id+" title: "+title);
    return (
        <div>
            <img src={medium_cover_image} alt={title}/>
            <h2> <Link to={`/movie/${id}`}>{title}</Link></h2>
            <ul>
            {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <p>{summary}</p>
        </div>
    )
}

Movie.prototype={
    id: Proptypes.number.isRequired,
    medium_cover_image: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    summary: Proptypes.string.isRequired,
    genres: Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;