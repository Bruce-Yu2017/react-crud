var axios = require('axios');

module.exports = {
  addName: (name) => {
    console.log("addname", name);
    axios({
      method: "post",
      url: "/add",
      data: {
        newname: name
      }
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log("err from add name: ", err);
    })
  },

  getAllName: () => {
    return axios.get("/allName").then((res) => {
      return res.data;
    })
  },

  delete: (id) => {
    return axios.delete(`/name/${id}`).then((res) => {
      return res.data;
    })
  },

  editName: (id, name) => {

    return axios.put(`/edit/${id}/${name}`).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log("err from update: ", err);
    })
  }


}