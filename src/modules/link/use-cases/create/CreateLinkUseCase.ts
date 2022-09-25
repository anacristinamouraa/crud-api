import { inject, injectable } from "tsyringe";
import { Link } from "../../infra/typeorm/entities/Link";
import { ILinkRepository } from "../../infra/typeorm/repositories/ILinkRepository";

type Payload = {
    url: string;
    title: string;
}

@injectable()
class CreateLinkUseCase {

    constructor( 
        @inject('LinkRepositoryInMemory')
        private linkRepository : ILinkRepository 
    ) {}

    async exec({url, title} : Payload) : Promise<void> {
        return this.linkRepository.create({ url, title });
    }
}

export { CreateLinkUseCase };