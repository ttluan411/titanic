import React, { Component } from 'react';
import axios from 'axios';
import './PassengerList.css';



export default class Table extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      noteInput: '',
      noteContent: ''
    }
  }
  onNoteChange = (event) => {
    this.setState({
      noteInput: event.target.value
    })
  }
  onSubmit = (event) => {
    // axios.put
  }
  
  render() {
    const Row = ({id, name, sex , age, ticket_fare, ticket_number, ticket_type, survived }) => (
        <div className="row">
          <div>{id}</div>
          <div>{name}</div>
          <div>{sex}</div>
          <div>{age}</div>
          <div>{ticket_fare}</div>
          <div>{ticket_number}</div>
          <div>{ticket_type}</div>
          <div>{survived ? 'Yes' : 'No'}</div>
          <div>
            <input 
              onChange={this.onNoteChange}
              value={this.state.noteInput}
              type="text"
              placeholder="Type note..." />
            <button
              onSubmit = {this.onSubmit}
            >Submit</button>
          </div>
        </div>
      );
      const rows = this.props.passengerData.map((rowData) => <Row {...rowData} key={rowData.id} />);

      return (
          <div className="table">
            <div className="header">
              <div>ID</div>
              <div>NAME</div>
              <div>SEX</div>
              <div>AGE</div>
              <div>TICKET FARE</div>
              <div>TICKET NUMBER</div>
              <div>TICKET TYPE</div>
              <div>SURVIVED</div>
              <div>NOTE</div>
            </div>
            <div className="body">
              {rows}
            </div>
          </div>
      );
      
    }
}