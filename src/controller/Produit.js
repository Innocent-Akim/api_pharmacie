import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const produit = db.produits;
const items = {};

items.addProduit = async (req, res, next) => {
  try {
    const { designation, pu, qtealert, refAgence } = req.body;
    const reponse = await produit.create({
      designation: designation,
      pu: pu,
      qtealert: qtealert,
      refAgence: refAgence,
    });
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
items.updateProduit = async (req, res, next) => {
  try {

    const code = req.params.id;
    const { designation, pu, qtealert, refAgence } = req.body;
    const exist = await produit.findOne({ where: { code: code } });
  
    const response = await produit.update(
      { designation:designation, pu:pu, qtealert:qtealert, refAgence:refAgence },
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

items.findProduit = async (req, res, next) => {
  try {
    const response = await produit.findAll();
    if (response) {
      return res.status(200).json({ msg: `Liste produit`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste produit empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};
items.deleteProduit = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await produit.destroy({ where: { code: code } });
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
