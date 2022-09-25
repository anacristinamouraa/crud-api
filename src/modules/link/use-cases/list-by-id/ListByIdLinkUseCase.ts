import { inject, injectable } from "tsyringe";
import { Link } from "../../infra/typeorm/entities/Link";
import { ILinkRepository } from "../../infra/typeorm/repositories/ILinkRepository";

@injectable()
class ListByIdLinkUseCase {

    constructor(
        @inject('LinkRepositoryInMemory')
        private linkRepository : ILinkRepository
    ) {}

    async exec(id: string) : Promise<Link> {
        const link = await this.linkRepository.listById(id);
        return link;
    }
}

export { ListByIdLinkUseCase };