import AssignmentWrapper from "../AssignmentWrapper";

function Assignment4() {
    return ( 
        <>
            <h4 className="text-center mb-2">Multiplication Table</h4>
            <table className="table table-bordered text-center">
                <tbody>
                    {
                        [...Array(10)].map((x, i) => {
                            return <tr key={i}>
                                        <td>5 x {i + 1} = { 5*(i+1)}</td>
                                    </tr>
                        })
                    }
                </tbody>
            </table>
        </>
     );
}
const question = "Create a React Program that would render a Heading and also a Table which shows the multiplication tables of number 5. (Hint: a. 5 X 1 = 5, 5 X 2 = 10 .. Do not hard code the values. Generate them by performing mathematical operations";
export default AssignmentWrapper(Assignment4, question);