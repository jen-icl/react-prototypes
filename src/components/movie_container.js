import React, {Component} from 'react';
import axios from 'axios';
import Movie from './movie';

class MoviesContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
    }
    componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((res) => {
            this.setState({
                movies: res.data.feed.entry
            });
        })
    }

    render(){
        const {movies} = this.state;
        const movieList = movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index} />
        });
        return (
            <div>
                {movieList}
            </div>
        );
    }
}

export default MoviesContainer;
