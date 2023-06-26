import { prisma } from "../../../../shared/infra/prisma/prismaClient";
import { CreateContactDTO } from "../../dtos/CreateContactDTO";
import { UpdateContactDTO } from "../../dtos/UpdateContactDTO";
import { Contact } from "../../entities/Contact";
import { IContactsRepository } from "../IContactsRepository";

export class ContactsRepository implements IContactsRepository {
    async createContact({name, latitude, longitude, userId, phone}: CreateContactDTO): Promise<Contact> {
        const contact = await prisma.contact.create({
            data: {
                latitude, longitude, phone, userId, name
            }
        })

        return contact
    }

    async findContactById(id: string): Promise<Contact | null> {
        const contact = await prisma.contact.findUnique({
            where: {id}
        })

        return contact
    }

    async updateContact({id, name, phone, latitude, longitude}: UpdateContactDTO): Promise<Contact> {
        const contact = await prisma.contact.update({
            where: {id},
            data: {
                name, phone, latitude, longitude, 
            }
        })

        return contact
    }

    async findAllContacts(userId: string): Promise<Contact[]> {
        const contacts = await prisma.contact.findMany({
            where: {userId}
        })

        return contacts
    }

    async deleteContact(id: string): Promise<Contact> {
        const contact = await prisma.contact.delete({
            where: { id}
        })

        return contact
    }

    async findAllFavoriteContacts(userId: string): Promise<Contact[]> {
        const contacts = await prisma.contact.findMany({
            where: {userId, isFavorite: true}
        })

        return contacts
    }

    async changeFavorite(id: string, isFavorite: boolean): Promise<void> {
        await prisma.contact.update({
            where: {id},
            data: {
                isFavorite
            }
        })
    }

}