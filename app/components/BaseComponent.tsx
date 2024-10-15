"use client";
import React, { Component } from "react";

interface Task {
  id: number;
  title: string;
}

interface BaseState {
  tasks: Task[];
  newTask: string;
}

interface BaseProps {}

export default class BaseComponent extends Component<BaseProps, BaseState> {
  constructor(props: BaseProps) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  addTodo = () => {
    const { newTask, tasks } = this.state;
    if (newTask.trim() !== "") {
      const newTaskItem: Task = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: newTask,
      };
      this.setState({
        tasks: [...tasks, newTaskItem],
        newTask: "",
      });
    }
  };

  deleteTodo = (id: number) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newTask: event.target.value });
  };

  render(): React.JSX.Element | null {
    return null; // No rendering logic here; child components can implement their own
  }
}
