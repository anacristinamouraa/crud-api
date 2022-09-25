import { v4 as uuidv4 } from 'uuid';

class Link {
    id?: string;
    url: string;
    title: string;
    created_at?: Date;
    updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Link };