import PropTypes from 'prop-types'
import { memo, useEffect } from 'react';

function Quote(props) {

    if (!props.divClicked) {
        console.log('component will mount, componentWillMount');
        alert('component will mount, componentWillMount');
    }
    useEffect(() => {
        // Code from here runs after the component is mounted
        // componentDidMount lifecycle method
        console.log('component mounted, componentDidMount');
        alert('component mounted, componentDidMount')
        // below arrow function runs when component is 
        // unmounted.
        return () => {
            //componetWillUnmount
            console.log('component unmounted, ComponentWillUnmount');
            alert('component unmounted, ComponentWillUnmount');
        };
    }, []);
    return ( 
        <div className='bg-light p-3 border rounded text-center' onClick={props.handleClick}>
            <p>Honesty is the best policy!!!!</p>
        </div>
     );
}

Quote.propTypes = {
    handleClick: PropTypes.func.isRequired
}
export default memo(Quote);