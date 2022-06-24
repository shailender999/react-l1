import { useState } from "react";
import AssignmentWrapper from "../AssignmentWrapper";

function Assignment8() {
    const [multiplication, setmultiplication] = useState([]);
    const [buttoncount, setbuttoncount] = useState(0);
    const addMultiplication = () => {
        setbuttoncount((prev) => prev + 1);
        setmultiplication((prev) => {
            return [...prev, `5 X ${buttoncount+1} = ${5 * (buttoncount+1)}`];
        })
    }
    return ( 
        <>
            <div className="text-center">
                <button className="btn btn-warning" onClick={addMultiplication}>
                    Click to generate multiplication table of 5
                </button>
                <span>(clicked {buttoncount} times )</span>
            </div>
            <table className="table table-bordered text-center mt-2 border rounded">
                <tbody>
                    {
                        multiplication.map((item, index) => (
                            <tr key={index}><td>{ item }</td></tr>
                        ))
                    }
                </tbody>
            </table>
        </>
     );
}

const question = "Create a React program based on the below requirements: a. The web page should show a button 'Click to generate Multiplication tables of 5'. When we click on the button, it should start rendering the multiplication tables of 5. Every click should generate one row of the multiplication table. b. So initially the Component in its state maintains an empty array and whenever the click happens, the array is updated with one line of the multiplication table which in turn gets rendered.";
export default AssignmentWrapper(Assignment8, question);