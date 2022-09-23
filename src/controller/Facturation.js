import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const enteteFacture = db.enteteFactures;
const detailFacture = db.detailFactures;
const items = {};


items.addFacturation = async (req, res, next) => { 
    try {
    const { codeUser, codeClient, refAgence, data } = req.body;
        
      const response = await enteteFacture.create({
        codeUser: codeUser,
        codeClient: codeClient,
        refAgence:refAgence,
      });
        if (response) { 
            data.forEach(async response => {
                const vente = await detailFacture.create(
                    {
                        

                    }
                );  
            })
        }
        


     } catch (err) { }

}


//     montant: {
//       type: DataTypes.FLOAT,
//       defaultValue: 0,
//     },
//     codeUser: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Utilisateurs",
//         key: "code",
//       },
//     },
//     codeClient: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Clients",
//         key: "code",
//       },
//     },
//     deleted: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//     refAgence: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: "Entreprises",
//         key: "code",
//       },
//     },
//   });