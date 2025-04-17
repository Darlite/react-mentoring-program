import {GenreType} from "../constants/GenreType";

export interface MovieDetailsData {
    id: number;
    poster_path: string | null;
    title: string;
    release_date: string;
    movieUrl: string;
    genres: GenreType[];
    runtime: string;
    vote_average: string;
    overview: string;
}
