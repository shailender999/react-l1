import { useMemo } from "react";

function Details(props) {
    const tableBody = props.info.map(({ studentId : id, studentName:name, studentMarks:marks }) => (
            <tr key={id}>
                <td>{id} </td>
                <td>{name} </td>
                <td>{marks} </td>
            </tr>
    ))
    return ( 
        <>
            <table className="table table-bordered text-center rounded">
                {
                    props.info.length > 0 &&
                    <>
                        <thead>
                            <tr>
                                    <th>Student ID</th>
                                    <th>Student Name</th>
                                    <th>Student Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </>
                }
            </table>
        </>
     );
}

export default Details;