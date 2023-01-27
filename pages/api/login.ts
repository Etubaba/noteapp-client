import { BASE_URL } from "../../api/url";
import axios from "axios";

const handleLogin = async (req: any, res: any) => {
  const url = `${BASE_URL}auth`;
  try {
    const { email, password } = req.body;
    await axios.post(url, { email, password }).then((response) => {
      return res.json({ data: response?.data });
    });
  } catch (err: any) {
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default handleLogin;
