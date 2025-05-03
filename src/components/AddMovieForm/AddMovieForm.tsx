import Dialog from "../Dialog/Dialog";
import {useNavigate} from "react-router-dom";
import ModalContent from "../ModalContent/ModalContent";
import {DialogType} from "../../constants/DialogType";
import axios from "axios";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";

async function postMovie(movie: MovieDetailsPost) {
    try {
        const response = await axios.post(`http://localhost:4000/movies`,
            movie
        );
        console.log(response);
    } catch (error) {
        console.error("Error posting a movie: ", error);
    }
}

function AddMovieForm() {
    const navigate = useNavigate();

    return <Dialog dialogTitle={DialogType.AddMovie}
                   content={<ModalContent currentDialog={DialogType.AddMovie}
                                          selectedMovie={null}
                                          handleSubmit={postMovie}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default AddMovieForm;
