import Dialog from "../Dialog/Dialog";
import {useLoaderData, useNavigate} from "react-router-dom";
import {DialogType} from "../../constants/DialogType";
import axios from "axios";
import DeleteDialog from "../DeleteDialog/DeleteDialog";

async function deleteMovie(id: number) {
    await axios.delete(`http://localhost:4000/movies/${id}`);
}

function DeleteMovieForm() {
    const navigate = useNavigate();
    const {movieDetails} = useLoaderData();

    async function handleDeleteMovie(id: number) {
        try {
            await deleteMovie(id);
            navigate(`/`, { replace: true });
        } catch (error) {
            console.error("Error deleting a movie: ", error);
        }
    }

    return <Dialog dialogTitle={DialogType.DeleteMovie}
                   content={<DeleteDialog movieToDelete={movieDetails}
                                          onDelete={handleDeleteMovie}/>}
                   handleToggleDialog={() => navigate(-1)}
                   showDialog={true}/>
}

export default DeleteMovieForm;
