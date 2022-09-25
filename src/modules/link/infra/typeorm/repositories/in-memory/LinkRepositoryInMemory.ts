import { Link } from "../../entities/Link";
import { ILinkRepository } from "../ILinkRepository";

class LinkRepositoryInMemory implements ILinkRepository {

    links : Link[] = [];

    async list(): Promise<Link[]> {
        return this.links;
    }

    async listById(id: string): Promise<Link> {
        const link = this.links.find((link) => link.id === id);
        return link;
    }

    async create({ url, title }: { url: string; title: string; }): Promise<void> {
        console.log('here')
        const link = new Link();

        Object.assign(link, {
            url,
            title,
            created_at: new Date()
        });

        this.links.push(link);
    }

    async update(link: Link): Promise<void> {
        Object.assign(link, {
            updated_at: new Date()
        })

        const linkIndex = this.links.findIndex((l) => l.id === link.id);
        this.links[linkIndex] = link;
    }

    async delete(id: string): Promise<void> {
        this.links = this.links.filter((link) => link.id !== id);
    }
  
}

export { LinkRepositoryInMemory };