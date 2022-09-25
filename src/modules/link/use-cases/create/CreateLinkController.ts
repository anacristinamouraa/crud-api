import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLinkUseCase } from "./CreateLinkUseCase";

class CreateLinkController {
    async handle(request: Request, response: Response) : Promise<Response> {
        const { url, title } = request.body;
        const createLinkUseCase = container.resolve(CreateLinkUseCase)
        await createLinkUseCase.exec({ url, title });
        return response.send();
    }
}

export { CreateLinkController };