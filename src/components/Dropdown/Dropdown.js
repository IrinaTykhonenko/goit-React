import React from "react";
import styles from "./Dropdown.module.css";

class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((PrevState) => ({
      visible: !PrevState.visible,
    }));
  };
  //   show = () => {
  //     this.setState({ visible: true });
  //   };
  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;
    return (
      <div className={styles.Dropdown}>
        <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.toggle}
        >
          {visible ? "Скрыть" : "Показать"}
        </button>
        {/* <button
          type="button"
          className={styles.Dropdown__toggle}
          onClick={this.hide}
        >
          Скрыть
        </button> */}
        {visible && (
          <div className={styles.Dropdown__menu}>Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
