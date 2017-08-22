import React from 'react';
import './home-panel.css';
import {Button, Panel} from 'react-bootstrap';


class HomePanel extends React.Component {


  constructor(props) {
    super(props);
  }


  render() {
    return (
        <Panel>
            <h1>Hello</h1>
            <p>Count: {this.props.mappedProps.count}</p>

            <p>
              <Button onClick={this.props.mappedProps.increment} disabled={this.props.mappedProps.isIncrementing}>Increment</Button>
              <Button onClick={this.props.mappedProps.incrementAsync} disabled={this.props.mappedProps.isIncrementing}>Increment Async</Button>
            </p>

            <p>
              <Button onClick={this.props.mappedProps.decrement} disabled={this.props.mappedProps.isDecrementing}>Decrementing</Button>
              <Button onClick={this.props.mappedProps.decrementAsync} disabled={this.props.mappedProps.isDecrementing}>Decrement Async</Button>
            </p>
        </Panel>
    );
  }
}

export default HomePanel;