import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const stock = db.stocks;
const items = {};
//   qte: {
//       type: DataTypes.FLOAT,
//       defaultValue: 0,
//     },
//     codeProduit: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Produits",
//         key: "code",
//       },
//     },
items.addstock = async (req, res, next) => {
  try {
    const { qte, codeProduit } = req.body;
    const reponse = await stock.create({
      qte: qte,
      codeProduit: codeProduit,
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
items.updatestock = async (req, res, next) => {
  try {
    const code = req.params.id;
    const {  qte, codeProduit } = req.body;

    const response = await stock.update(
      {
        qte: qte,
        codeProduit: codeProduit,
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

items.findstock = async (req, res, next) => {
  try {
    const refAgence = req.params.refAgence;
      const response = await stock.findAll(
        { include: "Produits" },
        // {
        //   where: { deleted: true, refAgence: refAgence },
        // }
      );
    if (response) {
      return res.status(200).json({ msg: `Liste stock`, data: response });
    } else {
      return res.status(404).json({ msg: `Liste stock empty`, data: {} });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {} });
  }
};
items.deletestock = async (req, res, next) => {
  try {
    const code = req.params.code;
    const response = await stock.update(
      { deleted: 0 },
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
