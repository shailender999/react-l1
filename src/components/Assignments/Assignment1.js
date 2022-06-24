import AssignmentWrapper from "../AssignmentWrapper";

function Assignment1() {
    return ( 
        <h1>
            Happy Learning-React
        </h1>
     );
}
const question = "Creat a React program that would render just one greeting message - \"Happy Learning - React\"";
export default AssignmentWrapper(Assignment1, question);