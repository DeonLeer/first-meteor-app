import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../api/TaskCollection'
import { Task } from './Task.jsx';

const tasks = [{_id: 1, text: 'First Task'}, {_id: 2, text: '2nd task'}, {_id: 3, text: '3rd task'}]

export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch());
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <ul>
        { tasks.map(task => <Task key={task._id} task={ task }/>) }
      </ul>
    </div>
  )
};
