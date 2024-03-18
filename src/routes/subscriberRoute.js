import { Router } from "express";
import { createSubscriber, deletedSubscriber, getSubscriber, getSubscriberById, updateSubscriber } from "../controllers/subscriberController";

const subscriberRouter = Router();

subscriberRouter.get("/", getSubscriber);
subscriberRouter.get("/:id", getSubscriberById);
subscriberRouter.post('/add', createSubscriber);
subscriberRouter.put("/:id/edit", updateSubscriber);
subscriberRouter.delete("/:id/remove", deletedSubscriber);

export default subscriberRouter;