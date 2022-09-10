import db from "../instance/Instance.js";
const agent = db.agents;
const items = {};

items.addAgent = async (req, res, next) => {
  try {
    const { nom,  telephone, refAgence } = req.body;
    const reponse = await agent.create(req.body);
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
items.updateAgent = async (req, res, next) => {
  try {
    const code=req.params.id;
    const { nom,  telephone, refAgence } = req.body;
    const response=await agent.update({ nom, telephone, refAgence},{where:{code:code}}, );
    if(response){
      return res.status(200).json({ msg: `Modification avec succes`, data: response  });
    }else{
      return res.status(404).json({ msg: `Modification echoue`, data: {}  });
    }
  } catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {}  });
  }
};

items.findAgent= async (req, res, next) => {
  try{
    const refAgence=req.params.refAgence;
    const  response = await agent.findAll({where:{refAgence:refAgence}});
    if(response){
      return res.status(200).json({ msg: `Liste Agents`, data: response  });
    }else{
      return res.status(404).json({ msg: `Liste Agents empty`, data: {}   });
    }
  }catch (error) {
    return res.status(505).json({ msg: `${error}`, data: {}   });
  }
}
items.deleteAgent= async (req, res, next) => {
  try{
    const code=req.params.code;
    const  response = await agent.destroy({where:{code:code}});
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
