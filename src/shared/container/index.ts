import { container } from "tsyringe";
import { LinkRepositoryInMemory } from "../../modules/link/infra/typeorm/repositories/in-memory/LinkRepositoryInMemory";
import { ILinkRepository } from "../../modules/link/infra/typeorm/repositories/ILinkRepository";

container.registerSingleton<ILinkRepository>(
    'LinkRepositoryInMemory',
    LinkRepositoryInMemory
);