export class Contact {
    id?: number;
    name: string;
    telephone: string;
    constructor(name: string, telephone: string) {
        this.name = name;
        this.telephone = telephone;
    }
}