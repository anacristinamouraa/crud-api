import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateLinkUseCase } from "./UpdateLinkUseCase";

class UpdateLinkController {
    async handle(request: Request, response:Response) : Promise<Response> {
        const { id, url, title, created_at } = request.body;
        const updateLinkUseCase = container.resolve(UpdateLinkUseCase);
        await updateLinkUseCase.exec({ id, url, title, created_at });
        return response.send();
    }
}

export { UpdateLinkController };