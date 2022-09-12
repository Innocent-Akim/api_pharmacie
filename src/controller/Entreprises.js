import db from "../instance/Instance.js";
import dotenv from "dotenv";
dotenv.config();

const entreprises = db.entreprise;
const items = {};

items.addEntreprise = async (req, res, next) => {
  try {
  const imageUrl=process.env.URL_IMG;
    const { nom, rccm, idImpot, telephone, email } = req.body;
    const reponse = await entreprises.create({nom, rccm, idImpot, telephone, email,imageUrl});
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
items.updateEntreprise = async (req, res, next) => {
  try {
    const code=req.params.id;
    const { nom, rccm, idImpot, telephone, email } = req.body;
    const response=await entreprises.update({ nom, rccm, idImpot, telephone, email },{where:{code:code}}, );
    if(response){
      return res.status(200).json({ msg: `Modification avec succes`, data: response  });
    }else{
      return res.status(404).json({ msg: `Modification echoue`, data: {}  });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {}  });
  }
};

items.findEntreprise= async (req, res, next) => {
  try{
    const  response = await entreprises.findAll();
    if(response){
      return res.status(200).json({ msg: `Liste entreprises`, data: response  });
    }else{
      return res.status(404).json({ msg: `Liste entreprises empty`, data: {}   });
    }
  }catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {}   });
  }
}
items.deleteEntreprise= async (req, res, next) => {
  try{
    const code=req.params.code;
    const  response = await entreprises.destroy({where:{code:code}});
    if(response){
      return res.status(200).json({ msg: `Suppression reussi avec succes`, data: response  });
    }else{
      return res.status(404).json({ msg: `Suppression echoue`, data: {}   });
    }
  }catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {}   });
  }
}

export default items;
