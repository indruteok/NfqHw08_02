import axios from 'axios';
import {setShowGenres, setChangeGenreId} from "./actions";
import {endpoints} from "./config";

export const getShowGenres = () => dispatch => {
    axios
        .get(endpoints.genres())
        .then(data => {
            dispatch(setShowGenres(data.data.genres));
        });
};

export const getChangeGenreId = id => (dispatch, getState) => {
    const state = getState();
    const genres = state.genres.genres;
    axios
        .get(endpoints.genreMovies(id))
        .then(data => {
            dispatch(setChangeGenreId(id, data.data.results, genres));
        });
};

