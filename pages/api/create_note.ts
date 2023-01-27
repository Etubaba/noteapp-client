import axios from "axios";
import { BASE_URL } from "../../api/url";

const createNote = async (req: any, res: any) => {
  const url = `${BASE_URL}note/create`;
  try {
    const { title, content, user_id } = req.body;
    await axios.post(url, { title, content, user_id }).then((response) => {
      return res.json({ data: response?.data });
    });
  } catch (err: any) {
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default createNote;
