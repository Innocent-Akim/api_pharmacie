import express from "express";
import controller from "../controller/index.js";
import init from "../module/index.js";

const router = express.Router();
router.post(
  "/entreprise/add",
  init.modul.verifyToken,
  init.modul.verifyToken,
  init.itemsMulter.update.single("img"),
  controller.entreprise.addEntreprise
);
router.patch(
  "/entreprise/update/:id",
  init.modul.verifyToken,
  init.itemsMulter.update.single("img"),
  controller.entreprise.updateEntreprise
);
router.get(
  "/entreprise/find",
  init.modul.verifyToken,
  controller.entreprise.findEntreprise
);
router.delete(
  "/entreprise/delete/:code",
  init.modul.verifyToken,
  controller.entreprise.deleteEntreprise
);

router.post("/agent/add", init.modul.verifyToken, controller.agent.addAgent);
router.patch(
  "/agent/update/:id",
  init.modul.verifyToken,
  controller.agent.updateAgent
);
router.get(
  "/agent/find/:refAgence",
  init.modul.verifyToken,
  controller.agent.findAgent
);
router.delete(
  "/agent/delete/:code",
  init.modul.verifyToken,
  controller.agent.deleteAgent
);

router.post("/user/add", init.modul.verifyToken, controller.user.addUser);
router.post("/user/auth", controller.user.authenticate);

router.post(
  "/produit/add",
  init.modul.verifyToken,
  controller.produit.addProduit
);
router.patch(
  "/produit/update/:id",
  init.modul.verifyToken,
  controller.produit.updateProduit
);
router.get(
  "/produit/find/:refAgence",
  init.modul.verifyToken,
  controller.produit.findProduit
);
router.delete(
  "/produit/delete/:code",
  init.modul.verifyToken,
  controller.produit.deleteProduit
);

export default router;
