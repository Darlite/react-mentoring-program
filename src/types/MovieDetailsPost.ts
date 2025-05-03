import {GenreType} from "../constants/GenreType";

export type MovieDetailsPost = {
    poster_path: string | null;
    title: string;
    release_date: string;
    genres: GenreType[];
    runtime: Number;
    vote_average: Number;
    overview: string;
}