import PropTypes from 'prop-types';

function App(props) {
    return ( 
        <>
            <p>Name : {props.name}</p>
            <p>Preferred Cities : {props.preferredCities}</p>
            <p>Age : {props.age}</p>
            
            <p><b>When Age prop validation fails:</b> Warning: Failed prop type: age should be greater than equal to 18 and less than equal to 60
    at App (http://localhost:3000/main.ec8b804b67ae0afd0d7a.hot-update.js:28:35)
    at Main
    at Assignment7
    at div
    at div
    at div
    at WrapperComponent
    at Routes (http://localhost:3000/static/js/bundle.js:42007:5)
    at App
    at Router (http://localhost:3000/static/js/bundle.js:41940:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:40749:5)</p>
        </>
     );
}
const validateAge = (props, propName) => {
    if (props[propName]) {
        let value = props[propName];
        if (typeof value === 'number' && value >= 18 && value <= 60) {
            return null;
        } 
        return new Error(`${propName} should be greater than equal to 18 and less than equal to 60`);
    }
    return null
}
App.propTypes = {
    name: PropTypes.string.isRequired,
    preferredCities: PropTypes.array,
    age : validateAge
}
App.defaultProps = {
    name: 'Steve',
    preferredCities: ['Bangalore', 'Chennai'],
    age: 18
}
export default App;