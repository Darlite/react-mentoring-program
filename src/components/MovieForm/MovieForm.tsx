import styles from "../MovieForm/MovieForm.module.css";
import React from "react";
import {MovieDetailsData} from "../../types/MovieDetailsData";

interface MovieFormProps {
    initialMovieInfo?: MovieDetailsData | null,
    handleSubmit: (movieData: MovieDetailsData) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ initialMovieInfo, handleSubmit }) => {
    return (
        <form className={styles.movieForm}
              onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const formDataObject = Object.fromEntries(formData) as Record<string, string>;

                  const genres = formData.getAll("genres") as string[];

                  const id = initialMovieInfo?.id ?? Math.floor(Math.random() * 10000);

                  const movieData = {
                      id,
                      imageUrl: initialMovieInfo?.imageUrl || "",
                      title: formDataObject.title,
                      releaseDate: formDataObject.releaseDate,
                      movieUrl: formDataObject.movieUrl,
                      rating: formDataObject.rating,
                      genres,
                      runtime: formDataObject.runtime,
                      description: formDataObject.description,
                  };

                  handleSubmit(movieData);
              }
            }
        >
            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="movieTitle">Title</label>
                <input className={styles.input}
                       type="text"
                       id="movieTitle"
                       name="title"
                       aria-label="Movie title"
                       defaultValue={initialMovieInfo?.title || ""}
                       placeholder="Movie title"
                       required={true}
                />
            </div>

            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="releaseDate">Release Date</label>
                <input className={styles.input}
                       type="date"
                       id="releaseDate"
                       name="releaseDate"
                       aria-label="Release Date"
                       defaultValue={initialMovieInfo?.releaseDate || ""}
                       placeholder="Select Date"
                       required={true}
                />
            </div>

            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="movieUrl">Movie URL</label>
                <input className={styles.input}
                       type="url"
                       id="movieUrl"
                       name="movieUrl"
                       aria-label="Movie URL"
                       defaultValue={initialMovieInfo?.movieUrl || ""}
                       placeholder="https://"
                       required={true}
                />
            </div>

            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="rating">Rating</label>
                <input className={styles.input}
                       type="number"
                       id="rating"
                       name="rating"
                       aria-label="Movie Rating"
                       defaultValue={initialMovieInfo?.rating || ""}
                       placeholder="7.8"
                       required={true}
                />
            </div>

            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="genres">Genre</label>
                <select className={styles.input}
                        id="genres"
                        name="genres"
                        aria-label="Movie Genres"
                        defaultValue={initialMovieInfo?.genres || [""]}
                        multiple={true}
                        required={true}
                >
                    <option value="Action">Action</option>
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Musical">Musical</option>
                </select>
            </div>

            <div className={styles.labelAndInputContainer}>
                <label className={styles.inputLabel}
                       htmlFor="runtime">Runtime</label>
                <input className={styles.input}
                       type="text"
                       id="runtime"
                       name="runtime"
                       aria-label="Movie Runtime"
                       defaultValue={initialMovieInfo?.runtime || ""}
                       placeholder="minutes"
                       required={true}
                />
            </div>

            <div className={styles.overviewContainer}>
                <label className={styles.inputLabel}
                       htmlFor="description">Overview</label>
                <textarea className={styles.input}
                          id="description"
                          name="description"
                          aria-label="Movie Description"
                          defaultValue={initialMovieInfo?.description || ""}
                          placeholder="Movie description"
                />
            </div>

            <div className={styles.buttonsContainer}>
                <button className={styles.resetButton}
                        type="reset">Reset</button>
                <button className={styles.submitButton}
                        type="submit"
                >
                    Submit</button>
            </div>
        </form>
    )
}

export default MovieForm;