import { Contact } from "../../contacts/entities/Contact"

export class User {
    id: string
    name: string
    email: string
    password: string
    createdAt : Date
    contact: Contact[]
}