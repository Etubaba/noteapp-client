import { BASE_URL } from "../../api/url";
import axios from "axios";

const handleDelete = async (req: any, res: any) => {
  const { id } = req.body;
  const url = `${BASE_URL}note/delete/${id}`;
  try {
    await axios.delete(url).then((response) => {
      return res.json({ data: response?.data });
    });
  } catch (err: any) {
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default handleDelete;
