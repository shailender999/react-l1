import { useContext, createContext, useReducer } from "react";
import { moviesReducer, initialState } from './MoviesReducer';


const MoviesContext = createContext(initialState);

export const MoviesProvider = ({children}) => {
    const [state, dispatch] = useReducer(moviesReducer, initialState);

    const addMovieToList = (movie) => {
        dispatch({
            type: 'addmovie',
            payload: [...state.movies, movie]
        })
    }
    const value = {
        movies: state.movies,
        addMovieToList,
    }
    return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
}
const useMovies = () => {
    const context = useContext(MoviesContext);
    if(context === 'undefined') {
        throw new Error("useMovies must be used within MoviesContext");
    }
    return context
}
export default useMovies;