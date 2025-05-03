import Dialog from "../Dialog/Dialog";
import {useNavigate} from "react-router-dom";
import ModalContent from "../ModalContent/ModalContent";
import {DialogType} from "../../constants/DialogType";
import axios from "axios";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";

async function postMovie(movie: MovieDetailsPost) {
    const response = await axios.post(`http://localhost:4000/movies`, movie);
    return response.data
}

function AddMovieForm() {
    const navigate = useNavigate();

    async function handleAddMovie(movie: MovieDetailsPost) {
        try {
            const newMovie = await postMovie(movie);
            navigate(`/movies/${newMovie.id}`);
        } catch (error) {
            console.error("Error adding a movie: ", error);
        }
    }

    return <Dialog dialogTitle={DialogType.AddMovie}
                   content={<ModalContent currentDialog={DialogType.AddMovie}
                                          selectedMovie={null}
                                          handleSubmit={handleAddMovie}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default AddMovieForm;
