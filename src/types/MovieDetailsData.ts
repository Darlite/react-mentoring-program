import {GenreType} from "../constants/GenreType";

export interface MovieDetailsData {
    id: number;
    imageUrl: string;
    title: string;
    releaseDate: string;
    movieUrl: string;
    genres: GenreType[];
    runtime: string;
    rating: string;
    description: string;
}
