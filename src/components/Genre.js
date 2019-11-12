import React from "react";
import {getChangeGenreId} from "../thunks";
import {connect} from "react-redux";

class Genre extends React.Component {
    render() {
        const {genre, id} = this.props;
        return (
            <button
                className="genre"
                onClick={() => this.props.onGetChangeGenreId(id)}
                style={{display: 'inline', margin: '0 auto'}}>
                {genre}
            </button>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onGetChangeGenreId: id => dispatch(getChangeGenreId(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Genre);