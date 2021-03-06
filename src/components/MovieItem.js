import React,{ Component } from 'react';
import $ from 'jquery';

class MovieItem extends Component {
    numberFormatter = (num) => {
        let formattedNum;
        switch (true) {
            case (num > 999999999):
                formattedNum = (num/1000000000).toFixed(1) + 'b';
                break;
            case (num > 999999):
                formattedNum = (num/1000000).toFixed(1) + 'm';
                break;
            case (num > 9999):
                formattedNum = (num/1000).toFixed(1) + 'k';
                break;
            default:
                formattedNum = num.toLocaleString();
        }
        return formattedNum;
    }

    render(){
        const {movie, updatefilterr} = this.props;

        return (
                <tr>
                    <td className="title"><a href={movie.imdb_link} target="_blank" rel="noopener noreferrer">{movie.title}<i className="fa fa-external-link-square" aria-hidden="true"></i></a></td>
                    <td>{movie.director}</td>
                    <td>{movie.actors.join(', ')}</td>
                    <td className="genres"><ul>{movie.genres.map((genre) =>
                        <li key={"genre-"+genre} onClick={(event) => updatefilterr($(event.target).text(), 'genres')}>{genre}</li>
                    )}</ul></td>
                    <td>{movie.language}</td>
                    <td>{movie.country}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.budget ? "$"+this.numberFormatter(parseInt(movie.budget)).toLocaleString() : " "}</td>
                    <td>{movie.year}</td>
                </tr>
        );

    }
}

export default MovieItem;
