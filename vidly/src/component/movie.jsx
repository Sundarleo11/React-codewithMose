import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends Component {
    state = { movies: getMovies() }

    handleDelete = movie => {
        //console.log(movies);
        //   const movie = this.state.movie.filter(m => m._id !== movies._id);
        const movies = this.state.movies.filter(m => m._id !== movie._id)
        this.setState({ movies })

    }
    render() {
        return <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movies => <tr key={movies._id}>
                    <td>{movies.title}</td>
                    <td>{movies.genre.name}</td>
                    <td>{movies.numberInStock}</td>
                    <td>{movies.dailyRentalRate}</td>
                    <td><button onClick={() => this.handleDelete(movies)} className="btn btn-danger btn sm">Delete</button></td>
                </tr>)}

            </tbody>

        </table>
    }
}

export default Movies;