import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { default as TaskData } from './data'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {taskList:''};
  }
  componentDidMount(){
    
    console.log(TaskData)
    this.setState(
      {taskList:TaskData.data}
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
      <span className='overdueTask'></span>
      </div>
      
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
