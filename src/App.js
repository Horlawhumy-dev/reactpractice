import React, { Component }from 'react';
import { connect } from 'react-redux';
import { increment } from './store/incrementButton';
import { decrement} from './store/decrementButton';
import { add } from './store/addButton';
import { subtract } from './store/subtractButton';


import Auxilliary  from './hoc/Auxilliary';
import CounterOutput from './components/CounterOutput';
import CounterControl from './components/CounterControl';
import Container from './hoc/Container'
import Header from './components/Header'
import Button from './components/Button';

class App extends Component {
    render() {
        const types = ['Increment', 'Decrement', "Add Randomly", "Subtract Randomly"]
        return(
            <Auxilliary>
                <Header />
                <Container>
                    <CounterOutput value={this.props.counter} />
                    <CounterControl>
                       {types.map(type => {
                            switch(type) {
                                case 'Increment':
                                    return(
                                        <Button 
                                            type={type}
                                            clicked={this.props.onIncrementButton} 
                                        />
                                    );
                                case "Decrement":
                                    return(
                                        <Button 
                                            type={type}
                                            clicked={this.props.onDecrementButton} 
                                        />
                                    );
                                case "Add Randomly":
                                    return(
                                        <Button 
                                            type={type}
                                            clicked={this.props.onAddButton} 
                                        />
                                    );
                                case "Subtract Randomly":
                                    return(
                                        <Button 
                                            type={type}
                                            clicked={this.props.onSubtractButton} 
                                        />
                                    );
                                default:
                                    return <Button type="Unknown Button"/>
                            }
                       })}
                    </CounterControl>
                </Container>
            </Auxilliary>
        )
      
    }
}

const mapStateToProps = state => {
    return {
        counter: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementButton: () => {dispatch(increment())},
        onDecrementButton: () => {dispatch(decrement())},
        onAddButton: () => {dispatch(add())},
        onSubtractButton: () => {dispatch(subtract())}
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
