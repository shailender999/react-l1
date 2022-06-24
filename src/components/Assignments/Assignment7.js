import AssignmentWrapper from "../AssignmentWrapper";
import Main from "./Assignment7/Main";

function Assignment7() {
    
    return ( 
        <>
            <Main />
        </>
     );
}

const question = "Create a React program based on the below requirements: a) The main program passes the below immutable variables to the \"App\" component which are Name, Preferred cities and Age. b) We need to also apply the below validations to the above passed values: i. Name : Should be string type and is mandatory. ii. Preferred cities: Should be an array type. iii. Age: Should be a number and should be greater than or equal to 18 and less than or equal to 60. c) In case the values do not get passed, then we should use the default values as: Name: Steve, Preferred cities: [Bangalore, Chennai] and Age: 18. d) While testing and executing this app, try to pass values which do not cater to the required validation rules and see how you get warnings in the console (capture these console outputs and submit during assignment submission)";
export default AssignmentWrapper(Assignment7, question);