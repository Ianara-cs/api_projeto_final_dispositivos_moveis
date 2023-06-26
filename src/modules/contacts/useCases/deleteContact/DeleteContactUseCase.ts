import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { AppError, NotFoundException } from "../../../../shared/errors/AppErrors";
import { Contact } from "../../entities/Contact";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class DeleteContactUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository
    ) {}

    async execute(id: string, userId: string): Promise<Contact> {
        const contact = await this.contactsRepository.findContactById(id)

        if(!contact) {
            throw new NotFoundException('Contact not found!')
        }

        if(contact.userId !== userId) {
            throw new AppError('Unauthorized operation')
        }

        const deletedContact = await this.contactsRepository.deleteContact(id)

        return deletedContact
    }
}