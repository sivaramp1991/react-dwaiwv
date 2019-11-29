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
    debugger;
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
      <span className='taskbreak1'>{this.state.taskList.length}</span>
      <span className='taskbreak2'/>
      <span className='taskbreak3'/>
      <span className='taskbreak4'/>
      <span className='taskbreak5'/>
      </div>
        
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
