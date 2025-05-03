import {z} from "zod";

export const movieFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    release_date: z.string().date("Release date is required"),
    poster_path: z.string().url("Poster path must be a valid URL"),
    vote_average: z
        .number({invalid_type_error: "Rating is required"})
        .gte(1, "Rating must be between 1 and 10")
        .lte(10, "Rating must be between 1 and 10"),
    genres: z.array(z.string()).min(1, "Select at least one genre"),
    runtime: z
        .number({invalid_type_error: "Runtime is required"})
        .gte(1, "Runtime should be greater than 0"),
    overview: z.string().min(50, "Overview should be at least 50 characters long"),
});
