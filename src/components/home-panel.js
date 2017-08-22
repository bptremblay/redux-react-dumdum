import React from 'react';
import './home-panel.css';


class HomePanel extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            <h1>Hello</h1>
            <p>Count: {this.props.mappedProps.count}</p>

            <p>
              <button onClick={this.props.mappedProps.increment} disabled={this.props.mappedProps.isIncrementing}>Increment</button>
              <button onClick={this.props.mappedProps.incrementAsync} disabled={this.props.mappedProps.isIncrementing}>Increment Async</button>
            </p>

            <p>
              <button onClick={this.props.mappedProps.decrement} disabled={this.props.mappedProps.isDecrementing}>Decrementing</button>
              <button onClick={this.props.mappedProps.decrementAsync} disabled={this.props.mappedProps.isDecrementing}>Decrement Async</button>
            </p>
        </div>
    );
  }
}

export default HomePanel;