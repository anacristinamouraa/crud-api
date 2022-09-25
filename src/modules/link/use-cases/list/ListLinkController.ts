import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListLinkUseCase } from "./ListLinkUseCase";

class ListLinkController {
    async handle(request: Request, response:Response) : Promise<Response> {
        const linkListUseCase = container.resolve(ListLinkUseCase);
        const links = await linkListUseCase.exec();
        return response.send(links);
    }
}

export { ListLinkController };