import useMovies from "./MoviesContext";


function AllMovies() {
    const { movies } = useMovies();
    return ( 
        <ul className="d-flex">{movies.map((movie)=> (
                <li key={movie.MovieID} className="border rounded p-2 list-group-item mx-1 bg-light">
                    <p>Movie: {movie.MovieName}</p>
                    <p>Actor: {movie.LeadActor}</p>
                    <p>Actress: {movie.LeadActress}</p>
                    <p>Released on: {movie.YearOfRelease}</p>
                    <p>Language: {movie.Language}</p>
                    <p>Box Office Collection: {movie.Collections}</p>
                </li>                
            )
        )}</ul>
     );
}

export default AllMovies;