import axios from "axios";

// const hostname = "http://localhost:3000";
const hostname = "https://glacial-oasis-99575.herokuapp.com";

// const hostname = process.env.NODE_ENV !== 'production' ?
//   "http://localhost:3000" :
//   "https://glacial-oasis-99575.herokuapp.com"


export default {

  doCreateUser: function(id, username, email, role) {
      let userData = {
        fbuid: id,
        username: username,
        email: email,
        role: role
      };
    return axios.post(hostname+"/api/user", userData);
  },

  doFindOneUser: function(id) {
    let userData = {
      fbuid: id
    };
    
    return axios.post(hostname+"/api/user/getUser", userData);
  },

  doCreateClass: function(teacher_id, class_name, classCode) {
    let classData = {
      teacher_id: teacher_id,
      name: class_name,
      class_code: classCode
    };

    return axios.post(hostname+"/api/class", classData);
  },

  doCreateProject: function(student_id, project_name, description, project_code) {
    let projectData = {
      student_id: student_id,
      project_name: project_name,
      description: description,
      project_code: project_code
    };

    return axios.post(hostname + "/api/project/createProject", projectData);
  },

  getProjects: function(id) {
    let userData = {
      fbuid: id
    };

    return axios.post(hostname+"/api/project/getProjects", userData);
  },

  doAddClass: function (student_id, class_code) {
    let addClassData = {
      fbuid: student_id,
      class_code: class_code
    };

    return axios.post(hostname + "/api/class/addClass", addClassData);
  },

  doAddProject: function (student_id, project_code) {
    let addProjectData = {
      fbuid: student_id,
      project_code: project_code
    };

    return axios.post(hostname + "/api/project/addProject", addProjectData);
  },

  getTeacherClasses: function(id) {
    let userData = {
      fbuid: id
    };
    
    return axios.post(hostname+"/api/class/getTeacherClasses", userData);
  },

  getStudentsFromClass: function(class_id) {
    let teacherClassData = {
      class_id: class_id
    };

    return axios.post(hostname + "/api/class/getStudentsFromClass", teacherClassData);
  },

  getStudent(id) {
    let studentData = {
      user: id
    };

    return axios.post(hostname + "/api/user/getStudent", studentData)
  }

};
