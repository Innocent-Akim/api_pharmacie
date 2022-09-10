import db from "../instance/Instance.js";
const entreprises = db.entreprise;
const items = {};

items.addEntreprise = async (req, res, next) => {
  try {
    const { nom, rccm, idImpot, telephone, email } = req.body;
    const reponse = await entreprises.create(req.body);
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
    const code=req.params.code;
    const { nom, rccm, idImpot, telephone, email } = req.body;
    const response=await entreprises.update(code, { nom, rccm, idImpot, telephone, email });
    if(response){
      return res.status(200).json({ msg: `Modification avec succes`, data: response  });
    }else{
      return res.status(404).json({ msg: `Modification echoue`, data: {}  });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: response  });
  }
};

items.findEntreprise= async (req, res, next) => {
  try{
    const  response = await entreprises.find();
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
    const  response = await entreprises.destroy({code:code});
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
