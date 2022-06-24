const AssignmentWrapper = (WrappedComponent, question) => {
    function WrapperComponent(props) {
        return ( 
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 m-auto">
                        <h4 className="bg-primary p-2 rounded border text-white small">{ question }</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 m-auto">
                        <WrappedComponent {...props} />
                    </div>
                </div>
            </div>
         );
    }
    
    return WrapperComponent;
}

export default AssignmentWrapper;