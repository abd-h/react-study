import { Component } from "react";
import { connect } from "react-redux";

class CounterClass extends Component {
    
    incrementHandle() {
        console.log('clicked');
        this.props.increment()
    };

    decrementHandle() { this.props.decrement() };

    toggleCounterHandler() { };  

    render() {
        console.log(this.state);
    return (
      <main>
        <div className="w-2/4 h-30 flex flex-col items-center rounded-md  bg-white outline mt-40 mx-auto">
          <h1 className="text-stone-600 text-xl font-bold pt-4">
            Redux Counter
          </h1>
          <div className="text-3xl bold py-4">
            <button
              onClick={this.decrementHandle.bind(this) }
              className="font-extrabold text-red-600 mr-4"
            >
              -
            </button>
            {this.props.counter}{" "}
            <button
              onClick={this.incrementHandle.bind(this)}
              className="font-extrabold text-green-600 ml-2"
            >
              +
            </button>
          </div>
          <button className="py-2 px-6 bg-blue-700 mb-4 rounded-md">
            Toggle Counter
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({type: 'decrement'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);