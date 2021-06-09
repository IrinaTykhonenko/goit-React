import React from "react";
import styles from "./Counter.module.css";
import Controls from "./Controls";
import Value from "./Value";

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  //   constructor() {
  //     super();
  //     this.state = {
  //       value: 0,
  //     };
  //   }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({
    //   value: 10,
    // }); используется только для замены на новое значение

    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className={styles.Counter}>
        {/* <span className={styles.Counter__value}>{this.state.value}</span> */}
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <Value Value={value} />
      </div>
    );
  }
}

export default Counter;
