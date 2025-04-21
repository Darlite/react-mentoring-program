import axios from "axios";
import {useEffect, useState} from "react";
import {MovieDetailsData} from "../types/MovieDetailsData";

interface Filters {
    searchQuery: string;
    selectedGenre: string;
    selectedSortControl: string;
}

export function useMovies(filters: Filters) {
    const [movieList, setMovieList] = useState<MovieDetailsData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchMovies() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `http://localhost:4000/movies?limit=12&searchBy=title&search=${filters.searchQuery}&filter=${filters.selectedGenre}&sortBy=${filters.selectedSortControl}&sortOrder=asc`,
                    {signal}
                );
                setMovieList(response.data.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    if (error.name === "CanceledError") {
                        console.log("The previous request has been canceled");
                    } else {
                        setError(error.message);
                    }
                } else {
                    console.error("Error getting movie list: ", error);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchMovies();

        return () => {
            controller.abort();
        };
    }, [filters]);

    return {movieList, isLoading, error};
}




