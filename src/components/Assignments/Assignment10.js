import AssignmentWrapper from "../AssignmentWrapper";
import { useState } from 'react';

function Assignment10() {
    const [marks, setMarks] = useState({
        physics: 0,
        chemistry: 0,
        biology: 0,
        maths: 0,
        average: 0,
    });
    const calculateAverage = (e) => {
        e.preventDefault();
        setMarks((mark) => {
            let avg = (mark.physics + mark.chemistry + mark.biology + mark.maths)/4;
            console.log(avg, mark.physics ,mark.chemistry , mark.biology ,mark.maths);
            return {...mark, average:avg} 
        })
        alert((marks.physics + marks.chemistry + marks.biology + marks.maths)/4)
    }
    const saveUserMarks =(e) => {
        let subject = e.target.getAttribute('name');
        //console.log(e);
        //console.log(typeof e.target.valueAsNumber);
        setMarks((mark)=> {
            return {...mark, [subject]: e.target.valueAsNumber}
        })
    } 
    return ( 
        <form onSubmit={calculateAverage} onChange={saveUserMarks}>
            <h4 className="bg-danger text-white p-2 text-center rounded">Calculate Your Average Marks</h4>
            <div className="form-group">
                <label htmlFor="physics-mark">Physics Mark</label>
                <input type="number" className="form-control" id="physics-mark" name="physiscs" placeholder="0" />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="chemistry-mark">Chemistry Mark</label>
                <input type="number" className="form-control" id="chemistry-mark" name="chemistry" placeholder="0" />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="biology-mark">Biology Mark</label>
                <input type="number" className="form-control" id="biology-mark" name="biology" placeholder="0" />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="maths-mark">Maths Mark</label>
                <input type="number" className="form-control" id="maths-mark" name="maths" placeholder="0" />
            </div>
            <div className="text-center m-2">
                <button type="submit" className="btn btn-primary w-50">Find Average</button>
            </div>
            <div>
                <h4 className="text-center">Average : {marks.average}</h4>
            </div>
        </form>
     );
}
const question = "Create a React program based on the below requirements: a. The React program renders a form so that the user can enter his/her individual subject marks for the subjects: Physics, Chemistry, Biology and Mathematics. b. Upon entering of all the details and on click of the button \"Find Average\", the average of those marks should be displayed as an alert.";
export default AssignmentWrapper(Assignment10, question);