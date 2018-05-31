import React from "react";

import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  ModalCard,
  ModalCardHeader,
  ModalCardTitle,
  Delete,
  ModalCardBody,
  ModalCardFooter,
  Button,
  Tag
} from "bloomer";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";

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
              <li>
                {studentInfo.user.username} has {studentInfo.projects.length}{" "}projects.
                <Tag>
                  <Link to={routes.TEACHER_STUDENT_VIEW} >View Student</Link>
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
