import AssignmentWrapper from "../AssignmentWrapper";
import Main from "./Assignment5/Main";

function Assignment5() {
    
    return ( 
        <>
            <Main />
        </>
     );
}

const question = "a. The main component is the \"Main\" component that stores the state information about 5 students like studentld, studentName and studentMarks. b. Another component called \"Header\" renders a heading as \"Student Details\" c. Another component called \"Details\" displays all the student details provided by the \"Main\" component in the form of a table. d. Finally the main component needs to take care of rendering both the Header and the Details. e.\t Use ECMAScript => syntax wherever needed. f.\t You can apply appropriate styling to Heading and Details table as well";
export default AssignmentWrapper(Assignment5, question);