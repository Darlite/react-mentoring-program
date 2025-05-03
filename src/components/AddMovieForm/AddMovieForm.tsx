import Dialog from "../Dialog/Dialog";
import {useNavigate} from "react-router-dom";
import ModalContent from "../ModalContent/ModalContent";
import {DialogType} from "../../constants/DialogType";

function AddMovieForm() {
    const navigate = useNavigate();

    return <Dialog dialogTitle={DialogType.AddMovie}
                   content={<ModalContent currentDialog={DialogType.AddMovie}
                                          selectedMovie={null}
                                          handleSubmit={(movie) => console.log(`Submitted a ${movie.title} movie from a AddMovieForm`)}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default AddMovieForm;
