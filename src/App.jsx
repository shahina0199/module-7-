import  { useState } from 'react';

const TodoListApp = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { description: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const toggleComplete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].completed = !updatedTaskList[index].completed;
    setTaskList(updatedTaskList);
  };

  return (
    <div className="todo-list-container">
      <h1>My To-Do List</h1>
      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {taskList.map((taskItem, index) => (
          <li key={index}>
            <span style={{ textDecoration: taskItem.completed ? 'line-through' : 'none' }}>
              {taskItem.description}
            </span>
            <button onClick={() => toggleComplete(index)}>
              {taskItem.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoListApp;
