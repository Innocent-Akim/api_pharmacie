import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const enteteAppro = db.enteteFournirs;
const detailAppro = db.detailFournirs;
const fournisseur = db.fournisseurs;
const produits = db.produits;
const items = {};

items.addAprovisionne = async (req, res, next) => {
  try {
    const { refAgence, nomFournisseur, detail } = req.body;
    var response = JSON.parse(detail);
    const idFournisseur = fournisseur.findOne({
      where: { nom: nomFournisseur, refAgence: refAgence, deleted: true },
    });
    let details;
    const entete = await enteteAppro.create({
      // codeFournisseur: idFournisseur.code,
      refAgence: refAgence,
      deleted: true,
    });
    response.map(async (data) => {
      const produit = await produits.findById({
        where: {
          designation: data.designation,
          refAgence: refAgence,
          deleted: true,
        },
      });

      details = await detailAppro.create({
        qte: data.qte,
        pu: data.pu,
        lo: data.lo,
        dateExpiration: data.dateExpiration,
        codeEnteteFournir: entete.code,
        codeProduit: produit.code,
        deleted: true,
      });
    });

    if (details) {
      return res
        .status(200)
        .json({ msg: "Enregistrement réussi avec succès", data: details });
    } else {
      return res.status(401).json({ msg: "Enregistrement echoue", data: {} });
    }
  } catch (error) {
    return res.status(402).json({ msg: `ERROR ${error}`, data: {} });
  }
};

export default items;
