import { Link } from "react-router-dom";

function AssignmentList(props) {
    const list_data_ = (assign_list) => {
        return assign_list.map(list => {
            //console.log(list);
            return <li key={list.topic}>
                <h5 className="bg-danger text-white rounded p-1">Topic {list.topic} : {list.topic_name}</h5>
                <ul>
                    {list.assignments.map((assignment) => {
                        return <li key={assignment.url}>
                            <h6>Assignment {assignment.id}</h6>
                            <Link to={assignment.url}><p>{assignment.assignment}</p></Link>
                        </li>
                    })}
                </ul></li>
        });
    };
    return ( 
        <ul className="list-unstyled">
            { list_data_(props.assignment_list) }
        </ul>
     );
}

export default AssignmentList;