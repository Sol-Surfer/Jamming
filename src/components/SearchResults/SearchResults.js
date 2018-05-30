import React from 'react';
import './SearchResults.css';
import SearchResultsTrack from '../SearchResultsTrack/SearchResultsTrack';

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <div className="TrackList">
                    {
                        this.props.searchResults.map(function(searchResult) {
                            return <SearchResultsTrack  searchResult = {searchResult} key={searchResult.id} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default SearchResults;