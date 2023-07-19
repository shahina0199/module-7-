import  { useState } from 'react';

const TodoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleCompleteTask = (index) => {
    const completedTask = tasks[index];
    setCompletedTasks([...completedTasks, completedTask]);
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input type="text" value={taskInput} onChange={handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
      <h2>Tasks:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleCompleteTask(index)}>Complete</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Completed Tasks:</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index}>
            {task}
            {/* You can add additional logic here for unmarking the task as complete if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
