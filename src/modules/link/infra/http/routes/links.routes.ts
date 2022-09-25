import { Router } from "express";
import { CreateLinkController } from "../../../use-cases/create/CreateLinkController";
import { DeleteLinkController } from "../../../use-cases/delete/DeleteLinkController";
import { ListByIdLinkController } from "../../../use-cases/list-by-id/ListByIdLinkController";
import { ListLinkController } from "../../../use-cases/list/ListLinkController";
import { UpdateLinkController } from "../../../use-cases/update/UpdateLinkController";

const linksRouter = Router();

const listLinkController = new ListLinkController();
const createLinkController = new CreateLinkController();
const deleteLinkController = new DeleteLinkController();
const updateLinkController = new UpdateLinkController();
const listByIdLinkController = new ListByIdLinkController();

linksRouter.get('/', listLinkController.handle);
linksRouter.get('/:id', listByIdLinkController.handle);
linksRouter.post('/', createLinkController.handle);
linksRouter.put('/', updateLinkController.handle);
linksRouter.delete('/:id', deleteLinkController.handle);

export { linksRouter };