import React, { useState } from "react";

const TaskList = () => {
  //? 1. useState ile state'i tanımlayın
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //? 2. Yeni görevi ekleyecek fonksiyonu tanımlayın
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    } 
  };

  //? 3. Görevi işaretleme fonksiyonu tanımlayın
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = "✅ " + updatedTasks[index];
    setTasks(updatedTasks);
  };

  //? 4. Görevi silme fonksiyonu tanımlayın
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      {/*? 5. Görev ekleme bölümünü ekleyin */}
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Ekle</button>
      </div>

      {/*? 6. Görevleri listelemek için haritalama yapın */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => toggleTask(index)}>
            {task}
            <button onClick={() => removeTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
