import express from "express";
import controller from "../controller/index.js";
import init from "../module/index.js";

const router = express.Router();
router.post(
  "/entreprise/add",

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


router.get(
  "/client/find/:refAgence",
  init.modul.verifyToken,
  controller.client.findclient
);
router.post(
  "/client/add",
  init.modul.verifyToken,
  controller.client.addclient
);
router.patch(
  "/client/update/:id",
  init.modul.verifyToken,
  controller.client.updateclient
);
router.delete(
  "/client/delete/:code",
  init.modul.verifyToken,
  controller.client.deleteclient
);


router.post("/stock/add", init.modul.verifyToken, controller.Stock.addstock);

router.post(
  "/categorie/add",
  init.modul.verifyToken,
  controller.Categorie.addcategorie
);
router.patch(
  "/categorie/update/:code",
  init.modul.verifyToken,
  controller.Categorie.updatecategorie
);
router.get(
  "/categorie/find/:refAgence",
  init.modul.verifyToken,
  controller.Categorie.findcategorie
);
router.delete(
  "/categorie/delete/:code",
  init.modul.verifyToken,
  controller.Categorie.deletecategorie
);

router.post(
  `/approvisionnement/add`,
  controller.approvisionnement.addAprovisionne
);
router.post(`/fournisseur/add`, controller.fournisseurs.addfournisseur);
router.patch(
  `/fournisseur/update/:code`,
  controller.fournisseurs.updatefournisseur
);
router.delete(
  `/fournisseur/delete/:code`,
  controller.fournisseurs.deletefournisseur
);
router.get(
  `/fournisseur/find/:refAgence`,
  controller.fournisseurs.findfournisseur
);
export default router;
