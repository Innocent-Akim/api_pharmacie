import express from 'express';
import controller from '../controller/index.js';
const router=express.Router();


router.get('/',(req,res,next)=>{
    return res.status(200).json(`${req.protocol}://${req.get('host')}`)
});

router.post('/entreprise/add',controller.entreprise.addEntreprise )
router.post('/entreprise/update/:code',controller.entreprise.updateEntreprise )
router.post('/entreprise/find',controller.entreprise.findEntreprise )
router.post('/entreprise/delete/:code',controller.entreprise.deleteEntreprise )
export default router;