import db from "../instance/Instance.js";
const entreprises = db.entreprise;
const items = {};

items.addEntreprise = async (req, res, next) => {
  try {
    const reponse = await entreprises.create(req.body);
    if (reponse) {
      return res
        .status(200)
        .json({ msg: `Enregistrement reussi avec succes`, data: reponse });
    } else {
      return res.status(404).json({ msg: `Enregistrement echoue`, data: {} });
    }
  } catch (error) {
    return res.status(404).json({ msg: `Error ${error}`, data: {}})
  }
};

export default items;
