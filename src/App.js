import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Assignment1 from './components/Assignments/Assignment1';
import Assignment2 from './components/Assignments/Assignment2';
import Assignment3 from './components/Assignments/Assignment3';
import Assignment4 from './components/Assignments/Assignment4';
import NewComponent from './components/NewComponent';
import AssignmentPdf from './components/AssignmentPdf';
import Assignment5 from './components/Assignments/Assignment5';
import Assignment6 from './components/Assignments/Assignment6';
import Assignment7 from './components/Assignments/Assignment7';
import Assignment8 from './components/Assignments/Assignment8';
import Assignment9 from './components/Assignments/Assignment9';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />}></Route>
        <Route path='/t02a01' element={<Assignment1 />}></Route>
        <Route path='/t03a01' element={<Assignment2 />}></Route>
        <Route path='/t03a02' element={<Assignment3 />}></Route>
        <Route path='/t03a03' element={<Assignment4 />}></Route>
        <Route path='/t04a01' element={<Assignment5 />}></Route>
        <Route path='/t06a01' element={<Assignment6 />}></Route>
        <Route path='/t07a01' element={<Assignment7 />}></Route>
        <Route path='/t08a01' element={<Assignment8 />}></Route>
        <Route path='/t09a01' element={<Assignment9 />}></Route>
        <Route path='/newcomponent' element={<NewComponent />}></Route>
        <Route path='/assignment' element={<AssignmentPdf />}></Route>
        <Route path='*' element={<Navigate to='/'  />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
