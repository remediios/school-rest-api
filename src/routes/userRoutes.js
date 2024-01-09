import { Router } from "express";
import userController from "../controllers/UserController";

const router = Router();

router.post("/", userController.store);

export default router;

/*
Controllers should contain around 5 methods
  index -> list all users -> GET
  store/create -> create a new user -> POST
  delete -> delete a user -> DELETE
  show -> show a single user -> GET
  update -> update a user -> PUT OR PATCH
*/
