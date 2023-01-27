import { BASE_URL } from "../../api/url";
import axios from "axios";

const signUp = async (req: any, res: any) => {
  const url = `${BASE_URL}user/create`;
  try {
    const { full_name, email, password } = req.body;
    await axios.post(url, { full_name, email, password }).then((response) => {
      console.log("res==>", response);
      return res.json({ data: response?.data });
    });
  } catch (err: any) {
    console.log("res==>", err.message);
    return res.end(JSON.stringify({ error: err.message }));
  }
};

export default signUp;
