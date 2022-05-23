import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import * as actionCreator from '../../store/actions/index';


class Counter extends Component {
   

    // counterChangedHandler = ( action, value ) => {
    //     switch ( action ) {
    //         case 'inc':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
    //             break;
    //         case 'dec':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
    //             break;
    //         case 'add':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
    //             break;
    //         case 'sub':
    //             this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
    //             break;
    //     }
    // }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecreamentCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 8" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storeResults.map(strResult =>(
                        <li key={strResult.id} onClick={()=> this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter:()=> dispatch(actionCreator.increment()),
        onDecreamentCounter:() => dispatch(actionCreator.decrement()),
        onAddCounter:() => dispatch(actionCreator.add(10)),
        onSubtractCounter:() => dispatch(actionCreator.subtract(8)),
        onStoreResult:(result) => dispatch(actionCreator.storeResult(result)),
        onDeleteResult:(id) => dispatch(actionCreator.deleteResult(id))
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (Counter);