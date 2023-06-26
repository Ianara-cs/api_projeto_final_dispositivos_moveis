import { Contact } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { UpdateContactDTO } from "../../dtos/UpdateContactDTO";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class UpdateContactUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository,
    ) {}

    async execute({id, latitude, longitude, name, phone}: UpdateContactDTO): Promise<Contact> {
        const contact = await this.contactsRepository.findContactById(id)

        if(!contact) {
            throw new NotFoundException('Contact not found!')
        }

        const updatedContact = await this.contactsRepository.updateContact({
            latitude: latitude ? latitude : contact.latitude,
            longitude: longitude ? longitude: contact.longitude,
            name: name ? name: contact.name,
            phone: phone ? phone : contact.phone,
            id
        })

        return updatedContact
    }
}