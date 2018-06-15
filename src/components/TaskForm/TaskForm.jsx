import React, { Component } from "react";

import { Box, Button, Control, Field, Input, Label, TextArea } from "bloomer";
import TaskList from '../TaskList';
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./TaskForm.css";

import api from "../../utils/api";

const INITIAL_STATE = {
  name: "",
  description: "",
  date: moment(),
  error: null
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
      taskList: []
    };
  }

  componentWillMount() {
    let taskList = [];

    api
      .getTasks(this.props.project_id)
      .then(theTasks => {
        taskList = theTasks.data.tasks;
        this.setState({ taskList });
      })
      .catch(err => {
        taskList = [];
        this.setState({ taskList });
      });
  }

  onSubmit = event => {
    const { name, description, date } = this.state;

    api
      .addTask(this.props.project_id, name, description, date)
      .then(result => {
        let taskList = [];

        api
          .getTasks(this.props.project_id)
          .then(theTasks => {
            taskList = theTasks.data.tasks;
            this.setState({ taskList });
            this.setState(() => ({ ...INITIAL_STATE }));
          })
          .catch(err => {
            taskList = [];
            this.setState({ taskList });
          });
        
      })
      .catch(error => {
        console.log(error);
        this.setState(byPropKey("error", error));
      });



    event.preventDefault();
  };

  handleDateChange = date => {
    this.setState({
      date: date
    });
  };

  handleOptionChange = changeEvent => {
    this.setState({
      role: changeEvent.target.value
    });
  };

  render() {
    const { name, description, date, error } = this.state;

    const isInvalid = name === "" || description === "";

    return (
      <div>
          <TaskList taskData={this.state.taskList} />
        <Box>
          <form onSubmit={this.onSubmit}>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input
                  isColor="success"
                  isSize="large"
                  type="text"
                  placeholder="Name of Task"
                  value={name}
                  onChange={event =>
                    this.setState(byPropKey("name", event.target.value))
                  }
                />
              </Control>
            </Field>
            <Field>
              <Label>Task Description</Label>
              <Control>
                <TextArea
                  isSize="large"
                  placeholder="Task Description"
                  value={description}
                  onChange={event =>
                    this.setState(byPropKey("description", event.target.value))
                  }
                />
              </Control>
            </Field>
            <Field>
              <Label>Date</Label>
              <Control>
                <DatePicker selected={date} onChange={this.handleDateChange} />
              </Control>
            </Field>
            <Field>
              <Control>
                <Button disabled={isInvalid} isColor="primary" type="submit">
                  Add Task
                </Button>
              </Control>
            </Field>

            {error && <p>{error.message}</p>}
          </form>
        </Box>
      </div>
    );
  }
}

export default TaskForm;
