import express from "express";
import controller from "../controller/index.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  return res.status(200).json(`${req.protocol}://${req.get("host")}`);
});

router.post("/entreprise/add", controller.entreprise.addEntreprise);
router.patch("/entreprise/update/:id", controller.entreprise.updateEntreprise);
router.get("/entreprise/find", controller.entreprise.findEntreprise);
router.delete("/entreprise/delete/:code",controller.entreprise.deleteEntreprise);

router.post("/agent/add", controller.agent.addAgent);
router.patch("/agent/update/:id", controller.agent.updateAgent);
router.get("/agent/find/:refAgence", controller.agent.findAgent);
router.delete("/agent/delete/:code", controller.agent.deleteAgent);

export default router;
