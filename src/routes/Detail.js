import { getByTitle } from "@testing-library/react";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    console.log(id);
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        // await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    } , []);
    console.log(movie);
    return (
        <div>
        {loading ? <h1>Loading...</h1> :
            <h1>{movie.title}</h1>
        }
        </div>
    );
}

export default Detail;