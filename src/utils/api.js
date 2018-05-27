import axios from "axios";

const hostname = "http://localhost:3000";

export default {
//   // Gets all books
//   getBooks: function() {
//     return axios.get("/api/books");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a book to the database
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

  getTeachersClasses: function(teacher_id) {
    let userData = {
      fbuid: teacher_id
    };
    
    return axios.post(hostname+"/api/class/getClasses", userData);
  }

};
