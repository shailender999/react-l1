function App6(props) {
    return ( 
        <>
            <h4>Company Name : {props.companyName}</h4>
            <h4>Company Location : { props.companyLocation }</h4>
        </>
    );
}
App6.defaultProps = {
    companyName: 'Wipro',
    companyLocation: 'Bangalore'
}
export default App6;