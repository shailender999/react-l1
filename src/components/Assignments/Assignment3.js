import AssignmentWrapper from "../AssignmentWrapper";

function Assignment3() {
    const employee_details = [
        {
            'name': 'Joe',
            'id': '112211',
            'email': 'joe@test.com'
        },
        {
            'name': 'Biden',
            'id': '112255',
            'email': 'biden@test.com'
        },
        {
            'name': 'Bill',
            'id': '112244',
            'email': 'bill@test.com'
        },
        {
            'name': 'Clinton',
            'id': '112233',
            'email': 'clinton@test.com'
        },
        {
            'name': 'Henry',
            'id': '112222',
            'email': 'henry@test.com'
        }
    ];
    const table_styles = {
        border: "1px dashed green"
    };
    return (
            <>
                <h4 className="text-center">Employee Details</h4>
                <table className="table table-stripped" style={table_styles}>
                    <thead style={{backgroundColor: "Cyan"}}>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Email ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee_details.map((employee) => {
                                return <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </> 
     );
}
const question = "Update the solution of Assignment-1 to style your table. Styling recommendations: Table should have a dashed border of green color and the Table heading columns should have a background color as cyan. ";
export default AssignmentWrapper(Assignment3, question);