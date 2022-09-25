import { inject, injectable } from "tsyringe";
import { ILinkRepository } from "../../infra/typeorm/repositories/ILinkRepository";

@injectable()
class DeleteLinkUseCase {

    constructor(
        @inject('LinkRepositoryInMemory')
        private linkRepository: ILinkRepository
    ) {}

    async exec(id : string) : Promise<void> {
        await this.linkRepository.delete(id);
    }
}

export { DeleteLinkUseCase };