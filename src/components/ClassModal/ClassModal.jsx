import React from "react";

import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  Delete,
  ModalCardBody,
  ModalCardFooter,
  Tag
} from "bloomer";
import { Link } from "react-router-dom";

const ClassModal = props => {
  // const {_id, name, class_code, students } = props.classData;

  return (
    <Modal isActive={props.isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>Student List</ModalCardTitle>
          <Delete onClick={props.launchModal} />
        </ModalCardHeader>
        <ModalCardBody>
          <ul>
            {props.classInfo.map(studentInfo => (
              <li key={studentInfo.user._id}>
                {studentInfo.user.username} has {studentInfo.projects.length}{" "}projects.
                <Tag>
                  <Link to={`/teacher-student-view/`+studentInfo.user._id} >View Student</Link>
                </Tag>
              </li>
            ))}
          </ul>
        </ModalCardBody>
        <ModalCardFooter />
      </ModalCard>
    </Modal>
  );
};

export default ClassModal;
