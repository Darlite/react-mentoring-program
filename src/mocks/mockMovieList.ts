import {GenreType} from "../constants/GenreType";

export const mockMovieList = [
    {
        id: 1,
        poster_path: "images/Pulp_Fiction.png",
        title: "Pulp Fiction",
        release_date: "1994-09-23",
        movieUrl: "https://www.imdb.com/title/tt0110912",
        genres: [GenreType.Crime, GenreType.Thriller],
        runtime: "2h 34m",
        vote_average: "8.9",
        overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    },
    {
        id: 2,
        poster_path: "images/Bohemian_Rhapsody.png",
        title: "Bohemian Rhapsody",
        release_date: "2018-10-30",
        movieUrl: "https://www.imdb.com/title/tt1727824",
        genres: [GenreType.Musical, GenreType.Documentary],
        runtime: "2h 15m",
        vote_average: "8.5",
        overview: "With his impeccable vocal abilities, Freddie Mercury and his rock band, Queen, achieve superstardom. However, amidst his skyrocketing success, he grapples with his ego, sexuality and a fatal illness.",
    },
    {
        id: 3,
        poster_path: "images/Kill_Bill_Volume_2.png",
        title: "Kill Bill: Vol. 2",
        release_date: "2004-04-08",
        movieUrl: "https://www.imdb.com/title/tt0378194",
        genres: [GenreType.Action, GenreType.Thriller],
        runtime: "2h 17m",
        vote_average: "8.9",
        overview: "A pregnant woman, codenamed the Bride, sets out on a journey to kill her ex-boss, Bill, and targets his brother, Budd, and Elle Driver, the only two survivors of the Deadly Vipers Assassination Squad.",
    },
]