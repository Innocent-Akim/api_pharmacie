import db from "../instance/Instance.js";
import init from "../module/index.js";
const user = db.users;
const items = {};

items.addUser = async (req, res, next) => {
  try {
    const { username, password, status, codeAgent } = req.body;

    const reponse = await user.create({
      username: username,
      password: init.modul.initHash(password),
      status: status,
      codeAgent: codeAgent,
    });
    if (reponse) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: reponse });
    } else {
      return res.status(404).json({ msg: `Enregistrement echoue`, data: {} });
    }
  } catch (error) {
    return res.status(404).json({ msg: `Error ${error} `, data: {} });
  }
};
items.authenticate = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const response = await user.findOne({ where: { username: username } });
    const connect = await init.modul.initCompare(password, response.password);
    if (connect) {
      return res
        .status(200)
        .json({
          msg: `Vous etes connect avec succes`,
          data: response,
          token: "OK",
        });
    } else {
      return res
        .status(404)
        .json({ msg: `Echec de l'authentification esseyer encore` });
    }
  } catch (error) {
    return res.status(404).json({ msg: `${error}` });
  }
};

items.updateUser = async (req, res, next) => {
  try {
    const code = req.params.id;
    const { nom, telephone, refAgence } = req.body;
    const response = await user.update(
      { nom, telephone, refAgence },
      { where: { code: code } }
    );
    if (response) {
      return res
        .status(200)
        .json({ msg: `Modification avec succes`, data: response });
    } else {
      return res.status(404).json({ msg: ` Modification echoue`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: ` ${error} `, data: {} });
  }
};

items.findUser = async (req, res, next) => {
  try {
    const refAgence = req.params.refAgence;
    const response = await user.findAll({
      include: {
        model: db.entreprise,
        required: true,
      },
    });
    if (response) {
      return res.status(200).json({ msg: `Liste Users`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste Users empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: ` ${error} `, data: {} });
  }
};
items.deleteUser = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await user.destroy({ where: { code: code } });
    if (response) {
      return res
        .status(200)
        .json({ msg: ` Suppression reussi avec succes`, data: response });
    } else {
      return res.status(404).json({ msg: ` Suppression echoue`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: ` ${error} `, data: {} });
  }
};

export default items;
