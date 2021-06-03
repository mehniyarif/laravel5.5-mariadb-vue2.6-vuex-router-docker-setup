export default {

  
  fetchUsers() {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/account/accounts/")
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },


  retrieveUser(ignore, id) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get("/account/accounts/" + id)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },


  createUser(ignore, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post("/account/accounts/", payload)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },


  updateUser(ignore, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .put("/account/accounts/" + payload.id + "/", payload)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  },


};
