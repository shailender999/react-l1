import { useState } from "react";
import Details from "./Details";
import Header from "./Header";
const initialStudentState = [
    {
        studentId: 1,
        studentName: 'Rohan',
        studentMarks: 55
    },
    {
        studentId: 2,
        studentName: 'Manish',
        studentMarks: 53
    },
    {
        studentId: 3,
        studentName: 'Shivam',
        studentMarks: 22
    },
    {
        studentId: 4,
        studentName: 'Ritika',
        studentMarks: 100
    },
    {
        studentId: 5,
        studentName: 'Anjali',
        studentMarks: 83
    }
];
function Main() {
    const [studentInfo, setstudentInfo] = useState(initialStudentState);
    return ( 
        <>
            <Header />
            <Details info={studentInfo} />
        </>
     );
}

export default Main;