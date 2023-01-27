import { BASE_URL } from "../../../api/url";
import axios from "axios";

const noteList = async (req: any, res: any) => {
  const { id } = req.query;
  const url = `${BASE_URL}note/user/${id}`;
  try {
    await axios.get(url).then((response) => {
      return res.json({ data: response?.data?.data });
    });
  } catch (err: any) {
    console.log("res==>", err.message);
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default noteList;
