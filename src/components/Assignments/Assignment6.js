import { useEffect, useState } from "react";
import AssignmentWrapper from "../AssignmentWrapper";
import App6 from "./Assignment6/App6";

function Assignment6() {
    const [companyInfo, setcompanyInfo] = useState({
        name: undefined,
        Location: undefined
    });
    useEffect(() => {
        let timeout = setTimeout(() => {
            setcompanyInfo({
                name: 'Amazon',
                Location: 'Pune'
            })
        }, 3000)
        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return ( 
        <>
            <App6 companyName={companyInfo.name} companyLocation={companyInfo.Location} />
            <p>After 3 seconds new props are passed. 
                Initially the prop values are set to undefined.
                So for 3 seconds Company name would be seen Wipro and company Location would be Bangalore.
                After 3 seconds the value will change to Amazon and Pune.
            </p>
        </>
    );
}

const question = "Create a React program based on the below requirements: a. The main program passes two immutable variables to the \"App\" component which are \"companyName\" and \"companylocation\" and these values gets rendered there in the App component. b. If the main program does not pass these values, then the default values to use for these are: \"companyName\" = \"WIPRO\" and \"companylocation\" = \"BANGALORE\".";
export default AssignmentWrapper(Assignment6, question);