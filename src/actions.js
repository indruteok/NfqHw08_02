export const setShowGenres = list => ({
    type: "setShowGenres",
    list
});

export const setChangeGenreId = (id, list, genres) => ({
    type: "setGenreID",
    id,
    list,
    genres
});

