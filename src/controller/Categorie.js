import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const categorie = db.categories;
const items = {};

items.addcategorie = async (req, res, next) => {
  try {
    const { designation, refAgence } = req.body;
    const reponse = await categorie.create({
      designation: designation,
      refAgence: refAgence,
    });
    if (reponse) {
      return res
        .status(200)
        .json({ msg: `Enregistrement réussi avec succès`, data: reponse });
    } else {
      return res.status(404).json({ msg: `Enregistrement echoue`, data: {} });
    }
  } catch (error) {
    return res.status(404).json({ msg: `Error ${error}`, data: {} });
  }
};
items.updatecategorie = async (req, res, next) => {
  try {
    const code = req.params.code;
    const { designation, refAgence } = req.body;
    const response = await categorie.update(
      {
        designation: designation,
        refAgence: refAgence,
      },
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

items.findcategorie = async (req, res, next) => {
  try {
    const refAgence = req.params.refAgence;
    const response = await categorie.findAll({
      where: { deleted: true, refAgence: refAgence },
    });
    if (response) {
      return res.status(200).json({ msg: `Liste categorie`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste categorie empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};
items.deletecategorie = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await categorie.update(
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
