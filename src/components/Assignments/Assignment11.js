import AssignmentWrapper from "../AssignmentWrapper";
import { Routes, Route } from 'react-router-dom';
import Layout from './Assignment11/Layout';
import AllMovies from "./Assignment11/AllMovies";
import { MoviesProvider } from './Assignment11/MoviesContext';
import AddMovie from './Assignment11/AddMovie';


function Assignment11() {
    
    return ( 
        <MoviesProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<AllMovies />}></Route>
                    <Route path="/addmovie" element={<AddMovie />}></Route>
                </Route>
            </Routes>
        </MoviesProvider>
     );
}
const question = "Create a React program based on the below requirements: a. The React program should support \"Movie Details Management\". b. Movie details will hold details like MovieID, MovieName, LeadActor, LeadActress, YearOfRelease, Language, Collections. c. The Program should support below routes/tasks/operations: i) / -> should display all existing movie details. ii) /MovieID -> should display only about a particular movie. iii) /addMovie -> should provide a form to enter a new movie details and add it to the existing collection.";
export default AssignmentWrapper(Assignment11, question);