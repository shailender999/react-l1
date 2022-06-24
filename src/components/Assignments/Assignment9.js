import { useCallback, useEffect, useRef, useState } from "react";
import AssignmentWrapper from "../AssignmentWrapper";
import Quote from "./Assignment9/Quote";

function Assignment9() {
    const [divClicked, setdivClicked] = useState(false);
    const handleClick = useCallback(() => {
        setdivClicked(true);
    })
    return ( 
        <>
            <div className="text-center">
                <button className="btn btn-warning" onClick={()=> setdivClicked(false)}>Mount again</button>
            </div>
            {!divClicked && <Quote handleClick={handleClick} divClicked={divClicked} />} 
        </>
     );
}
const question = "Create a React program based on the below requirements: a. The React program displays/renders a Div and a paragraph within it which displays a nice thought for the day. b. When we click on the \"Div\", it should get removed (unmounted). c. Implement all the Component Life Cycle methods like 'ComponentWillMount', 'ComponentDidMount' and 'ComponentWillUnmount' etc to view the order in which these life cycle methods get called.";
export default AssignmentWrapper(Assignment9, question);