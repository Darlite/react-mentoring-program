import styles from "../MovieForm/MovieForm.module.css";
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import InputField from "../InputField/InputField";
import GenreSelect from "../GenreSelect/GenreSelect";
import {useForm, SubmitHandler} from "react-hook-form";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";

interface MovieFormProps {
    initialMovieInfo?: MovieDetailsData | null,
    onMovieSubmit: (movieData: MovieDetailsPost) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({initialMovieInfo, onMovieSubmit}) => {
    const {register, handleSubmit} = useForm<MovieDetailsPost>();
    const onSubmit: SubmitHandler<MovieDetailsPost> = (data) => {
        console.log(data);

        const movieData = {
            poster_path: initialMovieInfo?.poster_path || data.poster_path,
            title: data.title,
            release_date: data.release_date,
            vote_average: Number(data.vote_average),
            genres: data.genres,
            runtime: Number(data.runtime),
            overview: data.overview,
        };

        onMovieSubmit(movieData);
    }

    return (
        <form className={styles.movieForm}
            onSubmit={handleSubmit(onSubmit)}
        >
            <InputField id="movieTitle"
                        label="Title"
                        type="text"
                        name="title"
                        placeholder="Movie title"
                        defaultValue={initialMovieInfo?.title || ""}
                        required={true}
                        ariaLabel="Movie title"
                        register={register}
            />

            <InputField id="releaseDate"
                        label="Release Date"
                        type="date"
                        name="release_date"
                        placeholder="Select Date"
                        defaultValue={initialMovieInfo?.release_date || ""}
                        required={true}
                        ariaLabel="Release Date"
                        register={register}
            />

            <InputField id="posterPath"
                        label="Poster Path"
                        type="url"
                        name="poster_path"
                        placeholder="https://"
                        defaultValue={initialMovieInfo?.poster_path || ""}
                        required={true}
                        ariaLabel="Poster Path"
                        register={register}
            />

            <InputField id="rating"
                        label="Rating"
                        type="number"
                        name="vote_average"
                        placeholder="7.8"
                        step="0.1"
                        defaultValue={initialMovieInfo?.vote_average || ""}
                        required={true}
                        ariaLabel="Movie Rating"
                        register={register}
            />

            <GenreSelect defaultOptions={initialMovieInfo?.genres} register={register}/>

            <InputField id="runtime"
                        label="Runtime"
                        type="text"
                        name="runtime"
                        placeholder="minutes"
                        defaultValue={initialMovieInfo?.runtime || ""}
                        required={true}
                        ariaLabel="Movie Runtime"
                        register={register}
            />

            <div className={styles.overviewContainer}>
                <label className={styles.inputLabel}
                       htmlFor="overview">Overview</label>
                <textarea className={styles.input}
                          id="overview"
                          aria-label="Movie overview"
                          defaultValue={initialMovieInfo?.overview || ""}
                          placeholder="Movie overview"
                          {...register("overview")}
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
