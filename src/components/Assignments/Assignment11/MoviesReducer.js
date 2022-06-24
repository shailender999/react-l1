export const initialState = {
    movies: [
        {
            MovieID: 1,
            MovieName: 'Don',
            LeadActor: 'SRK',
            LeadActress: 'Priyanka Chopra',
            YearOfRelease: 2010,
            Language: 'Hindi',
            Collections: 450,
        }
    ]
};

export const moviesReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case 'addmovie':
            return {...state, movies: payload}
        default:
            return state
    }
}