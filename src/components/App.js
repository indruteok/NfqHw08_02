import React from "react";
import {connect} from "react-redux";
import {getShowGenres, getChangeGenreId} from "../thunks";
import Card from "./Card";
import Genre from "./Genre";
import {getImageUrl} from "../config";

class App extends React.Component {
    componentDidMount() {
        this.props.onGetGenres();
        this.props.onGetMouvieByID();
    }

    render() {
        return (
            <div className="container">
                <header>
                    <div className="genres">
                        {this.props.genres
                            ? this.props.genres.map(genres => (
                                <Genre
                                    key={genres.id}
                                    genre={genres.name}
                                    id={genres.id}
                                />
                            ))
                            : null}
                    </div>
                </header>
                {this.props.genreMovie ? (
                    <div className="cards">
                        {this.props.genreMovie.map(card => (
                            <Card
                                key={card.original_title}
                                backgroundImage={getImageUrl(card.backdrop_path)}
                                date={card.release_date}
                                rating={card.vote_average}
                                votes={card.vote_count}
                                description={card.overview}
                                title={card.original_title}
                                cardID={card.id}
                            />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    genreMovie: state.genreID.movieList,
    genres: state.genres.genres
});

const mapDispatchToProps = (dispatch) => ({
    onGetGenres: () => dispatch(getShowGenres()),
    onGetMouvieByID: id => dispatch(getChangeGenreId(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
