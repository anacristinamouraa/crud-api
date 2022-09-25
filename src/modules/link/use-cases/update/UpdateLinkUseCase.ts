import { inject, injectable } from "tsyringe";
import { Link } from "../../infra/typeorm/entities/Link";
import { ILinkRepository } from "../../infra/typeorm/repositories/ILinkRepository";

@injectable()
class UpdateLinkUseCase {

    constructor(
        @inject('LinkRepositoryInMemory')
        private linkRepository : ILinkRepository
    ) {}

    async exec(link: Link) {
        await this.linkRepository.update(link);
    }
}

export { UpdateLinkUseCase };