import { Link } from "../entities/Link";

type createLinkDto = {
    url: string;
    title: string;
}

interface ILinkRepository {
    list(): Promise<Link[]> ;
    listById(id: string): Promise<Link>;
    create({ url, title } : createLinkDto) : Promise<void>;
    update(link: Link) : Promise<void>;
    delete(id: string): Promise<void>;
}

export { ILinkRepository };