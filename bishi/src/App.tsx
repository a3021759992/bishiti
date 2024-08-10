import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import UserList from "./UserList";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Outlet,
  Routes,
} from "react-router-dom";
import { store } from "./store";
import { UserInfo } from "./UserInfo";
import Login from "./Login";
interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleComplete = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>待办事项列表</h1>
      <TodoInput onAdd={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            onToggle={toggleComplete}
            onDelete={deleteTodo}
          />
        ))}
      </div>
      <UserList />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<UserInfo />} />
          </Routes>
          <Outlet /> {/* 用于渲染路由匹配的组件 */}
        </Router>
      </Provider>
    </div>
  );
};

export default App;
