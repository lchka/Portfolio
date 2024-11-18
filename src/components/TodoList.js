import { Button, Card, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import "../styles/TodoList.scss";


const TodoList = () => {
  const initialValue = [
    { text: "Get milk", done: false, id: 1 },
    { text: "Learn React", done: false, id: 2 },
    { text: "Go home", done: false, id: 3 },
  ];

  const [list, setList] = useState(() => {
    const localList = localStorage.getItem("list");
    return localList ? JSON.parse(localList) : initialValue;
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const markAsDone = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.done = true;
      }
      return item;
    });
    setList(newList);
  };

  const addTodo = () => {
    const newTodo = { text: inputValue, done: false, id: list.length + 1 };
    setList([...list, newTodo]);
    setInputValue(""); // Clear input field after adding
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  const todoItems = list.map((item) => (
    <TodoItem
      key={item.id}
      id={item.id}
      text={item.text}
      done={item.done}
      markAsDone={markAsDone}
      deleteTodo={deleteTodo}
    />
  ));

  return (
    <div className="todo-container">
      <Card className="sticky-note-card">
        <Card.Header>Todo List</Card.Header>
        <Card.Body>
          <ListGroup variant="flush">{todoItems}</ListGroup>
        </Card.Body>
        <Card.Footer>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder="Add a new task..."
          />
          <Button onClick={addTodo} variant="primary" className="float-end">
            Add
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default TodoList;
