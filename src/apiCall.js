import axios from "axios";

export const apiCall = () => {
  return axios.get("https://s3.eu-west-2.amazonaws.com/chromeye.tasks/data.json");
}