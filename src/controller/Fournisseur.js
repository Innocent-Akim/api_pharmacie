import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();
const fournisseur = db.fournisseurs;
const items = {};

items.addfournisseur = async (req, res, next) => {
  try {
    const { nom, telephone, codeAgence } = req.body;
    const reponse = await fournisseur.create({
      nom: nom,
      telephone: telephone,
      codeAgence: codeAgence,
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
items.updatefournisseur = async (req, res, next) => {
  try {
    const code = req.params.code;
    const { nom, telephone, codeAgence } = req.body;
    const response = await fournisseur.update(
      {
        nom: nom,
        telephone: telephone,
        codeAgence: codeAgence,
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

items.findfournisseur = async (req, res, next) => {
  try {
    const refAgence = req.params.refAgence;
    const response = await fournisseur.findAll({
      where: { deleted: true, refAgence: refAgence },
    });
    if (response) {
      return res.status(200).json({ msg: `Liste fournisseur`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste fournisseur empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};
items.deletefournisseur = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await fournisseur.update(
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
