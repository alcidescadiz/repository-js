import { doLogin } from "../firebase/factory.database.js";
import { collectionsName } from "../firebase/collections.js";

let nameCollection = collectionsName.users;

export async function loginUser(req, res) {
  try {
    const { username, password, email } = req.body;
    res
      .status(200)
      .send(await doLogin(nameCollection, username, password, email));
  } catch (error) {
    res.status(400).send({
      error: error.message,
      msg: "Algo mal ha pasado revise los datos enviados",
    });
  }
}
