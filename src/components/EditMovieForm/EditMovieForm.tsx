import Dialog from "../Dialog/Dialog";
import {useLoaderData, useNavigate} from "react-router-dom";
import {DialogType} from "../../constants/DialogType";
import axios from "axios";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";
import MovieForm from "../MovieForm/MovieForm";

async function updateMovie(movieData: MovieDetailsPost) {
    const response = await axios.put(`http://localhost:4000/movies`, movieData);
    return response.data
}

function EditMovieForm() {
    const navigate = useNavigate();
    const {movieDetails} = useLoaderData();

    async function handleEditMovie(movie: MovieDetailsPost) {
        try {
            const newMovie = await updateMovie(movie);
            navigate(`/movies/${newMovie.id}`);
        } catch (error) {
            console.error("Error editing a movie: ", error);
        }
    }

    return <Dialog dialogTitle={DialogType.EditMovie}
                   content={<MovieForm initialMovieInfo={movieDetails}
                                       onMovieSubmit={handleEditMovie}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default EditMovieForm;
