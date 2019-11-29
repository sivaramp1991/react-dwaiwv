import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { default as TaskData } from './data'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList:'',
       overdueTask: '',
       assignedTask: '',
       inQueueTask:  '' };
  }
  componentDidMount(){
   const overdueTaskList = TaskData.data.filter(i => { return i.status === "Overdue"});
   const assignedTaskList = TaskData.data.filter(i => { return i.status === "Assigned"});
   const inQueueTaskList = TaskData.data.filter(i => { return i.status === "In Queue"}) 
   console.log(overdueTaskList) 
    this.setState(
      {taskList:TaskData.data,
       overdueTask:   overdueTaskList,
       assignedTask:   assignedTaskList,
       inQueueTask:   inQueueTaskList}
    )
  }

  render() {
    console.log(TaskData)
    return (
      <div className='overviewContainer'>
      
      <div className='seprateContainer'>
      <span className='taskbreak1 seperate'/>
      <span className='taskbreak2 seperate'/>
      <span className='taskbreak3 seperate'/>
      <span className='taskbreak4 seperate'/>
      <span className='taskbreak5 seperate'/>
      <span >
      <label className='allTaskCount'>{this.state.taskList.length}</label>
      <label className='allTask'>Tasks</label>
      </span>
      </div>

      <div className='taskStatus'>

      <span className='overdueTask task-icon'>
      <label className='overdueTaskLabel'>{this.state.overdueTask.length + "  Overdue"}</label>
      </span>

      <span className='assignedTask task-icon'>
      <label className='assignedTaskLabel'>{this.state.assignedTask.length + " Assigned"}</label>
      </span>

      <span className='inQueueTask task-icon'>
      <label className='inQueueTaskLabel'>{this.state.inQueueTask.length + " In Queue"}</label>
      </span>

      <span className='timeEstimated task-icon'>
      <label className='label1'>Estimated Time</label>
      <label className='label2'>3 day(s)</label></span>
      </div>
      
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
