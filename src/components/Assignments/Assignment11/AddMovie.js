import useMovies from "./MoviesContext";
import { useState } from 'react';

function AddMovie() {
    const { addMovieToList } = useMovies();
    const [movieForm, setMovieForm] = useState({});
    const handleFormChange = (e) => {
        let namefield = e.target.getAttribute('name');
        setMovieForm((prev)=> {
            return {...prev, [namefield]: e.target.value}
        })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addMovieToList(movieForm);
        alert('New Movie Added');
    }
    return ( 
        <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
            <h4 className="bg-danger text-white p-2 text-center rounded">Add New Movie</h4>
            <div className="form-group">
                <label>Movie ID</label>
                <input type="number" className="form-control" name="MovieID" />
            </div>
            <div className="form-group mt-2">
                <label>Movie Name</label>
                <input type="text" className="form-control" name="MovieName" />
            </div>
            <div className="form-group mt-2">
                <label>Lead Actor</label>
                <input type="text" className="form-control" name="LeadActor" />
            </div>
            <div className="form-group mt-2">
                <label>Lead Actress</label>
                <input type="text" className="form-control" name="LeadActress" />
            </div>
            <div className="form-group mt-2">
                <label>Year of Release</label>
                <input type="number" className="form-control" name="YearOfRelease" placeholder="1900" />
            </div>
            <div className="form-group mt-2">
                <label>Language</label>
                <input type="text" className="form-control" name="Language" />
            </div>
            <div className="form-group mt-2">
                <label>Box Office Collections</label>
                <input type="number" className="form-control" name="Collections" />
            </div>
            <div className="text-center m-2">
                <button type="submit" className="btn btn-primary w-50">Add</button>
            </div>
        </form>
     );
}

export default AddMovie;