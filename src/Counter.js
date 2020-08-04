import React from 'react'
import './App.css'
import { connect } from 'react-redux';
    const mapStateToProps = state => {
        console.log(state);
        return {
          count: state.count
        };
       };

    const Counter = props => {
        console.log(props);
    const increment = () => {
          props.dispatch({ type: "INCREMENT" });
        };
       
    const decrement = () => {
          props.dispatch({ type: "DECREMENT" });
        };
       
    return ( 
        <div className="flex1">
   <div className="counter">
       <button className="btn" onClick={() => decrement()}>-</button>
       <span className="one">{props.count}</span>
       <button className="btn" onClick={() => increment()}>+</button>
     </div>
   </div>
    );
};

export default connect(mapStateToProps)(Counter);

