import React, { useState } from 'react';

const OnchangeEvent = () => {
     const [tasks, setTasks] = useState([
          { id: 1, name: 'Task 1', status: 'Remaining' },
          { id: 2, name: 'Task 2', status: 'Remaining' },
     ]);

     const updateStatus = (taskId) => {
          setTasks((prevTasks) =>
               prevTasks.map((task) =>
                    task.id === taskId
                         ? { ...task, status: task.status === 'Done' ? 'Remaining' : 'Done' }
                         : task
               )
          );
     };

     return (
          <div>
               {tasks.map((task) => (
                    <div key={task.id} className="task">
                         <label>
                              <input
                                   type="checkbox"
                                   onChange={() => updateStatus(task.id)}
                                   checked={task.status === 'Done'}
                              />{' '}
                              {task.name}
                         </label>
                         <p>Status: {task.status}</p>
                    </div>
               ))}
          </div>
     );
};

export default OnchangeEvent;
