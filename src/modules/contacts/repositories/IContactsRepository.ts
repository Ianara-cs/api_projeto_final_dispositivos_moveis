import { CreateContactDTO } from "../dtos/CreateContactDTO";
import { UpdateContactDTO } from "../dtos/UpdateContactDTO";
import { Contact } from "../entities/Contact";

export interface IContactsRepository {
    createContact(data: CreateContactDTO): Promise<Contact>
    findContactById(id: string): Promise<Contact | null>
    updateContact(data: UpdateContactDTO): Promise<Contact>
    findAllContacts(userId: string): Promise<Contact[]>
    deleteContact(id: string): Promise<Contact>
    findAllFavoriteContacts(userId: string): Promise<Contact[]>
    changeFavorite(id: string, isFavorite: boolean): Promise<void>
}