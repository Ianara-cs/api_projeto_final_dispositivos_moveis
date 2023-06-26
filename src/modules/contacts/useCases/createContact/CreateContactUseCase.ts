import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { CreateContactDTO } from "../../dtos/CreateContactDTO";
import { Contact } from "../../entities/Contact";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class CreateContactUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository,
    ) {}

    async execute({latitude, longitude, name, phone, userId}: CreateContactDTO): Promise<Contact> {
        
        const newContact = await this.contactsRepository.createContact({
            latitude, longitude, name, phone, userId
        })

        return newContact
    }
}