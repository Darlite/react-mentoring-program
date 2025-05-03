import styles from "../MovieForm/MovieForm.module.css";
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";
import InputField from "../InputField/InputField";
import GenreSelect from "../GenreSelect/GenreSelect";
import {useForm, SubmitHandler} from "react-hook-form";
import {MovieDetailsPost} from "../../types/MovieDetailsPost";
import {z} from "zod";
import {movieFormSchema} from "../../types/MovieFormSchema";
import {GenreType} from "../../constants/GenreType";
import {zodResolver} from "@hookform/resolvers/zod";

interface MovieFormProps {
    initialMovieInfo?: MovieDetailsData | null,
    onMovieSubmit: (movieData: MovieDetailsPost) => void;
}

type MovieFormSchema = z.infer<typeof movieFormSchema>

const MovieForm: React.FC<MovieFormProps> = ({initialMovieInfo, onMovieSubmit}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<MovieFormSchema>({
        resolver: zodResolver(movieFormSchema)
    });
    const onSubmit: SubmitHandler<MovieFormSchema> = (data) => {
        console.log(data);

        const movieData = {
            id: initialMovieInfo?.id,
            poster_path: data.poster_path,
            title: data.title,
            release_date: data.release_date,
            vote_average: data.vote_average,
            genres: data.genres as GenreType[],
            runtime: data.runtime,
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
                        ariaLabel="Movie title"
                        register={register}
                        errorMessage={errors.title?.message}
            />

            <InputField id="releaseDate"
                        label="Release Date"
                        type="date"
                        name="release_date"
                        placeholder="Select Date"
                        defaultValue={initialMovieInfo?.release_date || ""}
                        ariaLabel="Release Date"
                        register={register}
                        errorMessage={errors.release_date?.message}
            />

            <InputField id="posterPath"
                        label="Poster Path"
                        type="url"
                        name="poster_path"
                        placeholder="https://"
                        defaultValue={initialMovieInfo?.poster_path || ""}
                        ariaLabel="Poster Path"
                        register={register}
                        errorMessage={errors.poster_path?.message}
            />

            <InputField id="rating"
                        label="Rating"
                        type="number"
                        name="vote_average"
                        placeholder="7.8"
                        step="0.1"
                        defaultValue={initialMovieInfo?.vote_average || ""}
                        ariaLabel="Movie Rating"
                        register={register}
                        registerOptions={{valueAsNumber: true}}
                        errorMessage={errors.vote_average?.message}
            />

            <GenreSelect defaultOptions={initialMovieInfo?.genres}
                         register={register}
                         errorMessage={errors.genres?.message}/>

            <InputField id="runtime"
                        label="Runtime"
                        type="text"
                        name="runtime"
                        placeholder="minutes"
                        defaultValue={initialMovieInfo?.runtime || ""}
                        ariaLabel="Movie Runtime"
                        register={register}
                        registerOptions={{valueAsNumber: true}}
                        errorMessage={errors.runtime?.message}
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
                {errors.overview && <span className={styles.errorMessage}>{errors.overview.message}</span>}
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
