import Dialog from "../Dialog/Dialog";
import {useLoaderData, useNavigate} from "react-router-dom";
import ModalContent from "../ModalContent/ModalContent";
import {DialogType} from "../../constants/DialogType";
import axios from "axios";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";
import {MovieDetailsData} from "../../types/MovieDetailsData";

async function updatedMovie(movieData: MovieDetailsPost) {
    const response = await axios.put(`http://localhost:4000/movies`, movieData);
    return response.data
}

function EditMovieForm() {
    const navigate = useNavigate();
    const {movieDetails} = useLoaderData();

    async function handleEditMovie(movie: MovieDetailsPost) {
        try {
            const newMovie = await updatedMovie(movie);
            navigate(`/movies/${newMovie.id}`);
        } catch (error) {
            console.error("Error editing a movie: ", error);
        }
    }

    return <Dialog dialogTitle={DialogType.EditMovie}
                   content={<ModalContent currentDialog={DialogType.EditMovie}
                                          selectedMovie={movieDetails}
                                          handleSubmit={handleEditMovie}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default EditMovieForm;
