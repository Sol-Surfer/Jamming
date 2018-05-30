import React from 'react';
import './SearchResultsTrack.css';

class SearchResultsTrack extends React.Component {
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.searchResult.song}</h3>
                    <p>{this.props.searchResult.artist} | {this.props.searchResult.album}</p>
                </div>
                <a className="Track-action">+</a>
            </div>
        );
    }
}

export default SearchResultsTrack;