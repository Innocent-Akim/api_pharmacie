import db from "../instance/Instance.js";
const client = db.clients;

const items = {};

items.addclient = async (req, res, next) => {
  try {
    const { nom, telephone, refAgence } = req.body;
    const reponse = await client.create({ nom, telephone, refAgence });
    if (reponse) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: reponse });
    } else {
      return res.status(404).json({ msg: `Enregistrement echoue`, data: {} });
    }
  } catch (error) {
    return res.status(404).json({ msg: `Error ${error}`, data: {} });
  }
};

items.updateclient = async (req, res, next) => {
  try {
    const code = req.params.id;
    const { nom, telephone, refAgence } = req.body;
    const response = await client.update(
      { nom, telephone, refAgence },
      { where: { code: code } }
    );
    if (response) {
      return res
        .status(200)
        .json({ msg: `Modification avec succes`, data: response });
    } else {
      return res.status(404).json({ msg: `Modification echoue`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};

items.findclient = async (req, res, next) => {
  try {
    const refAgence = req.params.refAgence;
    const response = await client.findAll({
      where: { deleted: true, refAgence: refAgence },
    });
    if (response) {
      return res.status(200).json({ msg: `Liste clients`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste clients empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};

items.deleteclient = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await client.update(
      { deleted: false },
      { where: { code: code } }
    );
    if (response) {
      return res
        .status(200)
        .json({ msg: `Suppression reussi avec succes`, data: response });
    } else {
      return res.status(404).json({ msg: `Suppression echoue`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};

export default items;
