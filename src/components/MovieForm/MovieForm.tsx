import styles from "../MovieForm/MovieForm.module.css";
import React, {FormEvent} from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import {GenreType} from "../../constants/GenreType";
import InputField from "../InputField/InputField";
import GenreSelect from "../GenreSelect/GenreSelect";

interface MovieFormProps {
    initialMovieInfo?: MovieDetailsData | null,
    handleSubmit: (movieData: MovieDetailsData) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovieInfo, handleSubmit }) => {
    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData) as Record<string, string>;

        const genres = formData.getAll("genres") as string[] as GenreType[];

        const id = initialMovieInfo?.id ?? Math.floor(Math.random() * 10000);

        const movieData = {
            id,
            poster_path: initialMovieInfo?.poster_path || "",
            title: formDataObject.title,
            release_date: formDataObject.release_date,
            movieUrl: formDataObject.movieUrl,
            vote_average: formDataObject.vote_average,
            genres,
            runtime: formDataObject.runtime,
            overview: formDataObject.overview,
        };

        handleSubmit(movieData);
    }

    return (
        <form className={styles.movieForm}
              onSubmit={onSubmit}
        >
            <InputField id="movieTitle"
                        label="Title"
                        type="text"
                        name="title"
                        placeholder="Movie title"
                        defaultValue={initialMovieInfo?.title || ""}
                        required={true}
                        ariaLabel="Movie title"
            />

            <InputField id="releaseDate"
                        label="Release Date"
                        type="date"
                        name="releaseDate"
                        placeholder="Select Date"
                        defaultValue={initialMovieInfo?.release_date || ""}
                        required={true}
                        ariaLabel="Release Date"
            />

            <InputField id="movieUrl"
                        label="Movie URL"
                        type="url"
                        name="movieUrl"
                        placeholder="https://"
                        defaultValue={initialMovieInfo?.movieUrl || ""}
                        required={true}
                        ariaLabel="Movie URL"
            />

            <InputField id="rating"
                        label="Rating"
                        type="number"
                        name="rating"
                        placeholder="7.8"
                        defaultValue={initialMovieInfo?.vote_average || ""}
                        required={true}
                        ariaLabel="Movie Rating"
            />

            <GenreSelect defaultOptions={initialMovieInfo?.genres} />

            <InputField id="runtime"
                        label="Runtime"
                        type="text"
                        name="runtime"
                        placeholder="minutes"
                        defaultValue={initialMovieInfo?.runtime || ""}
                        required={true}
                        ariaLabel="Movie Runtime"
            />

            <div className={styles.overviewContainer}>
                <label className={styles.inputLabel}
                       htmlFor="overview">Overview</label>
                <textarea className={styles.input}
                          id="overview"
                          name="overview"
                          aria-label="Movie overview"
                          defaultValue={initialMovieInfo?.overview || ""}
                          placeholder="Movie overview"
                />
            </div>

            <div className={styles.buttonsContainer}>
                <button className={styles.resetButton}
                        type="reset"
                        aria-label="Reset"
                >
                    Reset
                </button>
                <button className={styles.submitButton}
                        type="submit"
                        aria-label="Submit"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default MovieForm;
