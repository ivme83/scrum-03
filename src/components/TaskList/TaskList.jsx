import React from "react";
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Content,
  Columns,
  Column,
  CardFooter,
  CardFooterItem
} from "bloomer";
import moment from "moment";
import "./TaskList.css";

const TaskList = ({ taskData }) => {
  return (
    <Columns isMultiline="true">
      {taskData.map(eachTask => (
        <Column key={eachTask._id} isSize="1/3">
          <Card>
            <CardHeader>
              <CardHeaderTitle>{eachTask.name}</CardHeaderTitle>
            </CardHeader>
            <CardContent>
              <Content>{eachTask.description}</Content>
            </CardContent>
            <CardFooter>
              <CardFooterItem>
                Due date: {moment(eachTask.due_date).format("MMM Do YY")}
              </CardFooterItem>
            </CardFooter>
          </Card>
        </Column>
      ))}
    </Columns>
  );
};

export default TaskList;
