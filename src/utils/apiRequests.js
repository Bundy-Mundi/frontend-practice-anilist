import axios from "axios";

export const testApi = async(setData) => {
  axios.get("http://localhost:4000/api/user")
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err))
};