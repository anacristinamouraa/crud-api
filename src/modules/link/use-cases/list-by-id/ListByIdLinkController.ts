import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListByIdLinkUseCase } from "./ListByIdLinkUseCase";

class ListByIdLinkController {
    async handle(request: Request, response:Response) : Promise<Response> {
        const { id } = request.params;
        const listByIdUseCase = container.resolve(ListByIdLinkUseCase);
        const link = await listByIdUseCase.exec(id);
        return response.json(link);
    }
}

export { ListByIdLinkController };