import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssignmentList from "./AssignmentList";
import LoadingSpinner from "./LoadingSpinner";

function Home() {
    const [Assignment_list, setAssignment_list] = useState([]);
    useEffect(() => {
        const getData=()=>{
            fetch('list.json'
            ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
            }
            )
            .then(function(response){
                //console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                //console.log(Assignment_list);
                setAssignment_list(myJson);
            });
        }
        getData()
    },[])

    return ( 
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 m-auto p-2">
                    <h4 className="bg-primary text-white p-3 rounded text-center">
                        React JS L1 Trend Nxt Hands On Assignments
                    </h4>
                    <div className="col-12">
                        <div className="text-right">
                            <Link to={'/assignment'} className="btn btn-primary ml-auto">
                                Assessment PDF
                            </Link>
                        </div>
                        {Assignment_list.length == 0 ? <LoadingSpinner /> : <AssignmentList assignment_list={Assignment_list} />}   
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Home;