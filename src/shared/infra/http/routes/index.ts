import { Router } from "express";
import { linksRouter } from "../../../../modules/link/infra/http/routes/links.routes";

const routes = Router();

routes.use('/links', linksRouter);

export { routes };