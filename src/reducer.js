import { combineReducers } from "redux";

const initialStateGennres = {
    genres: []
};

const genres = (state = initialStateGennres, action) => {
    switch (action.type) {
        case "setShowGenres":
            return {
                ...state,
                genres: action.list
            };
        default:
            return state;
    }
};

const initialStateGenreID = {
    id: [],
    movieList: []
};

const genreID = (state = initialStateGenreID, action) => {
    switch (action.type) {
        case "setGenreID":
            return {
                ...state,
                id: action.id,
                movieList: action.list
            };
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    genres,
    genreID
});