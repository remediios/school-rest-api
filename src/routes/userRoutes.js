import { Router } from "express";
import userController from "../controllers/UserController";

import loginRequired from "../middlewares/loginRequired";

const router = Router();

router.get("/", loginRequired, userController.index);
router.post("/", userController.store);
router.get("/:id", userController.show);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;

/*
Controllers should contain around 5 methods
  index -> list all users -> GET
  store/create -> create a new user -> POST
  show -> show a single user -> GET
  update -> update a user -> PUT OR PATCH
  delete -> delete a user -> DELETE
*/
