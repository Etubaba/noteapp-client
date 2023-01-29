import { BASE_URL } from "../../api/url";
import axios from "axios";

const server = async (req: any, res: any) => {
  const url = `${BASE_URL}`;
  try {
    await axios.get(url).then((response) => {
      if (response.status === 200) return res.json({ msg: "Server is up" });
    });
  } catch (err: any) {
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default server;
