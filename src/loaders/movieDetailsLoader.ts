import {LoaderFunctionArgs} from "react-router-dom";
import axios from "axios";

export async function movieDetailsLoader({params}: LoaderFunctionArgs) {
    const {movieId} = params;
    if (!movieId) throw new Response ("Not found", {
        status: 404,
    });

    const response = await axios.get(`http://localhost:4000/movies/${movieId}`);
    if (!response.data) throw new Response ("Not found", {
        status: 404,
    });

    return { movieDetails: response.data };
}