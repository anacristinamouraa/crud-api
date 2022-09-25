import { inject, injectable } from "tsyringe";
import { Link } from "../../infra/typeorm/entities/Link";
import { ILinkRepository } from "../../infra/typeorm/repositories/ILinkRepository";

@injectable()
class ListLinkUseCase {

    constructor(
        @inject('LinkRepositoryInMemory')
        private linkRepository : ILinkRepository
    ) {}

    async exec() : Promise<Link[]> {
        return this.linkRepository.list();
    }
}

export { ListLinkUseCase };