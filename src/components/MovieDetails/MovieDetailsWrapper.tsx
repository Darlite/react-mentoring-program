import {Outlet, useLoaderData, useNavigate} from "react-router-dom";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import MovieDetails from "./MovieDetails";

export default function MovieDetailsWrapper() {
    const {movieDetails} = useLoaderData() as { movieDetails: MovieDetailsData }
    const navigate = useNavigate();

    return <div>
        <MovieDetails movieDetails={movieDetails}
                      handleBackToSearch={() => navigate(-1)}/>
        <Outlet />
    </div>
}
