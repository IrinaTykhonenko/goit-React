import React, { Component } from "react";
import Form from "./components/Form";
// import Logo from "./components/Logo";
// import PaintingList from "./components/PaintingList";
// import paintings from "./paintings.json";
// import Panel from "./components/Panel";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
// import TodoList from "./components/TodoList";
// import initialTodos from "./Todo.json";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

class App extends Component {
  state = {
    // todos: initialTodos,
  };

  // deleteTodo = (todoId) => {
  //   this.setState((prevState) => ({
  //     todos: prevState.todos.filter((todo) => todo.id !== todoId),
  //   }));
  // };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    // const { todos } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodosCount = todos.reduce(
    //   (acc, todo) => (todo.completed ? acc + 1 : acc),
    //   0
    // );

    return (
      <>
        <div>
          <Form onSubmit={this.formSubmitHandler} />

          {/* <p>Общее количество: {totalTodoCount}</p>
          <p>Количество выполненных: {completedTodosCount}</p> */}
        </div>

        {/* <TodoList todos={todos} onDeleteTodo={this.deleteTodo} /> */}
        {/* <Dropdown />
        <Counter />
        <Panel title="Latest News">
          <p>lorem lorem lorem</p>
          <p>lorem</p>
        </Panel>
        <Panel>
          <p>lorem</p>
        </Panel>
        <Logo text="Main component-container for application" />
        <PaintingList paintings={paintings} />
         */}
        <ColorPicker options={colorPickerOptions} />
      </>
    );
  }
}

export default App;
