import {GenreType} from "../constants/GenreType";

export type MovieDetailsPost = {
    poster_path: string | null;
    title: string;
    release_date: string;
    genres: GenreType[];
    runtime: number;
    vote_average: number;
    overview: string;
}