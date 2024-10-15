"use client";
import React from "react";
import BaseComponent from "./BaseComponent";

// Extend the base component to create a TodoApp
export default class TodoApp extends BaseComponent {
  constructor(props: {}) {
    super(props);
    // No need to redefine the state here; it's inherited from BaseComponent
  }

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>

        {/* Input for new task */}
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={this.handleInputChange}
            placeholder="Add a new task..."
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            onClick={this.addTodo} // Call the inherited method
            className="ml-2 bg-blue-500 text-white p-2 rounded"
          >
            Add
          </button>
        </div>

        {/* List of tasks */}
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 border-b`}
            >
              <span>{task.title}</span>
              <div>
                <button
                  onClick={() => this.deleteTodo(task.id)}
                  className="bg-red-500 p-1 rounded text-white"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
