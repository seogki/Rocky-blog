import Axios from "axios";

let config = {
  timeout: 30 * 1000
};

const Instance = Axios.create(config);

export default Instance;
